# Endpoint: `PATCH /resenas/{id}`

Permite modificar un dato o varios de alguna reseña en especifico.

## Respuesta Exitosa (Código 200 OK)
```json
[
{
    "message": "Successfull partial update"
}
]
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "Not found"
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