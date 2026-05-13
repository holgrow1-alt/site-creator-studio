#!/usr/bin/env python3
import json
import subprocess
import sys
from pathlib import Path
import base64
import requests

# 1. Pega token do Netlify do arquivo armazenado
netlify_state = Path.home() / '.netlify' / 'state.json'
netlify_token = None

try:
    with open(netlify_state) as f:
        state = json.load(f)
        # Procura o token em vários locais possíveis
        netlify_token = (state.get('userId') or
                        state.get('accessToken') or
                        state.get('token'))
        if not netlify_token:
            # Tenta pegar do .netlifyrc
            netlify_rc = Path.home() / '.netlifyrc'
            if netlify_rc.exists():
                with open(netlify_rc) as rc:
                    netlify_token = rc.read().split('token = ')[-1].strip()
except:
    pass

# 2. Se não achou, tenta via CLI
if not netlify_token:
    try:
        # Faz login e pega o token
        subprocess.run(['netlify', 'login'], check=False)
        with open(Path.home() / '.netlify' / 'state.json') as f:
            netlify_token = json.load(f).get('userId')
    except:
        pass

# 3. Pega o Site ID do projeto
site_id = None
try:
    result = subprocess.run(['netlify', 'sites:list', '--json'],
                          capture_output=True, text=True, check=False)
    if result.returncode == 0:
        sites = json.loads(result.stdout)
        # Procura por "ecodrones" ou pega o primeiro
        for site in sites:
            if 'ecodrones' in site.get('name', '').lower():
                site_id = site.get('id')
                break
        if not site_id and sites:
            site_id = sites[0].get('id')
except:
    pass

print("=" * 60)
print("GITHUB SECRETS SETUP")
print("=" * 60)

if netlify_token and site_id:
    print(f"✅ Netlify Token: {netlify_token[:40]}...")
    print(f"✅ Site ID: {site_id}")

    # 4. Configura os secrets no GitHub via API
    github_token = subprocess.run(['git', 'config', '--global', 'user.name'],
                                 capture_output=True, text=True).stdout.strip()

    # Pega o repositório do git remoto
    repo_url = subprocess.run(['git', 'config', '--get', 'remote.origin.url'],
                             capture_output=True, text=True, cwd='C:\\Users\\ADMIN\\site-creator-studio').stdout.strip()

    # Parse repo owner/name
    if 'github.com' in repo_url:
        parts = repo_url.split('/')[-2:]
        owner = parts[0]
        repo = parts[1].replace('.git', '')

        print(f"\n📦 Repository: {owner}/{repo}")

        # Você precisará adicionar estes secrets manualmente no GitHub:
        print("\n" + "=" * 60)
        print("ADICIONE ESTES SECRETS NO GITHUB:")
        print("=" * 60)
        print(f"\n1. Nome: NETLIFY_AUTH_TOKEN")
        print(f"   Valor: {netlify_token}")

        print(f"\n2. Nome: NETLIFY_SITE_ID")
        print(f"   Valor: {site_id}")

        print("\n" + "=" * 60)
        print("PASSOS:")
        print("=" * 60)
        print(f"1. Abra: https://github.com/{owner}/{repo}/settings/secrets/actions")
        print("2. Clique em 'New repository secret'")
        print("3. Adicione os dois secrets acima")
        print("4. Pronto! GitHub Actions fará deploy automático")

        # Salva em arquivo para referência
        with open('C:\\Users\\ADMIN\\site-creator-studio\\.env.github', 'w') as f:
            f.write(f"NETLIFY_AUTH_TOKEN={netlify_token}\n")
            f.write(f"NETLIFY_SITE_ID={site_id}\n")

        print("\n✅ Credenciais salvas em .env.github")

else:
    print("❌ Não conseguiu pegar token ou site ID")
    print("\nTente:")
    print("1. netlify login")
    print("2. netlify sites:list")
