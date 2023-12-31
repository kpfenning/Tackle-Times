
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
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    team_name VARCHAR(900) NOT NULL, 
    imageSrc VARCHAR(300) NOT NULL,
    altText VARCHAR(300) NOT NULL,
    FOREIGN KEY (user_id)
    REFERENCES users(id)
    ON DELETE CASCADE
);