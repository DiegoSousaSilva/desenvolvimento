<?php

    require_once './php/mail.php';

    if(isset($_POST['name']) && !empty($_POST['name']) && 
        isset($_POST['email']) && !empty($_POST['email']) && 
          isset($_POST['subject']) && !empty($_POST['subject']) &&
            isset($_POST['phonenumber']) && !empty($_POST['phonenumber']) &&
              isset($_POST['message']) && !empty($_POST['message']) ) 
              {


                $assunto =  $_POST['assunto'];
                $mensagem = $_POST['message'];

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