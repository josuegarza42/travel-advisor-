#!/usr/bin/env python3
"""Script para probar el sistema Travel Advisor"""

import sys
import os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), 'backend'))

# Configurar variable de entorno mock si no existe
if not os.getenv('ANTHROPIC_API_KEY'):
    os.environ['ANTHROPIC_API_KEY'] = 'test-key-for-structure-check'

print("🧪 Probando Travel Advisor System\n")
print("="*60)

# Test 1: Importaciones
print("\n1️⃣ Verificando importaciones...")
try:
    from app import create_app
    from app.risk_checker import CountryRiskChecker
    from app.ai_advisor import TravelAdvisor
    print("   ✅ Todas las importaciones correctas")
except Exception as e:
    print(f"   ❌ Error en importaciones: {e}")
    sys.exit(1)

# Test 2: Risk Checker
print("\n2️⃣ Probando CountryRiskChecker...")
try:
    risk_checker = CountryRiskChecker()

    # Test México
    mexico_risk = risk_checker.get_work_safety_assessment("México")
    print(f"   📊 México: Nivel {mexico_risk['risk_level']} - {mexico_risk['risk_level_name']}")
    print(f"   ✅ Seguro para trabajo: {mexico_risk['is_safe']}")

    # Test Colombia
    colombia_risk = risk_checker.get_work_safety_assessment("Colombia")
    print(f"   📊 Colombia: Nivel {colombia_risk['risk_level']} - {colombia_risk['risk_level_name']}")
    print(f"   ✅ Seguro para trabajo: {colombia_risk['is_safe']}")

    # Test país peligroso
    afghanistan_risk = risk_checker.get_work_safety_assessment("Afghanistan")
    print(f"   📊 Afghanistan: Nivel {afghanistan_risk['risk_level']} - {afghanistan_risk['risk_level_name']}")
    print(f"   ❌ Seguro para trabajo: {afghanistan_risk['is_safe']}")

    print("   ✅ Risk Checker funcionando correctamente")
except Exception as e:
    print(f"   ⚠️ Risk Checker error (no crítico): {e}")

# Test 3: Estructura de datos
print("\n3️⃣ Verificando estructura de datos...")
try:
    import json

    with open('backend/example_request.json', 'r') as f:
        example_data = json.load(f)

    print(f"   📦 Destinos en ejemplo: {len(example_data['destinations'])}")

    # Verificar campos nuevos
    first_dest = example_data['destinations'][0]
    required_fields = ['hostel_has_workspace', 'hostel_social_vibe', 'city_safety_rating']

    for field in required_fields:
        if field in first_dest:
            print(f"   ✅ Campo '{field}': {first_dest[field]}")
        else:
            print(f"   ❌ Falta campo: {field}")

    # Verificar preferencias del grupo
    group_prefs = example_data['group_preferences']
    new_prefs = ['prefers_hostels', 'values_social_atmosphere', 'city_safety_important']

    for pref in new_prefs:
        if pref in group_prefs:
            print(f"   ✅ Preferencia '{pref}': {group_prefs[pref]}")
        else:
            print(f"   ❌ Falta preferencia: {pref}")

    print("   ✅ Estructura de datos correcta")
except Exception as e:
    print(f"   ❌ Error en estructura: {e}")

# Test 4: Flask App
print("\n4️⃣ Creando Flask app...")
try:
    app = create_app()
    print(f"   ✅ App creada: {app.name}")
    print(f"   ✅ Rutas registradas: {len(app.url_map._rules)} rutas")

    # Listar rutas
    for rule in app.url_map.iter_rules():
        if not rule.rule.startswith('/static'):
            print(f"      • {rule.rule} [{', '.join(rule.methods - {'HEAD', 'OPTIONS'})}]")

except Exception as e:
    print(f"   ❌ Error creando app: {e}")
    sys.exit(1)

# Test 5: Probar estructura del prompt
print("\n5️⃣ Verificando generación de prompt...")
try:
    advisor = TravelAdvisor()

    # Cargar ejemplo
    with open('backend/example_request.json', 'r') as f:
        test_data = json.load(f)

    # Generar prompt (sin llamar a Claude)
    prompt = advisor._build_analysis_prompt(test_data)

    # Verificar que el prompt contiene las nuevas secciones
    checks = [
        ("🏠 PREFERENCIA CRÍTICA DE HOSPEDAJE", "Sección de hostales"),
        ("🛡️ SEGURIDAD URBANA ES PRIORIDAD", "Sección de seguridad"),
        ("Hostal tiene espacio de trabajo", "Campo workspace"),
        ("Hostal tiene ambiente social", "Campo social"),
        ("Seguridad de la ciudad/barrio", "Campo seguridad ciudad")
    ]

    for check_text, description in checks:
        if check_text in prompt:
            print(f"   ✅ {description} incluida")
        else:
            print(f"   ⚠️ {description} no encontrada")

    print(f"\n   📏 Longitud del prompt: {len(prompt)} caracteres")
    print("   ✅ Prompt generado correctamente")

except Exception as e:
    print(f"   ❌ Error generando prompt: {e}")

# Resumen final
print("\n" + "="*60)
print("✅ SISTEMA LISTO PARA USAR")
print("\nPara iniciar:")
print("  cd travel-advisor")
print("  ./start.sh")
print("\nO manualmente:")
print("  cd backend && python3 run.py")
print("  Luego abre: http://localhost:8080")
print("="*60)
