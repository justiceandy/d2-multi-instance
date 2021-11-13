set scriptpath=%~dp0
cd %scriptpath%\..\

echo "${pwd}"
npm install 

cd ./utils

powershell -Command "(new-object net.webclient).DownloadString('https://download.sysinternals.com/files/Handle.zip')"
pause
powershell -Command "(new-object net.webclient).DownloadString('https://raw.githubusercontent.com/npocmaka/batch.scripts/master/hybrids/jscript/zipjs.bat')"

call zipjs.bat unzip -source %scriptpath%\Handle.zip -destination %scriptpath%\..\utils -keep yes -force yes

pause