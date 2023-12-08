# Endpoint: `GET /resenas/{id}`

Permite obtener información detallada sobre una reseña en específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del tema que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /resenas/3
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "id_reseña": 3,
    "fk_id_cliente": 4,
    "fk_id_trabajador": 5,
    "calificacion": 5,
    "comentario": "Servicio rápido y eficiente, lo recomendaría.",
    "fecha_reseña": "2023-12-06T04:05:28.000Z"
}
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "not_found",
    "error_description": "No se encontró la reseña."
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
  la documentación del endpoint [`/resenas/{id}]