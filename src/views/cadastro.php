<?php 

try {
    $conn = new PDO("mysql:host=localhost;dbname=job_sea", "root", "root");
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $password = MD5($_POST['senha']);
$dataNasc = $_POST['dataNascimento'];
$email = $_POST['email'];
$nome = $_POST['nome'];
$sobrenome = $_POST['sobrenome'];
$objetivo = $_POST['objetivo'];
echo $password;

$stmt = $conn->prepare('INSERT INTO usuario VALUES(DEFAULT, DEFAULT, :dataNascimento, :hash_password, :email, nome, sobrenome, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, :objetivo_id)');

$stmt->execute(array(
    ':dataNascimento'=>$dataNasc,
    ':hash_password'=>$password,
    ':email'=>$email,
    ':nome'=>$nome,
    ':sobrenome'=>$sobrenome,
    ':objetivo_id'=>$objetivo
));

echo $stmt->rowCount();
} catch (PDOException $e) {
    echo 'ERROR: ' . $e->getMessage();
}



?>
