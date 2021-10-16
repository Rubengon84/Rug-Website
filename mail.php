<?php
//get data from form  
$name = $_POST['name'];
$email= $_POST['email'];
$message= $_POST['message'];
$telephoneNo= $_POST['telephoneNumber'];
$location= $_POST['location'];
$rugSize= $_POST['rugSize'];
$to = "rubengon.uk@gmail.com";
$subject = "Mail From website";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\nMessage =" . $message ."\r\n Mobile number =" . $telephoneNo . "\r\n Location =" . $location . "\r\n Rug Size =". $rugSize;
$headers = "From: RugWebsite@yoursite.com" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:contact.html");
?>