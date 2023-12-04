<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Senac</title>

    <!-- google fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet">
    <!-- LINK CSS -->
    <link rel="stylesheet" href="css/style.css">

</head>

<body>
    <div class="container">
        <div class="header">
            <h2>Login<hr></h2>
            <img src="img/logo-senacrs (1).png" width="180px" alt="">
        </div>
        <hr class="linha-login">

        <?php 
            include("valida.php")
        ?>

        <form action="" id="form" class="form" method="post">
            <div class="form-control">
                <input type="text" name="usuario" id="usuario" placeholder="Usuário" autofocus>
                <span>@senac.com.br</span>
            </div>

            <div class="form-control">
                <input type="password" name="senha" id="senha" placeholder="Senha">
                <i class="fa-regular fa-eye" id="btn-senha" onclick="mostrarSenha()"></i>
            </div>
            <button type="submit">Enviar</button>
        </form>
    </div>




    <script src="https://kit.fontawesome.com/c147e20baf.js" crossorigin="anonymous"></script>
    <!-- <script src="js/script.js"></script> -->


</body>

</html>