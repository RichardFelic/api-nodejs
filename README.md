# api-nodejs - Proyecto API REST en Node.js y utilizando Express

## Descripción
Este proyecto fue creado para aprender sobre el desarrollo de APIs utilizando Node.js y Express. Durante el proceso, exploré diferentes conceptos y técnicas que son fundamentales para el desarrollo de aplicaciones web modernas.

## Contenido del Proyecto
- **GitHub Repository**: [Enlace a mi repositorio](https://github.com/RichardFelic/api-nodejs)
- **Clases y Temas Abordados**:
  - Introducción a las APIs y HTTP.
  - Creación de rutas y manejo de métodos HTTP.
  - Integración de Express y sus características.
  - Uso de nodemon para evitar reinicios del servidor.
  - Manejo de códigos de estado HTTP y encabezados.
  - Ejemplos de middleware en Express.

## Configuración
Para iniciar el proyecto, utilicé los siguientes comandos:

```bash
npm init -y
npm install standard -D
npm install nodemon -D
npm install express -E
```
Tmabien puedes usar  ```npm install``` para instalar todas las dependencias.

### Tecnologías utilizadas

- **Node.js**
- **Express.js**
- **JSON**

### Ejecución

Para ejecutar la API, sigue los siguientes pasos:

1. Clona el repositorio.
2. Instala las dependencias con `npm install`.
3. Ejecuta la API con uno de los siguientes comandos:
   - `npm run dev:1` para ejecutar la API con **nodemon 1.http.js**.
   - `npm run dev:2` para ejecutar la API con **nodemon 2.routing.js**.
   - `npm run dev:3` para ejecutar la API con **nodemon --watch 3.express.js**.
4. Abre un navegador y accede a `http://localhost:3000/pokemon/ditto` para obtener la información del Pokémon **Ditto**.

### Notas

- Esta API es solo para fines de prueba y **no debe ser utilizada en producción** sin modificaciones adicionales.
- La información del Pokémon **Ditto** se obtiene de un archivo **JSON** local y no se conecta a una base de datos real.
