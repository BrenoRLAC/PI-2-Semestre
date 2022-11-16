function transferir() {
    let id = 1;
    let operacao = 3;
    let valorTransferencia = document.querySelector("#transferencia").value;
    let numeroConta = 1234
    let agenciaConta = 4321
    let senha = 1234
   

    let valorTransferenciaConvertido = parseInt(valorTransferencia)
    let obj = {
        "id": id,
        "valor": valorTransferenciaConvertido,
        "operacao": operacao,
        "numeroConta": numeroConta,
        "agenciaConta": agenciaConta,
        "senha": senha
   
    }
   
    axios.post("http://localhost:3000/transferencia", obj).then(result => {
        if(result.status == 200) {
            console.log(result)
            //VALIDAÇÃO DE LOGIN PELO ID PADRÃO QUE SERÁ 1
            if(result.data[0][0].cod_cli = 1){
                window.location = "tela-transfer-verso.html";
            }
            
        } else {
            alert("Senha inválida");
        }
    })
}

function depositar() {
    let id = 1;
    //OPERAÇÃO 2 = DEPOSITAR
    let operacao = 2;
    let valorTransferencia = document.querySelector("#transferencia").value;
    let numeroConta = 1234
    let agenciaConta = 4321
    let senha = 1234
   

    let valorTransferenciaConvertido = parseInt(valorTransferencia)
    let obj = {
        "id": id,
        "valor": valorTransferenciaConvertido,
        "operacao": operacao,
        "numeroConta": numeroConta,
        "agenciaConta": agenciaConta,
        "senha": senha
   
    }
   
    axios.post("http://localhost:3000/transferencia", obj).then(result => {
        if(result.status == 200) {
            console.log(result)
            //VALIDAÇÃO DE LOGIN PELO ID PADRÃO QUE SERÁ 1
            if(result.data[0][0].cod_cli = 1){
                window.location = "tela-deposit-verso.html";
            }
            
        } else {
            alert("Senha inválida");
        }
    })
}