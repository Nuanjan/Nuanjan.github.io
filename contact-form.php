<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];

$email_from = "nuanjan.github.io";
$email_subject = "New form Submission";
$email_body = " User Name: $name.\n".
              " User Email: $visitor_email.\n".
              "User message: $message.\n";

$to = "nuanjan.schluntz@gmail.com"
?>
