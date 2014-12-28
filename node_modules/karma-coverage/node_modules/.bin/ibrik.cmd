@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\ibrik\bin\ibrik" %*
) ELSE (
  node  "%~dp0\..\ibrik\bin\ibrik" %*
)