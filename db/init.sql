CREATE TABLE IF NOT EXISTS studenti (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nume VARCHAR(100) NOT NULL,
    an INT NOT NULL,
    media FLOAT NOT NULL
);

INSERT INTO studenti (nume, an, media) VALUES ('Student Test', 1, 9.50);