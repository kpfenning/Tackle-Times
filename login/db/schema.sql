
DROP DATABASE IF EXISTS tackle_time;

CREATE DATABASE tackle_time;

USE tackle_time;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    favorite_team_id INT,
    FOREIGN KEY (favorite_team_id) REFERENCES teams(id)
);


CREATE TABLE IF NOT EXISTS teams (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    FOREIGN KEY (user_id)
    REFERENCES users(id)
    ON DELETE CASCADE
);