# App Base

Aplicación base con backbone y marionette

## Instalacción
### Dependencias
Para poder ejecutar esta aplicación en un entorno local debes tener instalado `node.js`. Si no lo tienes instalado, sigue las instrucciones [para instalar node.js](http://nodejs.org/).
### NPM
Una vez que hayas instalado node, puedes descargar el código de este repositorio. 
Cuando lo hayas hecho, abre un terminal y dirigete hasta esa carpeta. Una vez allí, ejecuta:
```
npm install
```
Esto descargará e instalará todas las dependencias de npm para ejecutar el proyecto.
### Bower
Ahora necesitamos las librerias javascript que usa el proyecto. Para descargarlas lo haremos usando [bower](http://bower.io/) (previamente instalado con npm). 
En la consola, ejecuta el siguiente comando para descargar las librerias javascript necesarias:
```
bower install
```
### Grunt
Si todo ha ido bien, y no ha habido errores al descargar los paquetes, tenemos el proyecto listo. Ejecuta el siguiente comando:
```
grunt serve
```
Esto ejecutará el gestor de tareas Grunt, ejecutando diferentes tareas: tests, compilacion de javascript, compilación de css... generando los archivos necesarios para una ejecutar el proyecto. Finalmente, creará una instancia de un servidor local y abrirá una página en el navegador con la página principal de la App. 

# Código - Frameworks, Plugins, Librerias
En esta sección voy a explicar qué frameworks, librerias, plugins, etc.. he usado para el desarrollo y por qué.
### Yeoman
Para generar el código base de la aplicación he usado [Yeoman](https://github.com/yeoman/yo). Es muy util y rápido generarlo con un de los multiples generadores que vienen por defecto. 
### Grunt
Yeoman configura por defecto Grunt como gestor de tareas. Muy util también para ejecutar cosas como la compilación de javascript o css desde la consola. Incluso viene con un comando para que esté "esperando" a cambios en diferentes archivos y ejecutar las tareas que sean necesarias. 
### Backbone
Con yeoman he usado el generador de aplicación de Backbone. Para este proyecto he querido usar Backbone porque es un framework con el que ya tengo bastante experiencia y es muy flexible para poder modificar lo que quieras y hacer el framework a tu gusto. Además, está ya muy depurado y funciona muy bien y sin errores. 
### Marionette
A pesar de que Backbone es un muy buen framework, tiene algunas carencias, como por ejemplo en la gestión de las vistas de tu aplicación. Por esto, he añadido [Marionette](http://marionettejs.com/) como complemento a Backbone, ya que mejora mucho la gestión de las vistas. 
He de decir que no había usado Marionette antes, pero sabiendo como funciona Backbone no me ha sido muy complicado hacerme con ello. 
### Hogan (plantillas)
Para el tema de plantillas también he querido aprender a usar algo nuevo, y en este caso he elegido [Hogan](http://twitter.github.io/hogan.js/). Realmente es muy sencillo de usar, se basa en [Mustache](http://mustache.github.io/), que ya había usado. 
He querido meter las plantillas para evitar tener código HTML duplicado por todos lados y que el proyecto sea más flexible y extensible. Además, hogan me ha permitido compilar las plantillas en javascript para que estas estén disponibles en todos lados a un método de distancia. (compilación de plantillas gracias a Grunt :D)
### Sass
Para el CSS he usado [Sass](http://sass-lang.com/), pero con la sintaxys de scss. Al principio pensé en usar algun framework de css, como bootstrap o foundation, pero finalmente lo descarté ya que "sobraba" más código de que iba a usar realmente. 
Si que he usado [Compass](http://compass-style.org/) y algunas de sus funciones para hacer que la web se vea bien en los diferentes navegadores. 
### Iconos
Para el tema de iconos, FontAwesome, que es una fuente de iconos. Ya la había usado antes y me gusta el estilo de los iconos y cómo se usan. 
### Jquery-Storage-API
Para el manejo de localstorage he usado este plugin de jquery, sencillo y funcional. 


## APP Backend
El repositorio con el backend de la aplicación está disponible también en https://github.com/juan-cb/Delines-Backend
El backend proporciona una API para obtener y guardar los datos de posicionamiento obtenidos desde este cliente. Este backend se ha desarrollado usando Django (https://www.djangoproject.com/), Django REST Framework (http://www.django-rest-framework.org/) y MySQL (https://www.mysql.com/). 
