# Endpoint: `POST /ideas-proyectos`

Permite insertar nuevas ideas de proyectos.

## Respuesta Exitosa (Código 200 OK)
```json
[
{
    "status": 201,
    "message": "Created"
}
]
```
## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 400,
    "error": "Bad_request",
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