# API de Videojuegos - Interfaces 2025

## Descripción

Esta API proporciona información sobre videojuegos populares para ser utilizada en el contexto de la materia **Interfaces de Usuario e Interacción 2025**. La API contiene datos de juegos incluyendo información básica, plataformas, géneros y calificaciones.

## Endpoint

### GET /api

**URL Base:** `https://vj.interfaces.jima.com.ar/api`

**Método:** GET

**Descripción:** Obtiene una lista completa de videojuegos con sus detalles.

**Respuesta:** Array de objetos JSON con información de videojuegos.

## Estructura de Datos

Cada videojuego en la respuesta tiene la siguiente estructura:

```json
{
  "id": 3498,
  "name": "Grand Theft Auto V",
  "released": "2013-09-17",
  "background_image": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
  "background_image_low_res": "https://media.rawg.io/media/crop/600/400/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
  "rating": 4.47,
  "platforms": [
    {
      "id": 1,
      "name": "PC"
    },
    {
      "id": 2,
      "name": "PlayStation"
    },
    {
      "id": 3,
      "name": "Xbox"
    }
  ],
  "genres": [
    {
      "id": 4,
      "name": "Action"
    }
  ]
}
```

### Campos

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | number | Identificador único del videojuego |
| `name` | string | Nombre del videojuego |
| `released` | string | Fecha de lanzamiento (formato YYYY-MM-DD) |
| `background_image` | string | URL de la imagen de fondo del juego (resolución original) |
| `background_image_low_res` | string | URL de la imagen de fondo del juego (versión optimizada 600x400) |
| `rating` | number | Calificación promedio del juego (escala 0-5) |
| `platforms` | array | Lista de plataformas donde está disponible |
| `genres` | array | Lista de géneros del videojuego |

### Estructura de Plataformas

```json
{
  "id": 1,
  "name": "PC"
}
```

### Estructura de Géneros

```json
{
  "id": 4,
  "name": "Action"
}
```

## Ejemplo de Uso

### JavaScript (Fetch API)

```javascript
fetch('https://vj.interfaces.jima.com.ar/api')
  .then(response => response.json())
  .then(games => {
    console.log('Juegos disponibles:', games);
    // Procesar la lista de juegos
    games.forEach(game => {
      console.log(`${game.name} - Rating: ${game.rating}`);
    });
  })
  .catch(error => {
    console.error('Error al obtener los juegos:', error);
  });
```

### JavaScript (Async/Await)

```javascript
async function obtenerJuegos() {
  try {
    const response = await fetch('https://vj.interfaces.jima.com.ar/api');
    const games = await response.json();
    
    // Filtrar juegos con rating mayor a 4.0
    const juegosDestacados = games.filter(game => game.rating > 4.0);
    
    return juegosDestacados;
  } catch (error) {
    console.error('Error:', error);
  }
}
```

## Códigos de Estado HTTP

| Código | Descripción |
|--------|-------------|
| 200 | OK - Solicitud exitosa |
| 500 | Error interno del servidor |

## Notas para Desarrollo

- La API no requiere autenticación
- CORS está habilitado para todas las rutas
- La respuesta incluye aproximadamente 80 videojuegos populares

## Uso en Interfaces de Usuario

Esta API es ideal para:

- Crear catálogos de videojuegos
- Implementar filtros por género o plataforma
- Mostrar tarjetas de juegos con imágenes
- Crear sistemas de recomendación basados en rating
- Desarrollar interfaces de búsqueda y navegación

### Optimización de Imágenes

La API incluye dos versiones de cada imagen de fondo:

- **`background_image`**: Imagen en resolución original para uso en vistas detalladas
- **`background_image_low_res`**: Imagen optimizada (600x400) para uso en listas y vistas previas

## Contacto

Para consultas relacionadas con esta API en el contexto de la materia Interfaces 2025, contactar a jimartinezabadias@gmail.com o al equipo docente.
