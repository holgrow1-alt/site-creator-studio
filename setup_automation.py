import json
from pathlib import Path
import subprocess
import os

# Pega o token do Netlify armazenado
netlify_dir = Path.home() / '.netlify'
state_file = netlify_dir / 'state.json'

netlify_token = None
site_id = None

try:
    if state_file.exists():
        with open(state_file) as f:
            state = json.load(f)
            # Tenta vários campos onde o token pode estar
            netlify_token = state.get('userId') or state.get('token') or state.get('accessToken')
            if netlify_token:
                print(f"✅ Token do Netlify encontrado!")
except Exception as e:
    print(f"❌ Erro ao ler token: {e}")

# Pega o Site ID
try:
    result = subprocess.run(['netlify', 'status', '--json'], capture_output=True, text=True, check=False)
    if result.returncode == 0:
        status = json.loads(result.stdout)
        site_id = status.get('siteId')
        if site_id:
            print(f"✅ Site ID encontrado: {site_id}")
except Exception as e:
    print(f"❌ Erro ao pegar Site ID: {e}")

if netlify_token and site_id:
    print("\n✅ Todos os dados encontrados!")
    print(f"\nAdicione estes secrets no GitHub:")
    print(f"1. NETLIFY_AUTH_TOKEN = {netlify_token[:30]}...")
    print(f"2. NETLIFY_SITE_ID = {site_id}")
    print("\nVá em: Settings > Secrets and variables > Actions")
    print("E clique em 'New repository secret'")
else:
    print("\n❌ Faltam dados. Certifique-se de estar logado no Netlify")
