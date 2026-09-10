@echo off
cd /d "%~dp0"
title Quiet Current Games - dodaj aktualnosc

if not exist node_modules (
  echo Przygotowuje lokalny panel. To moze chwile potrwac...
  call npm install
  if errorlevel 1 goto error
)

echo.
echo Otwieram panel Quiet Current Games...
start "" cmd /c "timeout /t 2 /nobreak >nul && start http://127.0.0.1:4321/keystatic"
call npx cross-env ASTRO_TELEMETRY_DISABLED=1 npm run dev -- --host 127.0.0.1
exit /b 0

:error
echo.
echo Nie udalo sie uruchomic panelu. Zrob zrzut tego okna i wyslij go do Codex.
pause
exit /b 1
