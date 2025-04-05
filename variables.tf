# variables.tf

variable "porkbun_api_key" {
  type        = string
  description = "The API key for Porkbun"
  sensitive   = true
}

variable "porkbun_api_secret" {
  type        = string
  description = "The API secret for Porkbun"
  sensitive   = true
}
