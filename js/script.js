Enviar = () => {

    var nome = document.getElementById("nomeid");
    var email = document.getElementById("email");
    var telefone = document.getElementById("telefone");
    var mensagem = document.getElementById("mensagem");

    if (nome.value == "" || email.value == "" || telefone.value == "" || mensagem.value == "") {
        window.alert('Preencha todos os campos para que seja possível o envio');
    }else{
        window.alert("Dados enviados com sucesso.")
    }

}


finalizarVenda = () => {

    document.getElementById("imagem").innerHTML = "<img src='/img/Teste.png' width='500' text-align='center'>";
}