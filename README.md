# Fullstack
Fullstack web development UP 2023
Trabajo
Primer entrega: desarrollo del Backend. Segunda entrega: Frontend.

Tecnologías
Desarrollaremos una aplicación del tipo API REST con Node.js. Para la persistencia de datos, utilizaremos la base de datos no relacional MongoDB, aprovechando la versión Atlas para evitar la necesidad de descargar el motor de base de datos localmente.

Paquetes a Utilizar:

Express
Mongoose
Dotenv
Cors
Estructura del Proyecto
Backend: Utilizaremos el patrón Modelo-Vista-Controlador (MVC).

Modelos:

Usuario (user)
Personaje (character)
Controladores:

UserController
CharacterController

Endpoints:

Para cada uno de los modelos, generaremos los endpoints que permitirán la realización del CRUD:

Endpoints para los usuarios:
/login
/users (dentro de este se encuentran los get, post, put y delete de los usuarios)

Endpoints para los Personajes:

/characters (Dentro estan los get, post, put y delete para los personajes)
