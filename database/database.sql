CREATE DATABASE ng_mascotas_db;

USE ng_mascotas_db;

CREATE TABLE mascotas(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(180),
    description VARCHAR(255),
    image VARCHAR(1000),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    numero_contacto VARCHAR(9)
);

RENAME TABLE mascotas to mascotas_db

DESCRIBE mascotas;

USE ng_mascotas_db;

ALTER TABLE mascotas
ADD filesImg VARCHAR(100);