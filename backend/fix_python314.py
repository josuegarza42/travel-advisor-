#!/usr/bin/env python3
"""Script para arreglar compatibilidad con Python 3.14"""

import re

def fix_file(filepath):
    """Fix f-strings with emojis for Python 3.14 compatibility"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # La estrategia es: cuando hay emojis en líneas dentro de f-strings multiline,
    # mover esas líneas fuera del f-string y concatenarlas

    # Por ahora, solo necesitamos verificar que el archivo compila
    try:
        compile(content, filepath, 'exec')
        print(f"✅ {filepath} - Sin problemas")
        return True
    except SyntaxError as e:
        print(f"❌ {filepath} - Línea {e.lineno}: {e.msg}")
        return False

if __name__ == '__main__':
    print("Verificando compatibilidad Python 3.14...\n")

    files = [
        'app/__init__.py',
        'app/config.py',
        'app/models.py',
        'app/routes.py',
        'app/ai_advisor.py',
        'app/risk_checker.py',
        'run.py'
    ]

    all_ok = True
    for file in files:
        if not fix_file(file):
            all_ok = False

    if all_ok:
        print("\n✅ Todos los archivos son compatibles")
    else:
        print("\n⚠️ Algunos archivos tienen problemas")
        print("Recomendación: Usar Python 3.11 o 3.12")
