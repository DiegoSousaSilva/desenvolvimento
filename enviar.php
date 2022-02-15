<?php

    require_once './php/mail.php';

    if(isset($_POST['name']) && !empty($_POST['name']) && 
        isset($_POST['email']) && !empty($_POST['email']) && 
          isset($_POST['subject']) && !empty($_POST['subject']) &&
            isset($_POST['phonenumber']) && !empty($_POST['phonenumber']) &&
              isset($_POST['message']) && !empty($_POST['message']) ) 
              {
                $nome=$_POST['name'];
                $email= $_POST['email'];
                $assunto =  $_POST['subject'];
                $telefone = $_POST['phonenumber'];
                $msg = $_POST['message'];
                
                 $mensagem .= " Nome: <b>".$nome."</b>
                  "; // Texto da mensagem
                  $mensagem .= "<br> E-mail: <b>".$email."</b>
                  "; // Texto da mensagem
                  $mensagem .= "<br> Telefone: <b>".$telefone."</b>
                  "; // Texto da mensagem                  
                  $mensagem .= "<br> Assunto: <b>".$assunto."</b>
                  "; // Texto da mensagem
                  $mensagem .= "<br> <br>  Mensagem: <b>".nl2br($msg)."</b>
                  "; // Texto da mensagem

                if(send($assunto, $mensagem)){
                  echo "Enviado";
                }else{
                  echo "ERRO";
                }
              }else {
                  echo 'preencha todos os campos';
              }

// $assunto = 'assunto aqui';
// $mensagem = 'mensagem aqui';

// if(send($assunto, $mensagem))
// {
//     echo "Enviado";
// }
// else{
//     echo "erro";
// }

?>