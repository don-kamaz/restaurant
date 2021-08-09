<?php
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $tel = htmlspecialchars($_POST['phone']);

    $source = getenv('HTTP_REFERER');
    $subject = 'The subject of email';
    $message = "Text:
        <br><br>
        Name: $name<br>
        E-mail: $email<br>
        Phone: $phone<br>
        Source: $source
    ";

    $headers = "From: $email\r\nReply-To: $email\r\nContent-type: text/html; charset=utf-8\r\n";

    $date=date("d.m.y"); 
    $time=date("H:i"); 

    $f = fopen("leads.xls", "a+");
    fwrite($f," <tr>");    
    fwrite($f," <td>$email</td> <td>$name</td> <td>$tel</td>");   
    fwrite($f," <td>$source</td>");    
    fwrite($f," </tr>");  
    fwrite($f,"\n ");    
    fclose($f);
?>