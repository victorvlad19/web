<?php

class Dispatcher
{
    public function __construct($controller) {
        // Pasul 2
        if (isset($_GET['action'])) $controller->{$_GET['action']}();
    }
}