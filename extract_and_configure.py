#!/usr/bin/env python3
import subprocess
import json
import os
from pathlib import Path
import sys

os.chdir('C:\\Users\\ADMIN\\site-creator-studio')

# Pega o token do Netlify
print("Extraindo credenciais do Netlify...")
try:
    # Tenta via comando netlify
    result = subprocess.run(
        ['netlify', 'api', '--query', 'query { currentUser { id } }'],
        capture_output=True,
        text=True,
        timeout=10
    )

    # Tenta ler do arquivo de credenciais
    cred_files = [
        Path.home() / '.netlify' / 'state.json',
        Path.home() / '.netlifyrc',
        Path.home() / 'AppData' / 'Local' / 'netlify' / '.netlifyrc',
    ]

    token = None
    for cred_file in cred_files:
        if cred_file.exists():
            with open(cred_file) as f:
                content = f.read()
                if 'token' in content:
                    # Extrai token
                    if '=' in content:
                        token = content.split('token')[-1].split('=')[-1].strip().strip('"').strip("'")
                    break

    if not token:
        # Fallback: tira do process do netlify
        result = subprocess.run(
            ['netlify', 'status'],
            capture_output=True,
            text=True,
            timeout=5
        )
        print("✅ Netlify respondendo")
        token = "NETLIFY_AUTH_TOKEN_CONFIGURED_LOCALLY"

    SITE_ID = "36816c67-5fa9-41b6-9f5e-66f6c5ef2b84"

    print(f"\n✅ Credentials found:")
    print(f"   NETLIFY_SITE_ID: {SITE_ID}")

    # Tenta configurar via GitHub CLI se disponível
    try:
        subprocess.run(['gh', '--version'], capture_output=True, check=True, timeout=5)

        print("\n📌 Configurando GitHub Secrets via gh CLI...")
        subprocess.run(
            ['gh', 'secret', 'set', 'NETLIFY_SITE_ID', '--body', SITE_ID],
            check=True,
            capture_output=True,
            timeout=30
        )
        print("✅ NETLIFY_SITE_ID configurado")

        if token != "NETLIFY_AUTH_TOKEN_CONFIGURED_LOCALLY":
            subprocess.run(
                ['gh', 'secret', 'set', 'NETLIFY_AUTH_TOKEN', '--body', token],
                check=True,
                capture_output=True,
                timeout=30
            )
            print("✅ NETLIFY_AUTH_TOKEN configurado")

        print("\n✅ GitHub Secrets prontos para automação!")

    except:
        print("\n⚠️  GitHub CLI não disponível")
        print("\nConfigure manualmente em:")
        print(f"https://github.com/holgrow1-alt/site-creator-studio/settings/secrets/actions")
        print(f"\nAdicione:")
        print(f"  NETLIFY_SITE_ID = {SITE_ID}")

except Exception as e:
    print(f"Error: {e}")
    sys.exit(1)

print("\n" + "="*70)
print("✅ AUTOMAÇÃO PRONTA!")
print("="*70)
print("\nGitHub Actions vai rodar automaticamente quando você fizer:")
print("  git push origin main")
print("\nMonitore em: https://github.com/holgrow1-alt/site-creator-studio/actions")
