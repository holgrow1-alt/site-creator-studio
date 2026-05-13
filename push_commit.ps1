#!/usr/bin/env pwsh
# PowerShell script to push the commit
cd "C:\Users\ADMIN\site-creator-studio"

# Check git status
Write-Host "Current status:"
git status

# Push to main
Write-Host "`nPushing to origin/main..."
git push -u origin main

# Check if successful
if ($LASTEXITCODE -eq 0) {
    Write-Host "`nPush successful!"
    git log --oneline -3
} else {
    Write-Host "`nPush failed with exit code: $LASTEXITCODE"
}
