<?php

include_once "Book.php";

class Laboratorul6
{

    /* Db config */
    private $CONFIG;
    /* Db handler */
    private $Db;

    /**
     * Constructor
     */
    public function __construct()
    {

    }

    /**
     * Close your connection to DB
     */
    public function __destruct()
    {
        // Completeaza codul lipsa
    }

    /**
     * Connect to DB
     */
    public function connectDB($CONFIG)
    {
        try
        {
            // Completeaza codul lipsa
            if (!$this->Db) {
                echo "Not connected to DB";
            } else {
                echo "Successfully connected to DB";
            }
        }
        catch (mysqli_sql_exception $e)
        {
            trigger_error("Could not connect to database: " . $e->getMessage(), E_USER_ERROR);
        }
    }

    public function getBooks()
    {
        $books = [];

        try
        {
            // Completeaza codul lipsa
        }
        catch (PDOException $e) {
            trigger_error("Error in " . __METHOD__ . ": " . $e->getMessage(), E_USER_ERROR);
        }

        foreach ($statement -> get_result() as $row) {
            $books[] = new Book($row['id'], $row['title'], $row['year'], $row['isbn']);
        }

        return $books;
    }

    public function getBook($book_id)
    {
        try
        {
            // Completeaza codul lipsa
        }
        catch (PDOException $e) {
            trigger_error("Error in " . __METHOD__ . ": " . $e->getMessage(), E_USER_ERROR);
        }
    }

    public function createBook($book) {
        try
        {
            // Completeaza codul lipsa
            echo "Book created";
        }
        catch (PDOException $e) {
            trigger_error("Error in " . __METHOD__ . ": " . $e->getMessage(), E_USER_ERROR);
        }
    }

    public function createBooks($books) {
        try
        {
            // Completeaza codul lipsa
        }
        catch (PDOException $e) {
            trigger_error("Error in " . __METHOD__ . ": " . $e->getMessage(), E_USER_ERROR);
        }
    }

    public function updateBook($book)
    {
        try
        {
            // Completeaza codul lipsa
        }
        catch (PDOException $e) {
            trigger_error("Error in " . __METHOD__ . ": " . $e->getMessage(), E_USER_ERROR);
        }
    }

    public function updateBooks($books)
    {
        try
        {
            // Completeaza codul lipsa
        }
        catch (PDOException $e) {
            trigger_error("Error in " . __METHOD__ . ": " . $e->getMessage(), E_USER_ERROR);
        }
    }

    public function deleteBook($book_id)
    {
        try
        {
            // Completeaza codul lipsa
        }
        catch (PDOException $e) {
            trigger_error("Error in " . __METHOD__ . ": " . $e->getMessage(), E_USER_ERROR);
        }
    }

    public function deleteBooks()
    {
        try
        {
            // Completeaza codul lipsa
        }
        catch (PDOException $e) {
            trigger_error("Error in " . __METHOD__ . ": " . $e->getMessage(), E_USER_ERROR);
        }
    }

}