# Endpoint: `GET /usuarios`

Permite obtener toda la información sobre todos usuarios.

## Ejemplo de Solicitud
```http
GET /usuarios
```

## Respuesta Exitosa (Código 200 OK)
```json
[
    {
        "id_usuario": 1,
        "nombre_usuario": "AnaGomez",
        "correo_electronico": "ana.gomez@email.com",
        "contrasena": "contraseña5",
        "fk_tipo_usuario": 1
    },
    {
        "id_usuario": 2,
        "nombre_usuario": "CarlosPerez",
        "correo_electronico": "carlos.perez@email.com",
        "contrasena": "contraseña6",
        "fk_tipo_usuario": 1
    },
    {
        "id_usuario": 3,
        "nombre_usuario": "LauraTorres",
        "correo_electronico": "laura.torres@email.com",
        "contrasena": "contraseña7",
        "fk_tipo_usuario": 1
    },
    {
        "id_usuario": 4,
        "nombre_usuario": "ElectricistaPro",
        "correo_electronico": "electricista@email.com",
        "contrasena": "contraseña8",
        "fk_tipo_usuario": 2
    },
    {
        "id_usuario": 5,
        "nombre_usuario": "DiseñadorWeb123",
        "correo_electronico": "disenador@email.com",
        "contrasena": "contraseña9",
        "fk_tipo_usuario": 2
    },
    {
        "id_usuario": 6,
        "nombre_usuario": "ManuelPintor",
        "correo_electronico": "manuel.pintor@email.com",
        "contrasena": "contraseña10",
        "fk_tipo_usuario": 2
    },
    {
        "id_usuario": 7,
        "nombre_usuario": "PepePecasPica",
        "correo_electronico": "pepe.pecasPica@email.com",
        "contrasena": "contraseña8",
        "fk_tipo_usuario": 2
    }
]
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "not_found",
    "error_description": "No se encontraron los usuarios"
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
  la documentación del endpoint [`/usuarios]