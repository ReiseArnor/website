terraform {
  cloud {

    organization = "reise"

    workspaces {
      name = "reisearnor"
    }
  }
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
    porkbun = {
      source  = "jianyuan/porkbun"
      version = "~> 0.1.0"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region = "us-east-2"
}

provider "porkbun" {
  api_key    = var.porkbun_api_key
  secret_key = var.porkbun_api_secret
}

resource "porkbun_dns_record" "update_a_record" {
  domain = "reisearnor.io"

  type       = "A"
  content    = aws_eip.app_server_eip.public_ip
  depends_on = [aws_eip.app_server_eip]
}

resource "porkbun_dns_record" "update_aaaa_record" {
  domain = "reisearnor.io"

  subdomain  = "www"
  type       = "A"
  content    = aws_eip.app_server_eip.public_ip
  depends_on = [porkbun_dns_record.update_a_record]
}

resource "aws_eip" "app_server_eip" {
  vpc = true
}

resource "aws_eip_association" "app_server_eip_association" {
  instance_id   = aws_instance.app_server.id
  allocation_id = aws_eip.app_server_eip.id

  depends_on = [aws_instance.app_server]
}

resource "aws_instance" "app_server" {
  ami           = "ami-04f167a56786e4b09"
  instance_type = "t2.micro"
  key_name      = "reise"
  tags = {
    Name = "ExampleAppServer"
  }

  vpc_security_group_ids = [aws_security_group.web_and_ssh.id]
  depends_on             = [porkbun_dns_record.update_aaaa_record]
}

data "aws_vpc" "default" {
  default = true
}

resource "aws_security_group" "web_and_ssh" {
  name        = "allow_web_ssh"
  description = "Allow SSH, HTTP, and HTTPS"
  vpc_id      = data.aws_vpc.default.id

  ingress {
    description = "SSH"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "HTTP"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "HTTP"
    from_port   = 8080
    to_port     = 8080
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "HTTPS"
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "web-ssh-access"
  }
}
