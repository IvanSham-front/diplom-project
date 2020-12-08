<?php
if (isset($_POST['name'])) {$name = $_POST['name'];}
if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
if (isset($_POST['email'])) {$email = $_POST['email'];}
$myadress  = "nickeny@yandex.ru";
$mes = "Имя: $name \nE-mail: $email \nТелефон: $phone";
$sub = "Заказ"
$send = mail($myadress, $sub, $mes,"Content-type:text/plain; charset = UTF-8\r\nFrom:$email");


if ($send == 'true')

    {echo "Сообщение отправлено";}

else {echo "Ой, что-то пошло не так";}

?>