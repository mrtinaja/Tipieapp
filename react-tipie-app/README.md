# Challenge Tipie MERN - BACKEND & FRONTEND

### Desarrollar app con pantalla de Login
y una página Home que muestre en una tabla la información traída desde una API ###

## Comenzando 🚀

_Se ha creado un usuario con credenciales limitadas para consultar la DB alojada en el Cloud de Firebase
por lo que no deberas crear una base de datos local ._

## Instalación 🔧

Primero debemos instalar las dependencias con npm. Una vez situado en el directorio raiz del proyecto.

Dirigirse al directorio backend con el comando "cd node-tipie-app".

- "npm install" para instalar dependencias de desarrollo y produccion del Back.
- Dirigirse al directorio frontend con el comando "../cd front".

- "npm install" para instalar dependencias de desarrollo y produccion del Front.

## Ejecucion

Dirigirse cd node-tipie-app y ejecutar npm start
Abrir otra terminal y entrar a la carpeta de frontend ../react-tipie-app 
y ejecutar npm start


## Desplegando Entorno de Desarrollo FRONT & BACK . 📋


Situado en el directorio raiz Frontend ejecutar el comando: 

Aclaracion: el siguiente comando lanzara de forma simultanea los dos entornos cliente - servidor 


"npm start" para lanzar el cliente en la ruta "localhost:3000" y el back en "localhost:3001"


## User & Pass para logearse


email: demo@tipieapp.com
password: Tipie2022

Funcionalidad de registro aun no implementada en el front



## Construido con 🛠️

CONSTRUIDO STACK  - BACKEND con Firebase - EXPRESS - REACT - NODE 

*Backend
Autenticación basada en JWT (Json Web Token)
El token dura 1 hora. Por eso para realizar pruebas finalizado ese lapso se debe cerrar sesion con boton en home.
