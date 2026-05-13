# ============================================================
# SCRIPT: Push das mudanças corrigidas para o GitHub
# ============================================================
# DESCRIÇÃO: Faz o push do commit que remove as 3 palavras
#            deformantes do hero e limpa o efeito Sparkles
# ============================================================

Write-Host "================================================" -ForegroundColor Cyan
Write-Host "  PUSH DE MUDANÇAS - Hero.tsx + pt.json" -ForegroundColor Green
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""

# 1. Verificar se estamos no repositório correto
Write-Host "[1/3] Verificando repositório..." -ForegroundColor Yellow
cd C:\Users\ADMIN\site-creator-studio

$status = git status --porcelain
if ($status) {
    Write-Host "      Aviso: Há mudanças não comitadas localmente" -ForegroundColor Yellow
    git status
    Write-Host ""
}

# 2. Verificar commits pendentes
Write-Host "[2/3] Verificando commits locais..." -ForegroundColor Yellow
$commits = git log origin/main..main --oneline
if ($commits) {
    Write-Host "      Commits pendentes para push:" -ForegroundColor Green
    Write-Host $commits -ForegroundColor Cyan
    Write-Host ""
} else {
    Write-Host "      Nenhum commit pendente" -ForegroundColor Gray
}

# 3. Fazer push
Write-Host "[3/3] Fazendo push para GitHub..." -ForegroundColor Yellow
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "================================================" -ForegroundColor Green
    Write-Host "  ✅ PUSH REALIZADO COM SUCESSO!" -ForegroundColor Green
    Write-Host "================================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "Próximas etapas:" -ForegroundColor Cyan
    Write-Host "1. GitHub Actions vai executar automaticamente" -ForegroundColor Gray
    Write-Host "   → Verifique: https://github.com/holgrow1-alt/site-creator-studio/actions" -ForegroundColor Gray
    Write-Host ""
    Write-Host "2. Netlify vai fazer deploy em ~5 minutos" -ForegroundColor Gray
    Write-Host "   → Verifique: https://app.netlify.com/sites/ecodrones-community/deploys" -ForegroundColor Gray
    Write-Host ""
    Write-Host "3. Site atualizado em www.ecodronescommunity.com" -ForegroundColor Gray
    Write-Host "   → Logo limpo SEM as 3 palavras deformantes ✅" -ForegroundColor Gray
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "❌ ERRO ao fazer push" -ForegroundColor Red
    Write-Host "Verifique a mensagem acima e tente novamente" -ForegroundColor Red
    Write-Host ""
}

Read-Host "Pressione Enter para sair"
