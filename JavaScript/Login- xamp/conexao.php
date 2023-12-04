<?php

$usuario = 'root';
$senha = '';
$database = 'login';
$servidor = 'localhost';

$mysqli = new mysqli($servidor, $usuario, $senha, $database);

if($mysqli->error) {
    die("Falha ao conectar ao banco de dados: " . $mysqli->error);
}

