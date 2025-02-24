INSERT INTO genre (name) VALUES ('Action');
INSERT INTO genre (name) VALUES ('Comedy');
INSERT INTO genre (name) VALUES ('Drama');
INSERT INTO genre (name) VALUES ('Horror');
INSERT INTO genre (name) VALUES ('Science Fiction');
INSERT INTO genre (name) VALUES ('Romance');

INSERT INTO classification (name) VALUES ('G');
INSERT INTO classification (name) VALUES ('PG');
INSERT INTO classification (name) VALUES ('PG-13');
INSERT INTO classification (name) VALUES ('R');
INSERT INTO classification (name) VALUES ('X');

INSERT INTO movies (name, duration, classification_id) VALUES ('Movie1', 148, 3);
INSERT INTO movies (name, duration, classification_id) VALUES ('Movie2', 81, 1);
INSERT INTO movies (name, duration, classification_id) VALUES ('Movie3', 175, 4);
INSERT INTO movies (name, duration, classification_id) VALUES ('Movie4', 136, 4);
INSERT INTO movies (name, duration, classification_id) VALUES ('Movi5', 100, 1);

-- Si los ids cambiaron hacerlo manual
INSERT INTO movie_genres (movie_id, genre_id) VALUES (1, 1);
INSERT INTO movie_genres (movie_id, genre_id) VALUES (1, 5);
INSERT INTO movie_genres (movie_id, genre_id) VALUES (2, 2);
INSERT INTO movie_genres (movie_id, genre_id) VALUES (3, 3);
INSERT INTO movie_genres (movie_id, genre_id) VALUES (4, 4);
INSERT INTO movie_genres (movie_id, genre_id) VALUES (5, 6);

INSERT INTO rooms (name, capacity, max_row) VALUES ('Room 1', 10, 'D');
INSERT INTO rooms (name, capacity, max_row) VALUES ('Room 2', 9, 'C');
INSERT INTO rooms (name, capacity, max_row) VALUES ('Room 3', 5, 'F');
INSERT INTO rooms (name, capacity, max_row) VALUES ('Room 4', 15, 'G');
INSERT INTO rooms (name, capacity, max_row) VALUES ('Room 5', 8, 'C');