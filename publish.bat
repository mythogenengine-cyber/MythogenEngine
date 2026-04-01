@echo off
echo ==== Auto Publishing Content to GitHub ====
git add .
set "msg="
set /p msg="Enter your commit message (Press Enter for 'Auto-publish new content'): "
if "%msg%"=="" set msg="Auto-publish new content"
git commit -m "%msg%"
git push
echo.
echo ==== Published! Please wait 1-3 minutes and refresh the website ====
pause
