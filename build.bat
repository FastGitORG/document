@echo off

:: Welcome
echo ======================================
echo = FastGit Document Auto Build Script =
echo = by KevinZonda                      =
echo ======================================

:: Remove old files
echo [-] Remove old files
del /s /Q _book > nul

:: Remove old fold
echo [-] Remove old fold
rd /s /q _book > nul

:: Build GitBook
echo [+] Build GitBook
call gitbook build --log warn

:: Delete useless files
echo [-] Remove useless files
del /f /s /q _book\README.md > nul
del /f /s /q _book\.gitignore > nul
del /f /s /q _book\*.bat > nul


:: Archive to ZIP
:: TODO: WAIT TO BUILD

:: Finish
echo [+] Operation finished!

:: Exit
echo [x] Enter any key to exit
pause > nul
