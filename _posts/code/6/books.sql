CREATE TABLE Books(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    year INT(255) NOT NULL,
    isbn VARCHAR(255) NOT NULL
);

insert into laboratorul_6.Books (title, year, isbn)
values  ('The Shining', 1977, 9783785),
        ('The Midnight Library', 2020, 5820312),
        ('The Book Thief', 2013, 6541442),
        ('The Hobbit', 1937, 3512332);