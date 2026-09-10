@echo off
cd /d "%~dp0"
title Quiet Current Games - publikacja

echo Sprawdzam strone...
call npx cross-env ASTRO_TELEMETRY_DISABLED=1 npm run check
if errorlevel 1 goto error

call npx cross-env ASTRO_TELEMETRY_DISABLED=1 npm run build
if errorlevel 1 goto error

git add src/content public/media
git diff --cached --quiet
if not errorlevel 1 goto nochanges

git commit -m "Publish news update"
if errorlevel 1 goto error
git push origin main
if errorlevel 1 goto error

echo.
echo Gotowe. GitHub publikuje nowa wersje strony automatycznie.
pause
exit /b 0

:nochanges
echo.
echo Nie znaleziono nowych tresci do opublikowania.
pause
exit /b 0

:error
echo.
echo Publikacja nie powiodla sie. Zrob zrzut tego okna i wyslij go do Codex.
pause
exit /b 1
