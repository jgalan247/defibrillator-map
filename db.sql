CREATE DATABASE mapdb;

USE mapdb;

CREATE TABLE locations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    description TEXT,
    lat FLOAT(10, 6),
    lng FLOAT(10, 6),
    code VARCHAR(255),
    notes TEXT
);
