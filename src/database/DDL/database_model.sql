CREATE TABLE genre (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE classification (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE movies (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    duration INT,
    classification_id INT,
    FOREIGN KEY (classification_id) REFERENCES classification(id)
);

CREATE TABLE movie_genres (
    id SERIAL PRIMARY KEY,
    movie_id INT,
    genre_id INT
);

CREATE TABLE rooms (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    capacity INT NOT NULL,
    max_row CHAR(1) NOT NULL
);

CREATE TABLE showtimes (
    id SERIAL PRIMARY KEY,
    movie_id INT NOT NULL,
    room_id INT NOT NULL,
    showtime TIMESTAMP NOT NULL,
    FOREIGN KEY (movie_id) REFERENCES Movies(id),
    FOREIGN KEY (room_id) REFERENCES Rooms(id)
);

CREATE TABLE reservations (
    id SERIAL PRIMARY KEY,
    cc NUMERIC(10) NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    showtime_id INT NOT NULL,
    seat_code CHAR(3) NOT NULL,
    reservation_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    taken BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (showtime_id) REFERENCES Showtimes(id),
);