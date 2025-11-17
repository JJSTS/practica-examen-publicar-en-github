![Github Pages](https://cdn-wcsm.alura.com.br/2025/04/imagen4.png "Github Pages")

# Práctica-Examen de nuestro primer despliegue en la Web
## Publicar tu repositorio a través de GitHub Pages

Comienza el examen práctico del módulo de Despliegue de Aplicaciones Web. El reto consiste en publicar un repositorio [a través de GitHub
Pages](https://docs.github.com/es/pages). Esta práctica-examen la puedes empezar desde ahora mismo, si quieres. De este modo el día señalado bastará con depurarla.

El día del examen práctico te propondré una serie de mejoras y cambios en ese mismo proyecto, que deberás implementar durante el tiempo establecido .

*Fecha* de la práctica-examen:  lunes 24 de Noviembre  
*Hora* de la práctica-examen: 17:30

---

## Tabla de contenido (TOC)

- [1. Accede al repositorio base](#1-accede-al-repositorio-base)
- [2. Clona tu repositorio fork](#2-clona-tu-repositorio-fork)
- [3. Añade contenido a tu sitio](#3-añade-contenido-a-tu-sitio)
- [4. Haz un commit y sube los cambios](#4-haz-un-commit-y-sube-los-cambios)
- [5. Configura GitHub Pages](#5-configura-github-pages)
- [6. Visualiza tu web](#6-visualiza-tu-web)
- [7. Personaliza el título y la descripción](#7-personaliza-el-título-y-la-descripción)
- [Recursos adicionales en español](#recursos-adicionales-en-español)

---

### 1. Accede al repositorio base

- Ve al repositorio de la práctica: [DAW2-Quevedo/practica-examen-publicar-en-github](https://github.com/DAW2-Quevedo/practica-examen-publicar-en-github)
- Haz un **fork** de este repositorio a tu cuenta de GitHub.
  - Pulsa el botón **Fork** en la parte superior derecha.
  - Elige tu cuenta como destino del fork.

### 2. Clona tu repositorio fork

- Copia la URL de tu fork (ejemplo: `https://github.com/tuusuario/practica-examen-publicar-en-github.git`)
- Abre tu terminal/git bash y ejecuta:
  ```
  git clone https://github.com/tuusuario/practica-examen-publicar-en-github.git
  cd practica-examen-publicar-en-github
  ```

### 3. Añade contenido a tu sitio

- Dentro del repositorio, localiza y edita el archivo principal para la web, por ejemplo `README.md`, `index.md` o `index.html`.
- Si no existe, crea un archivo `index.html` y añade el contenido que deseas mostrar como portada de la web.

### 4. Haz un commit y sube los cambios

- Guarda tus cambios y ejecútalos en la terminal:
  ```
  git add .
  git commit -m "Añadido contenido inicial de la web"
  git push
  ```

### 5. Configura GitHub Pages

- Ve a la pestaña **Settings** de tu repositorio en tu cuenta (probablemente `tuusuario/practica-examen-publicar-en-github`).
- En el menú lateral, busca la sección **Pages**.
- En **Build and deployment**, selecciona **Deploy from a branch**.
- Elige la rama principal (*main*) y la carpeta `/root`.
- Guarda la configuración.

### 6. Visualiza tu web

- GitHub generará el sitio en la URL:  
  `https://tuusuario.github.io/practica-examen-publicar-en-github`  
  *(Cambia 'tuusuario' por tu nombre de usuario en GitHub)*
- Espera unos minutos para que GitHub procese y publique tu sitio.

### 7. Personaliza el título y la descripción

- Opcionalmente, crea o edita el archivo `_config.yml` y añade:
  ```yaml
  theme: jekyll-theme-minimal
  title: Mi sitio web práctico
  description: Ejercicio de publicación con GitHub Pages
  ```
- Haz commit y push de ese archivo, si lo creaste.

### Recursos adicionales en español
- [Paso a Paso para activar tu proyecto en GitHub Pages- Alura Latam](https://www.aluracursos.com/blog/github-pages)
- [Guía oficial de GitHub Pages (español)](https://docs.github.com/es/pages)
- [Introducción a GitHub Pages (español)](https://docs.github.com/es/pages/getting-started-with-github-pages/about-github-pages)
- [Cómo crear un sitio con GitHub Pages (español)](https://docs.github.com/es/pages/getting-started-with-github-pages/creating-a-github-pages-site)





HOLA DESDE LA TERMINAL
