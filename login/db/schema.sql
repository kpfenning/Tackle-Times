
DROP DATABASE IF EXISTS tackle_time;

CREATE DATABASE tackle_time;

USE tackle_time;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(300) NOT NULL,
    email VARCHAR(300) NOT NULL,
    password VARCHAR(300) NOT NULL,
    favorite_team_id INT
);

CREATE TABLE IF NOT EXISTS teams (
    name VARCHAR(900) NOT NULL, 
    image_src VARCHAR(300) NOT NULL,
    alt_text VARCHAR(300) NOT NULL
);