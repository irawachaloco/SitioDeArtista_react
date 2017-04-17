Sitio de Artista
================

Este repositorio contendrá plantillas y estructuras básicas para preparar sitios personalizados para artistas o pequeñas galerías.
El objetivo es aprender React.js y producir una base flexible para desarrollar y presentar multiples contenidos.

Alternativas para 
ScrollMagic:
https://github.com/gilbox/react-spark-scroll

Slick:
https://github.com/akiran/react-slick


## Modo Desarrollo

Clonar este repositorio e instalar las dependencias para _NodeJS_

```bash
$ npm install
```

Para lanzar el servidor de desarrollo de _Webpack_ usar:

```bash
$ npm run start
```


### Dependencias externas:

* Craft CRM
* Docker o MAMP o algún otro entorno para poder ejecutar _PHP_ y _MySQL_ 


## Uso con Docker

1. Copiar `.env.sample` en `.env` y editar com convenga.
2. Crear un folder `mysql_data` en el directorio del projecto
2. Iniciar con `docker-compose up -d`.
3. Detener con `docker-compose down`.