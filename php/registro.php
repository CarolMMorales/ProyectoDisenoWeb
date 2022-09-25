<?php

$db_host = "localhost";
$db_user = "root";
$db_password = "";
$db_name = "digital_arts_bd";
$db_table_name = "usuarios";


$mysqli = new mysqli($db_host, $db_user, $db_password, $db_name);
if ($mysqli->connect_errno) {
    echo "Fallo al conectar a MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
} else {

    echo 'Funciono'. "<br>";
    $usuario = $_POST['txtUsuario'];
     $claveUno = $_POST['txtClaveUno'];
     $claveDos = $_POST['txtClaveDos'];
     $correo = $_POST['txtCorreo'];

    echo ($usuario . "<br>"); 
    echo ($claveUno . "<br>");
    echo ($claveDos). "<br>";
    echo ($correo);
     

    $sql = "INSERT INTO usuarios (usuario, clave, correo) VALUES ('" . $usuario . "','" . $claveUno . "','" . $correo . "')";
    if (mysqli_query($mysqli, $sql)) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($mysqli);
    }
    mysqli_close($mysqli);
}
