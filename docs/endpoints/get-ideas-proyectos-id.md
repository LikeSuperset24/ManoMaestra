# Endpoint: `GET /ideas-proyectos/{id}`

Permite obtener información detallada sobre una idea de proyecto en específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del tema que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /ideas-proyectos/2
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "id_idea": 5,
    "fk_id_usuario": 2,
    "titulo_idea": "Aplicación de meditación guiada",
    "descripcionIdea": "Desarrollar una aplicación que ofrezca sesiones de meditación guiada.",
    "fechaPublicacion": "2023-12-06T04:05:28.000Z"
}
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "not_found",
    "error_description": "No se encontró la idea de proyecto."
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
  la documentación del endpoint [`/ideas-proyectos/{id}]