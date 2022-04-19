<?php

$url = $_POST['link'];

if (filter_var($url, FILTER_VALIDATE_URL) === FALSE) {
    die('Not a valid URL');
}

$homepage = file_get_contents($url);

$dom = new DOMDocument();
$domFinal = new DOMDocument();

$dom -> loadHTML($homepage, LIBXML_NOERROR);

$title = $dom -> getElementById("firstHeading");
$img = $dom -> getElementsByTagName("img")->item(0);
$p = $dom -> getElementsByTagName("p")->item(2);

$dom -> appendChild($title);
$dom -> appendChild($img);
$dom -> appendChild($p);

//echo $homepage;
echo $dom->saveXML();