# Endpoint: `GET /resenas`

Permite obtener toda la información sobre todas las reseñas.

## Ejemplo de Solicitud
```http
GET /resenas
```

## Respuesta Exitosa (Código 200 OK)
```json
[
    {
        "id_reseña": 1,
        "fk_id_cliente": 1,
        "fk_id_trabajador": 5,
        "calificacion": 5,
        "comentario": "Excelente trabajo, muy profesional.",
        "fecha_reseña": "2023-12-06T04:05:28.000Z"
    },
    {
        "id_reseña": 2,
        "fk_id_cliente": 3,
        "fk_id_trabajador": 6,
        "calificacion": 4,
        "comentario": "Buen diseñador, pero la entrega fue un poco tarde.",
        "fecha_reseña": "2023-12-06T04:05:28.000Z"
    },
    {
        "id_reseña": 3,
        "fk_id_cliente": 4,
        "fk_id_trabajador": 5,
        "calificacion": 5,
        "comentario": "Servicio rápido y eficiente, lo recomendaría.",
        "fecha_reseña": "2023-12-06T04:05:28.000Z"
    },
    {
        "id_reseña": 4,
        "fk_id_cliente": 2,
        "fk_id_trabajador": 4,
        "calificacion": 3,
        "comentario": "La interfaz mejoró, pero aún hay áreas de mejora.",
        "fecha_reseña": "2023-12-06T04:05:28.000Z"
    },
    {
        "id_reseña": 5,
        "fk_id_cliente": 1,
        "fk_id_trabajador": 6,
        "calificacion": 4,
        "comentario": "Muy creativo en el diseño del mural, cumplió con las expectativas.",
        "fecha_reseña": "2023-12-06T04:05:28.000Z"
    }
]
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "not_found",
    "error_description": "No se encontraron las reseñas"
  }
  ```

- Código 500 Internal Server Error:
  ```json
  {
    "errno": 500,
    "error": "internal_error",
    "error_description": "Ocurrió un problema para procesar la solicitud"
  }
  ``` 

## Notas Adicionales

- Asegurate de incluir un ID válido en la solicitud para obtener la información
  sobre un tema en específico.
- Para consultar más detalle sobre los libros relacionados con el tema consultar
  la documentación del endpoint [`/resenas]