--> CREACIÓN DE LA BASE DE DATOS SI ES QUE NO EXISTE <--
CREATE DATABASE IF NOT EXISTS manomaestra; 

--> USO DE LA BASE DE DATOS <--
USE manomaestra; 

--> CREACIÓN DE LAS RESPECTIVAS TABLAS <--

CREATE TABLE tipo_usuario (
    id_tipo_usuario             INT             NOT NULL        AUTO_INCREMENT, 
    tipo_usuario_descripcion    VARCHAR(50)     NOT NULL, 

    PRIMARY KEY (id_tipo_usuario)
);

CREATE TABLE usuarios (
    id_usuario                  INT             NOT NULL        AUTO_INCREMENT, 
    nombre_usuario              VARCHAR(50)     NOT NULL, 
    correo_electronico          VARCHAR(100)    NOT NULL, 
    contrasena                  VARCHAR(100)    NOT NULL,   
    fk_tipo_usuario             INT             NOT NULL, 

    PRIMARY KEY (id_usuario), 
    FOREIGN KEY (fk_tipo_usuario)       REFERENCES      tipo_usuario(id_tipo_usuario)
); 

CREATE TABLE trabajos (
    id_trabajo                  INT             NOT NULL        AUTO_INCREMENT,
    fk_id_trabajador            INT             NOT NULL,
    titulo_trabajo              VARCHAR(100)    NOT NULL,
    descripcion_trabajo         TEXT,

    PRIMARY KEY (id_trabajo),
    FOREIGN KEY (fk_id_trabajador)      REFERENCES      usuarios(id_usuario)
);

CREATE TABLE reseñas (
    id_reseña                   INT             NOT NULL        AUTO_INCREMENT,
    fk_id_cliente               INT             NOT NULL,
    fk_id_trabajador            INT             NOT NULL,
    calificacion                INT             NOT NULL,
    comentario                  TEXT,
    fecha_reseña                TIMESTAMP DEFAULT               CURRENT_TIMESTAMP,

    PRIMARY KEY (id_reseña), 
    FOREIGN KEY (fk_id_cliente)         REFERENCES      usuarios(id_usuario),
    FOREIGN KEY (fk_id_trabajador)      REFERENCES      usuarios(id_usuario)
);

CREATE TABLE ideas_proyecto (
    id_idea                     INT             NOT NULL        AUTO_INCREMENT,
    fk_id_usuario               INT             NOT NULL,
    titulo_idea                 VARCHAR(100)    NOT NULL,
    descripcionIdea             TEXT,
    fechaPublicacion            TIMESTAMP DEFAULT               CURRENT_TIMESTAMP,

    PRIMARY KEY (id_idea), 
    FOREIGN KEY (fk_id_usuario) REFERENCES usuarios(id_usuario)
);

--> INSERCIÓN DE DATOS A LAS TABLAS <--

-- Insertar datos en la tabla tipo_usuario
INSERT INTO tipo_usuario (tipo_usuario_descripcion) VALUES
  ('Usuario'),
  ('Trabajador');

-- Insertar datos adicionales en la tabla usuarios
INSERT INTO usuarios (nombre_usuario, correo_electronico, contrasena, fk_tipo_usuario) VALUES
  ('AnaGomez',          'ana.gomez@email.com',      'contraseña5',  1),
  ('CarlosPerez',       'carlos.perez@email.com',   'contraseña6',  1),
  ('LauraTorres',       'laura.torres@email.com',   'contraseña7',  1),
  ('ElectricistaPro',   'electricista@email.com',   'contraseña8',  2),
  ('DiseñadorWeb123',   'disenador@email.com',      'contraseña9',  2),
  ('ManuelPintor',      'manuel.pintor@email.com',  'contraseña10', 2);

-- Insertar datos adicionales en la tabla trabajos
INSERT INTO trabajos (fk_id_trabajador, titulo_trabajo, descripcion_trabajo) VALUES
  (5,   'Reparación de cortocircuito',      'Necesito a alguien que repare un cortocircuito en mi casa.'),
  (6,   'Desarrollo de logotipo',           'Busco a un diseñador gráfico para crear un logotipo para mi nueva empresa.'),
  (5,   'Instalación de luces LED',         'Quiero cambiar las luces convencionales por luces LED en mi oficina.'),
  (4,   'Rediseño de interfaz de usuario',  'Necesito a un diseñador web para mejorar la interfaz de usuario de mi aplicación.'),
  (6,   'Pintura mural en restaurante',     'Proyecto artístico para pintar un mural en un restaurante local.');

-- Insertar datos adicionales en la tabla reseñas
INSERT INTO reseñas (fk_id_cliente, fk_id_trabajador, calificacion, comentario) VALUES
  (1, 5, 5, 'Excelente trabajo, muy profesional.'),
  (3, 6, 4, 'Buen diseñador, pero la entrega fue un poco tarde.'),
  (4, 5, 5, 'Servicio rápido y eficiente, lo recomendaría.'),
  (2, 4, 3, 'La interfaz mejoró, pero aún hay áreas de mejora.'),
  (1, 6, 4, 'Muy creativo en el diseño del mural, cumplió con las expectativas.');

-- Insertar datos adicionales en la tabla ideas_proyecto
INSERT INTO ideas_proyecto (fk_id_usuario, titulo_idea, descripcionIdea) VALUES
  (2, 'App de intercambio de libros',           'Crear una aplicación para que las personas intercambien libros entre sí.'),
  (3, 'Campaña de concientización ambiental',   'Iniciar una campaña para concientizar sobre la importancia de cuidar el medio ambiente.'),
  (1, 'Plataforma de tutorías en línea',        'Desarrollar una plataforma en línea para conectar a tutores con estudiantes.'),
  (4, 'Proyecto de jardinería comunitaria',     'Crear un espacio de jardinería para la comunidad local.'),
  (2, 'Aplicación de meditación guiada',        'Desarrollar una aplicación que ofrezca sesiones de meditación guiada.');