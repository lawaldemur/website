<?php

$subject = $_POST['subject'];
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$message = "<b>Message from $name , $phone , $email:</b><br><br>$message";
$headers = 'Content-type: text/html; charset=iso-8859-1';

mail('hello@lawaldemur.com', $subject, $message, $headers);

echo "1";