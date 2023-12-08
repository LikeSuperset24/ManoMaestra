# Endpoint: `GET /trabajos/{id}`

Permite obtener información detallada sobre un trabajo en específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del tema que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /trabajos/2
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "id_trabajo": 2,
    "fk_id_trabajador": 6,
    "titulo_trabajo": "Desarrollo de logotipo",
    "descripcion_trabajo": "Busco a un diseñador gráfico para crear un logotipo para mi nueva empresa."
}
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "not_found",
    "error_description": "No se encontró el trabajo."
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
  la documentación del endpoint [`/trabajos/{id}]