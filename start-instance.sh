#!/bin/bash
apt-get update -y
apt-get install -y ca-certificates curl gnupg lsb-release

mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg

echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null

apt-get update -y
apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin certbot nginx python3-certbot-nginx

systemctl enable docker
systemctl start docker

docker pull ghcr.io/reisearnor/website:latest
docker run -d -p 3000:3000 ghcr.io/reisearnor/website:latest

curl -sL https://gist.githubusercontent.com/ReiseArnor/ac8b97bf67c8b4776c1f26cde29170c8/raw/be6302cff90934c4076c5862c5cfc507a6a04944/make-domain.sh > make-domain.sh
sed -i 's/[[:space:]]*$//' make-domain.sh
chmod +x make-domain.sh
./make-domain.sh reisearnor.io 3000 odanisdejesus@gmail.com
