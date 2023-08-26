CREATE DATABASE ng_mascotas_v2_db;

USE ng_mascotas_v2_db;

CREATE TABLE mascotasv2 (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(180),
    description VARCHAR(255),
    minidescription VARCHAR(200),
    image VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL,
    contraseña VARCHAR(255) NOT NULL
);

DESCRIBE mascotasv2;