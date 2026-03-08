#!/bin/bash

echo "🧪 Testing Travel Advisor API"
echo "=============================="
echo ""

# Health check
echo "1️⃣ Health check..."
curl -s http://localhost:5000/api/health | python3 -m json.tool
echo ""

# Test analysis
echo "2️⃣ Testing destination analysis..."
echo "   (Esto puede tomar 10-20 segundos...)"
echo ""

curl -s -X POST http://localhost:5000/api/analyze \
  -H "Content-Type: application/json" \
  -d @backend/example_request.json | python3 -m json.tool

echo ""
echo "✅ Test completado"
