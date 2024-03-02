<?php
include_once "Db.php";

$db = new Laboratorul6();
$db -> connectDB(include('Config.php'));

echo "<table border='1'> <tr> <th>Id</th> <th>Title</th> <th>Year</th> <th>Isbn</th> </tr>";

foreach ($db -> getBooks() as $book) {
    echo "<tr>";
    echo "<td>" . $book -> getId() . "</td>";
    echo "<td>" . $book -> getTitle() . "</td>";
    echo "<td>" . $book -> getYear() . "</td>";
    echo "<td>" . $book -> getIsbn() . "</td>";
    echo "</tr>";
}

echo "</table>";

echo "My preferred book is: ". $db -> getBook(1);

$db -> createBook( new Book(0, "Misery", "1990", "9876542") );

$db -> createBooks([ new Book(0, "Moby Dick", "1851", "5497256"),
                     new Book(0, "War and Peace", "1867", "9965743")
                   ]);

$db -> updateBook(new Book(1, "Invisible Man", "1897", "9876542"));

$db -> updateBooks([ new Book(1, "Moby Dick", "1851", "5497256"),
                    new Book(2, "War and Peace", "1867", "9965743")
                    ]);

$db -> deleteBook(1);
$db -> deleteBooks();


?>