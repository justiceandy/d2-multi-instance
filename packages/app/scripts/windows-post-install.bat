echo off
SET mypath=%~dp0
%mypath:~0,-1%/../node_modules/.bin/electron-rebuild -v 15.3.0 --force --module-dir %mypath:~0,-1%/../