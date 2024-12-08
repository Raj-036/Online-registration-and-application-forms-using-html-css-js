<?php
session_start();
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $_SESSION['form_data'] = [
        'name'    => htmlspecialchars($_POST['name']),
        'email'   => htmlspecialchars($_POST['email']),
        'phone'   => htmlspecialchars($_POST['phone']),
        'dob'     => htmlspecialchars($_POST['dob']),
        'gender'  => htmlspecialchars($_POST['gender']),
        'address' => nl2br(htmlspecialchars($_POST['address'])),
    ];
    header("Location: display.php");
    exit();
} else {
    echo "<p style='color:red;'>Invalid Request.</p>";
}
?>