# Endpoint: `GET /tipo-usuarios`

Permite obtener toda la información sobre todos los tipos de usuario.

## Ejemplo de Solicitud
```http
GET /tipo-usuarios
```

## Respuesta Exitosa (Código 200 OK)
```json
[
    {
        "id_tipo_usuario": 1,
        "tipo_usuario_descripcion": "Usuario"
    },
    {
        "id_tipo_usuario": 2,
        "tipo_usuario_descripcion": "Trabajador"
    }
]
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "not_found",
    "error_description": "No se encontraron los tipos de usuarios"
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
  la documentación del endpoint [`/tipo-usuarios]