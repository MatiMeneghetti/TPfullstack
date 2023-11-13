<<<<<<< HEAD
# tpFullstack

<h1> PERSONAJES PARA NIÑOS </h1>.

<h3>MODALIDAD DE TRABAJO</h3>

Para la primera entrega desarrollaremos la estructura del Backend, luego para la segunda la estructura del Frontend

<h3>TECNOLOGÍAS</h3>

Se desarrollará una aplicación del tipo API REST con Node.js.
Para la persistencia de datos se utilizará la base de datos no relacional MongoDB, utilizando la versión Atlas para no descargar el motor de base de datos localmente.

Paquetes a utilizar:
=======
# Fullstack
Fullstack web development UP 2023
Trabajo
Primer entrega: desarrollo del Backend. Segunda entrega: Frontend.

Tecnologías
Desarrollaremos una aplicación del tipo API REST con Node.js. Para la persistencia de datos, utilizaremos la base de datos no relacional MongoDB, aprovechando la versión Atlas para evitar la necesidad de descargar el motor de base de datos localmente.

Paquetes a Utilizar:

>>>>>>> origin/main
Express
Mongoose
Dotenv
Cors
<<<<<<< HEAD

<h3>ESTRUCTURA DEL PROYECTO</h3>

Backend
Se utilizará el patrón Modelo Vista Controlador

Modelos:

user

character

Controladores:

UserController

=======
Estructura del Proyecto
Backend: Utilizaremos el patrón Modelo-Vista-Controlador (MVC).

Modelos:

Usuario (user)
Personaje (character)
Controladores:

UserController
>>>>>>> origin/main
CharacterController

Endpoints:

<<<<<<< HEAD
Para cada uno de los modelos se generarán los endpoints que permitirán la realización del CRUD

GET, POST, PUT, DELETE

ENPOINTS PARA EL USUARIO:

<br>/login: POST para que el usuario inice sesión<br>
<br>/users: GET de todos los usuarios<br>
<br>/users/:id: GET de info de un usuario<br>
<br>/users/create: POST para crear un usuario<br>
<br>/users/:id/edit: PUT para editar un usuario<br>
<br>/users/:id/delete: DELETE para eliminar usuario<br>
<br>/users/:id/editRoles: PUT para editar los roles de un usuario<br>
<br>/users/:id/editActive: PUT para editar el parámetro isActive del usuario<br>

ENDPOINTS PARA LOS PERSONAJES:

<br>/characters: GET de todos los personajes<br>
<br>/characters/:id: GET de la info de un personaje<br>
<br>/characters/create: POST para crear un personaje<br>
<br>/characters/:id/edit: PUT para editar el personaje<br>
<br>/characters/:id/delete: DELETE para eliminar el personaje<br>

<h3>CONSIDERACIONES FUNCIONALES</h3>

El sistema perimitira el CRUD de usuarios, creando personajes y eligiendo su vestimenta.

Se deberá poder ver los últimos personajes creados
=======
Para cada uno de los modelos, generaremos los endpoints que permitirán la realización del CRUD:

Endpoints para los usuarios:
/login
/users (dentro de este se encuentran los get, post, put y delete de los usuarios)

Endpoints para los Personajes:

/characters (Dentro estan los get, post, put y delete para los personajes)
>>>>>>> origin/main
