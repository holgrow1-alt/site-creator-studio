#!/usr/bin/env python3
"""
Setup GitHub Secrets for Netlify Automation
"""
import subprocess
import json
import sys
from pathlib import Path

# Site ID que já temos
SITE_ID = "36816c67-5fa9-41b6-9f5e-66f6c5ef2b84"

print("=" * 70)
print("CONFIGURANDO AUTOMATION: GitHub Actions + Netlify Deploy")
print("=" * 70)

# 1. Pega o token do Netlify do arquivo local
print("\n📍 Buscando token do Netlify...")
try:
    netlify_state = Path.home() / '.netlify' / 'state.json'
    if netlify_state.exists():
        with open(netlify_state, 'r') as f:
            state = json.load(f)
            # Procura o userId que é o token
            token = state.get('userId')
            if token:
                print(f"✅ Token encontrado: {token[:50]}...")
            else:
                print("❌ Token não encontrado em state.json")
                sys.exit(1)
    else:
        print("❌ Arquivo ~/.netlify/state.json não encontrado")
        sys.exit(1)
except Exception as e:
    print(f"❌ Erro: {e}")
    sys.exit(1)

# 2. Pega o repositório GitHub
print("\n📍 Buscando informações do repositório GitHub...")
try:
    repo_url = subprocess.run(
        ['git', 'config', '--get', 'remote.origin.url'],
        capture_output=True,
        text=True,
        cwd='C:\\Users\\ADMIN\\site-creator-studio'
    ).stdout.strip()

    if 'github.com' in repo_url:
        # Parse: https://github.com/owner/repo.git
        parts = repo_url.split('/')
        owner = parts[-2]
        repo = parts[-1].replace('.git', '')
        print(f"✅ Repositório: {owner}/{repo}")
    else:
        print("❌ Repositório não é GitHub")
        sys.exit(1)
except Exception as e:
    print(f"❌ Erro ao ler repositório: {e}")
    sys.exit(1)

# 3. Tenta configurar os secrets via GitHub CLI
print("\n📍 Configurando secrets no GitHub...")
try:
    # Verifica se gh CLI está instalado
    subprocess.run(['gh', '--version'], capture_output=True, check=True)

    # Configura os secrets
    print("  • Configurando NETLIFY_AUTH_TOKEN...")
    subprocess.run(
        ['gh', 'secret', 'set', 'NETLIFY_AUTH_TOKEN', '--body', token],
        cwd='C:\\Users\\ADMIN\\site-creator-studio',
        check=True,
        capture_output=True
    )
    print("    ✅ NETLIFY_AUTH_TOKEN configurado")

    print("  • Configurando NETLIFY_SITE_ID...")
    subprocess.run(
        ['gh', 'secret', 'set', 'NETLIFY_SITE_ID', '--body', SITE_ID],
        cwd='C:\\Users\\ADMIN\\site-creator-studio',
        check=True,
        capture_output=True
    )
    print("    ✅ NETLIFY_SITE_ID configurado")

    print("\n" + "=" * 70)
    print("✅ SUCESSO! GitHub Secrets configurados!")
    print("=" * 70)
    print("\nO que acontece agora:")
    print("1. Sempre que você fizer 'git push' para main")
    print("2. GitHub Actions vai:")
    print("   - Fazer npm run build")
    print("   - Fazer deploy automático para o Netlify")
    print("3. Seu site será atualizado em minutos!")

except subprocess.CalledProcessError:
    print("❌ GitHub CLI (gh) não está instalado ou não está logado")
    print("\nAlternativa: Adicione manualmente estes secrets no GitHub:")
    print("\n" + "=" * 70)
    print(f"1. Acesse: https://github.com/{owner}/{repo}/settings/secrets/actions")
    print("\n2. Clique em 'New repository secret' e adicione:")
    print(f"\n   Nome: NETLIFY_AUTH_TOKEN")
    print(f"   Valor: {token}")
    print(f"\n   Nome: NETLIFY_SITE_ID")
    print(f"   Valor: {SITE_ID}")
    print("=" * 70)

except Exception as e:
    print(f"❌ Erro inesperado: {e}")
    sys.exit(1)
