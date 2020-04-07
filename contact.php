<?php

/*
  THIS FILE USES PHPMAILER INSTEAD OF THE PHP MAIL() FUNCTION
 */

require 'class-phpmailer.php';

//instanciamos un objeto de la clase phpmailer al que llamamos 
//por ejemplo mail
$mail = new phpmailer();

//Definimos las propiedades y llamamos a los métodos 
//correspondientes del objeto mail
//Con PluginDir le indicamos a la clase phpmailer donde se 
//encuentra la clase smtp que como he comentado al principio de 
//este ejemplo va a estar en el subdirectorio includes
$mail->PluginDir = "includes/";

//Con la propiedad Mailer le indicamos que vamos a usar un 
//servidor smtp
$mail->Mailer = "smtp";

//$mail->SMTPDebug = 2;
//Asignamos a Host el nombre de nuestro servidor smtp
$mail->Host = "smtp.theroyalideas.com";

//Le indicamos que el servidor smtp requiere autenticación
$mail->SMTPAuth = true;

//Le decimos cual es nuestro nombre de usuario y password
$mail->Username = "hola@theroyalideas.com";
$mail->Password = "Oneclick1011";

//Indicamos cual es nuestra dirección de correo y el nombre que 
//queremos que vea el usuario que lee nuestro correo
$mail->From = "hola@theroyalideas.com";
$mail->FromName = "Royal Ideas";

//el valor por defecto 10 de Timeout es un poco escaso dado que voy a usar 
//una cuenta gratuita, por tanto lo pongo a 30  
$mail->Timeout = 30;

//Indicamos cual es la dirección de destino del correo
$mail->AddAddress("hola@theroyalideas.com");
$mail->Subject = "Nueva consulta desde la web";
$mail->Body = "Recibiste un nuevo mensaje de " . filter_input(INPUT_GET, 'nombre') . " " . filter_input(INPUT_GET, 'apellido') . "\n" . filter_input(INPUT_GET, 'mensaje') . "\n Puedes responder a la direccion " . filter_input(INPUT_GET, 'email')."\nel telefono es:". filter_input(INPUT_GET, "telefono")."\nllamar a las ". filter_input(INPUT_GET, "time");

$exito = $mail->Send();

if (!$exito) {
    echo "<script>location.href ='javascript:history.back()';</script>";
} 
 else {
    echo "<script>location.href ='javascript:history.back()';</script>";
}