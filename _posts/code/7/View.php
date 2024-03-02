<?php

class View
{

    public function __construct() {
        $this->form();
    }

    public function form () {
        // Pasul 1
        echo
        '
        <form action="?action=addUser" method="post">
            <label for="name">Name:</label><br>
            <input type="text" id="name" name="name"><br>
            <label for="age">Age:</label><br>
            <input type="text" id="age" name="age"><br>
            <button type="submit"> Submit </button>
        </form>
        ';
    }

    public function show ($model) {
        // Pasul 6
        echo  ' <h2> ' .  $model -> getName() . ' </h2> ' . ' <h2> ' .  $model -> getAge() . ' </h2> ';
    }
}