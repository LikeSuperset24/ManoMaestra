# Endpoint: `GET /trabajos`

Permite obtener toda la información sobre todos los trabajos.

## Ejemplo de Solicitud
```http
GET /trabajos
```

## Respuesta Exitosa (Código 200 OK)
```json
[
    {
        "id_trabajo": 1,
        "fk_id_trabajador": 5,
        "titulo_trabajo": "Reparación de cortocircuito",
        "descripcion_trabajo": "Necesito a alguien que repare un cortocircuito en mi casa."
    },
    {
        "id_trabajo": 2,
        "fk_id_trabajador": 6,
        "titulo_trabajo": "Desarrollo de logotipo",
        "descripcion_trabajo": "Busco a un diseñador gráfico para crear un logotipo para mi nueva empresa."
    },
    {
        "id_trabajo": 3,
        "fk_id_trabajador": 5,
        "titulo_trabajo": "Instalación de luces LED",
        "descripcion_trabajo": "Quiero cambiar las luces convencionales por luces LED en mi oficina."
    },
    {
        "id_trabajo": 4,
        "fk_id_trabajador": 4,
        "titulo_trabajo": "Rediseño de interfaz de usuario",
        "descripcion_trabajo": "Necesito a un diseñador web para mejorar la interfaz de usuario de mi aplicación."
    },
    {
        "id_trabajo": 5,
        "fk_id_trabajador": 6,
        "titulo_trabajo": "Pintura mural en bar",
        "descripcion_trabajo": "Proyecto artístico para pintar un mural en un bar local."
    },
    {
        "id_trabajo": 6,
        "fk_id_trabajador": 7,
        "titulo_trabajo": "Colado de zapata para muro",
        "descripcion_trabajo": "Proyecto de colado de aproximadamente 10 zapatas, urge"
    }
]
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "not_found",
    "error_description": "No se encontraron los trabajos"
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
  la documentación del endpoint [`/trabajos]