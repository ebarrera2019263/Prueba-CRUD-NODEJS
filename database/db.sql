-- script para crear la base de datos
 CREATE DATABASE autos;

-- indica la base de datos a usar
use autos;

-- crear la nueva tabla
CREATE TABLE info (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  marca VARCHAR(50) NOT NULL,
  modelo VARCHAR(100) NOT NULL,
  anio VARCHAR(15),
   placa VARCHAR(15),
    estado VARCHAR(15)
);




