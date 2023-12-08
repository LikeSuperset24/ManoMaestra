# Endpoint: `GET /ideas-proyectos`

Permite obtener toda la información sobre todas ideas de proyecto.

## Ejemplo de Solicitud
```http
GET /ideas-proyectos
```

## Respuesta Exitosa (Código 200 OK)
```json
[
        {
        "id_idea": 1,
        "fk_id_usuario": 2,
        "titulo_idea": "App de intercambio de libros",
        "descripcionIdea": "Crear una aplicación para que las personas intercambien libros entre sí.",
        "fechaPublicacion": "2023-12-06T04:05:28.000Z"
    },
    {
        "id_idea": 2,
        "fk_id_usuario": 3,
        "titulo_idea": "Campaña de concientización ambiental",
        "descripcionIdea": "Iniciar una campaña para concientizar sobre la importancia de cuidar el medio ambiente.",
        "fechaPublicacion": "2023-12-06T04:05:28.000Z"
    },
    {
        "id_idea": 3,
        "fk_id_usuario": 1,
        "titulo_idea": "Plataforma de tutorías en línea",
        "descripcionIdea": "Desarrollar una plataforma en línea para conectar a tutores con estudiantes.",
        "fechaPublicacion": "2023-12-06T04:05:28.000Z"
    },
    {
        "id_idea": 4,
        "fk_id_usuario": 4,
        "titulo_idea": "Proyecto de jardinería comunitaria",
        "descripcionIdea": "Crear un espacio de jardinería para la comunidad local.",
        "fechaPublicacion": "2023-12-06T04:05:28.000Z"
    },
    {
        "id_idea": 5,
        "fk_id_usuario": 2,
        "titulo_idea": "Aplicación de meditación guiada",
        "descripcionIdea": "Desarrollar una aplicación que ofrezca sesiones de meditación guiada.",
        "fechaPublicacion": "2023-12-06T04:05:28.000Z"
    }
]
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "not_found",
    "error_description": "No se encontraron las ideas de proyectos"
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
  la documentación del endpoint [`/ideas-proyectos]