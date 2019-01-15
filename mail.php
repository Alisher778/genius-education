<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	$name = trim($_POST["name"]);
	$phone = trim($_POST["phone"]);
	$userMessage = trim($_POST["message"]);

    $to = "web.alisher89@gmail.com";
    $sendfrom   = "Genius Star Education";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers  = "Content-Type: text/html;charset=utf-8 \r\n";
    $headers .= "From: Genius Star Education <web.alisher89@gmail.com>\r\n";
    $subject = "Yangi Talabnoma";
    $message = "Yangi o'quvchi talabnomasi <br/> Name: $name <br/>\nPhone: $phone <br/>\nDate: $userMessage";
    $send = mail ($to, $subject, $message, $headers);
   if ($send == 'true'){
		echo "true";
	}else{
		echo "false";
	}
}