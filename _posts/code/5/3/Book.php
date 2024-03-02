<?php

class Book
{
    public $name;
    public $author;

    /**
     * @param $name
     * @param $author
     */
    public function __construct($name, $author)
    {
        $this->name = $name;
        $this->author = $author;
    }

    /**
     * @return mixed
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param mixed $name
     */
    public function setName($name)
    {
        $this->name = $name;
    }

    /**
     * @return mixed
     */
    public function getAuthor()
    {
        return $this->author;
    }

    /**
     * @param mixed $author
     */
    public function setAuthor($author)
    {
        $this->author = $author;
    }

    /**
     * @return mixed
     */
    public function getFullName()
    {
        return "Full name: " . $this->name . " - " . $this->author;
    }

    public function getBookArray() {
        $array = array(
            "book-name" => $this->name,
            "book-author" => $this->author,
        );
        return $array;
    }

    public function deleteMeWithOverriding () {
        return "Delete me by using overriding";
    }
}