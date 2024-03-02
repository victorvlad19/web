<?php

$url = $_POST['link'];

if (filter_var($url, FILTER_VALIDATE_URL) === FALSE) {
    die('Not a valid URL');
}

// Sa se completeze codul lipsa