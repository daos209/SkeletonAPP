
@echo off

:: Navegar al directorio del proyecto
cd /d "%~dp0"

:: Limpiar el proyecto
gradlew clean

:: Construir el Android App Bundle (AAB)
gradlew bundleRelease

:: Ruta del archivo AAB generado
set AAB_PATH=.\app\build\outputs\bundle\release\app-release.aab

:: Verificar si el archivo AAB fue creado exitosamente
if exist "%AAB_PATH%" (
    echo Android App Bundle (AAB) creado exitosamente: %AAB_PATH%
) else (
    echo Error: No se pudo crear el Android App Bundle (AAB)
    exit /b 1
)