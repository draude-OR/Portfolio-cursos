<?php
            include('conexao.php');

            if(isset($_POST['usuario']) || isset($_POST['senha'])) {
            
                if(strlen($_POST['usuario']) == 0) {
                    echo "Preencha seu usuário!";
                } else if(strlen($_POST['senha']) == 0) {
                    echo "Preencha sua senha!";
                } else {
            
                    $usuario = $mysqli->real_escape_string($_POST['usuario']);
                    $senha = $mysqli->real_escape_string($_POST['senha']);
            
                    $sql_code = "SELECT * FROM usuario WHERE usuario = '$usuario' AND senha = '".md5($senha)."'";
                    $sql_query = $mysqli->query($sql_code) or die("Falha na execução do código SQL: " . $mysqli->error);
            
                    $quantidade = $sql_query->num_rows;
            
                    if($quantidade == 1) {
                        
                        $usuario = $sql_query->fetch_assoc();
            
                        if(!isset($_SESSION)) {
                            session_start();
                        }
            
                        $_SESSION['id'] = $usuario['id'];
                        $_SESSION['nome'] = $usuario['nome'];
            
                        header("Location: painel.php");
            
                    } else {
                        echo "Falha ao logar! Usuário ou Senha Incorretos.";
                    }
            
                }
            
            }

        ?>