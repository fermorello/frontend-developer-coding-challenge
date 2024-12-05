# Solución al Aerolab Frontend Coding Challenge

Este proyecto es mi solución al **Frontend Coding Challenge de Aerolab**. El desafío consistió en crear una aplicación web que permite a los usuarios buscar y coleccionar videojuegos usando la API de IGDB y almacenamiento en el navegador.

## Despliegue
La aplicación está desplegada en Vercel, puedes acceder a la demo pública [aquí](https://nombre-de-tu-proyecto.vercel.app).

## Descripción

La aplicación permite a los usuarios realizar búsquedas dinámicas de videojuegos, agregar sus juegos favoritos a una colección y ver detalles de cada juego en una página dedicada. He utilizado **Next.js** y **Tailwind CSS** para crear una experiencia fluida, rápida y visualmente atractiva, compatible tanto con dispositivos móviles como de escritorio.

### Características principales

- **Búsqueda de videojuegos**: Los usuarios pueden buscar juegos a medida que escriben. Los resultados incluyen la portada y el título del juego.
- **Colección de juegos**: Los juegos pueden ser agregados a una colección personal. Los usuarios pueden ver los juegos guardados en una cuadrícula.
- **Página de detalles**: Cada juego tiene su propia página de detalles, mostrando información adicional como la fecha de lanzamiento, calificación y plataformas.
- **Interacción con la API de IGDB**: Se utiliza la API de IGDB para obtener información sobre los videojuegos.
- **Responsive**: La aplicación es completamente responsive, asegurando una experiencia optimizada en dispositivos móviles y de escritorio.
- **Optimización de rendimiento**: Se optimiza el tamaño de las imágenes y la gestión de los estados de carga y error.

## Tecnologías utilizadas

- **Next.js**: Framework de React para renderizado en el lado del servidor (SSR) y enrutamiento.
- **Tailwind CSS**: Framework de CSS para una rápida y flexible creación de interfaces.
- **TypeScript**: Para asegurar la seguridad de tipos y mejorar la mantenibilidad del código.
- **IGDB API**: Utilizada para obtener información sobre los videojuegos.
- **Vercel**: Despliegue en producción.

## Instalación y ejecución local

Sigue estos pasos para ejecutar el proyecto en tu máquina local:

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/aerolab-coding-challenge.git
   cd aerolab-coding-challenge
    ```
2. **Instala las dependencias:**
    ```
    npm install
    ```
3. **Configura las variables de entorno: Crea un archivo .env.local en la raíz del proyecto con tu clave de API de IGDB:**
   ```
     IGDB_CLIENT_ID=
     IGDB_CLIENT_SECRET=
     IGDB_API_URL=
     NEXT_PUBLIC_URL=
   ```
4. **Ejecuta la aplicación:**
   ```
     npm run dev
   ```
5. **Accede a la aplicación en tu navegador:** Navega a http://localhost:3000.

## Estructura del proyecto

```
/frontend
│
├── /public
├── /src
    ├── /app
    ├── /components
    ├── /entities
    ├── /hooks
    ├── /lib
    ├── /types
```

## Características implementadas

### Página de inicio:
- Barra de búsqueda para encontrar videojuegos.
- Visualización de los juegos añadidos a la colección.
- Vista de cuadrícula de las portadas de los juegos.
- Ordenamiento de juegos por fecha de lanzamiento y por fecha de adición a la colección.

### Página de detalles del juego:
- Información sobre el juego: portada, título, rating, fecha de lanzamiento y plataformas.
- Opción para agregar o eliminar el juego de la colección.
- Pantalla de imágenes y lista de juegos similares.
- URL amigable con slugs en lugar de IDs.

### Responsividad:
- La aplicación se adapta correctamente a pantallas de móviles, tabletas y escritorios.

### Optimización:
- Carga eficiente de imágenes mediante el uso de tamaños adecuados.
- Control de errores y manejo de estados de carga.

### Accesibilidad:
- Navegación por teclado y soporte básico para lectores de pantalla.
  
## Posibles mejoras futuras
- **Autenticación de usuario**: Implementar un sistema de login utilizando una solución como Supabase o Firebase para que los usuarios puedan guardar su colección en diferentes dispositivos.
- **Mejoras en la búsqueda**: Incluir un sistema de autocompletado o sugerencias basadas en los términos de búsqueda.
- **Pruebas unitarias**: Agregar más pruebas con React Testing Library para asegurar que los componentes clave funcionen correctamente.
- **Animaciones y microinteracciones**: Mejorar la interfaz con animaciones sutiles para hacerla más atractiva.
