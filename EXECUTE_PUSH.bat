@echo off
REM ============================================================
REM EXECUTE: Push das mudanças para GitHub
REM ============================================================

echo.
echo ================================================
echo   PUSH DE MUDANÇAS - Hero.tsx + pt.json
echo ================================================
echo.

REM Navegar para o repositório
cd /d C:\Users\ADMIN\site-creator-studio

REM Verificar status
echo [1/2] Verificando mudanças locais...
git status

echo.
echo [2/2] Fazendo push para GitHub...
git push origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ================================================
    echo   OK! Push realizado com sucesso!
    echo ================================================
    echo.
    echo Checando deployment:
    echo   - GitHub Actions: https://github.com/holgrow1-alt/site-creator-studio/actions
    echo   - Netlify Deploy: https://app.netlify.com/sites/ecodrones-community/deploys
    echo.
) else (
    echo.
    echo Erro ao fazer push. Verifique a mensagem acima.
    echo.
)

pause
