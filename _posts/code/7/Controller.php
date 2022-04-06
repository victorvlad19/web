<?php

class Controller
{
    protected $model;
    protected $view;

    public function __construct($model, $view)
    {
        $this -> model = $model;
        $this -> view = $view;
    }

    public function addUser() {

        $name = $_POST['name'];
        $age = $_POST['age'];
        // Pasul 3
        $this -> model -> setName($name);
        $this -> model -> setAge($age);

        // Pasul 4
        $mySuperSecretVariableModel = $this -> model;

        // Pasul 5
        $this -> view -> show($this -> model);
    }
}