<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

    <?php
        include_once './Ebook.php';
        $ebook = new Ebook("Stephen King", "Shining");
        echo $ebook -> getFullName() . "<br>";
        echo $ebook -> deleteMeWithOverriding() . "<br>";
        echo $ebook -> getBookInJson();
    ?>

</body>
</html>