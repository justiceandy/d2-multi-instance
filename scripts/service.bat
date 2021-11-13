SET mypath=%~dp0
@echo off
cls

node --experimental-specifier-resolution=node --experimental-modules %mypath%/../index.js --action service