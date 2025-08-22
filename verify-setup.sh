#!/bin/bash

# Cloudflare Tunnel Verification Script
# Run this script on your VPS to verify your setup

echo "=== Cloudflare Tunnel Verification Script ==="
echo

# Check if running as root
if [ "$EUID" -ne 0 ]; then
  echo "Please run as root or with sudo"
  exit 1
fi

echo "1. Checking Docker installation..."
if command -v docker &> /dev/null; then
  echo "  ✓ Docker is installed"
else
  echo "  ✗ Docker is not installed"
fi
echo

echo "2. Checking running containers..."
if docker ps | grep -q magic-portfolio; then
  echo "  ✓ magic-portfolio container is running"
else
  echo "  ✗ magic-portfolio container is not running"
fi
echo

echo "3. Checking port mapping..."
PORT_MAPPING=$(docker port magic-portfolio 2>/dev/null | grep 8888)
if [ ! -z "$PORT_MAPPING" ]; then
  echo "  ✓ Port mapping found: $PORT_MAPPING"
else
  echo "  ✗ No port mapping found for port 8888"
fi
echo

echo "4. Testing local application access..."
if curl -s http://localhost:8888 | grep -q "html"; then
  echo "  ✓ Application accessible via localhost"
else
  echo "  ✗ Application not accessible via localhost"
fi
echo

echo "5. Checking cloudflared installation..."
if command -v cloudflared &> /dev/null; then
  echo "  ✓ cloudflared is installed"
else
  echo "  ✗ cloudflared is not installed"
fi
echo

echo "6. Checking cloudflared service status..."
if systemctl is-active --quiet cloudflared; then
  echo "  ✓ cloudflared service is running"
else
  echo "  ✗ cloudflared service is not running"
fi
echo

echo "7. Checking configuration file..."
if [ -f "/etc/cloudflared/config.yml" ]; then
  echo "  ✓ Configuration file exists"
  echo "    Contents:"
  cat /etc/cloudflared/config.yml | sed 's/^/    /'
else
  echo "  ✗ Configuration file not found"
fi
echo

echo "8. Checking network binding..."
NETSTAT_OUTPUT=$(netstat -tlnp 2>/dev/null | grep :8888)
if echo "$NETSTAT_OUTPUT" | grep -q "0.0.0.0:8888\|:::8888"; then
  echo "  ✓ Application is binding to all interfaces"
  echo "    Binding info: $NETSTAT_OUTPUT"
elif echo "$NETSTAT_OUTPUT" | grep -q "127.0.0.1:8888"; then
  echo "  ⚠ Application is only binding to localhost (may cause tunnel issues)"
  echo "    Binding info: $NETSTAT_OUTPUT"
else
  echo "  ✗ No application found listening on port 8888"
fi
echo

echo "9. Checking firewall..."
if command -v ufw &> /dev/null && ufw status | grep -q "8888"; then
  echo "  ✓ Firewall allows port 8888"
elif command -v ufw &> /dev/null && ufw status | grep -q "active"; then
  echo "  ⚠ Firewall is active but port 8888 may not be allowed"
else
  echo "  ✓ No restrictive firewall found (or ufw not installed)"
fi
echo

echo "=== Verification Complete ==="
echo
echo "For detailed troubleshooting, refer to CLOUDFLARE-TROUBLESHOOTING.md"