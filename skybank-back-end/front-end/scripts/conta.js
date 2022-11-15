function transferir() {
    let id = 1;
    let valorTransferencia = document.querySelector("#transferencia").value;
    
    let valorTransferenciaConvertido = parseInt(valorTransferencia)
    let obj = {
        "id": id,
        "valor": valorTransferenciaConvertido
    }
   
    axios.post("http://localhost:3000/transferencia", obj).then(result => {
        if(result.status == 200) {
            //VALIDAÇÃO DE TRANSFERÊNCIA PELO ID PADRÃO QUE SERÁ 1
            if(result.data[0][0].cod_cli){
                window.location = "tela-ativ.html";
            }
            var resultado = document.querySelector('.mensagem-erro');
            
        } else {
            alert("Senha inválida");
        }
    })
}