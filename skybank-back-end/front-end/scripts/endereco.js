//FUNÇÃO QUE IRÁ FAZER COM QUE O ENDEREÇO SEJA ATUALIZADO
function endereco() {
    let id = 1;
    let cep = document.querySelector("#cep").value;
    let endereco = document.querySelector("#endereco").value;
    let bairro = document.querySelector("#bairro").value;
    let cidade = document.querySelector("#cidade").value;
    let uf = document.querySelector("#uf").value;
   
    let obj = {
        "id": id,
        "endereco": endereco,
        "bairro": bairro,
        "cidade": cidade,
        "cep": cep,
        "uf": uf
   
    }
    
   //MÉTODO PUT QUE IRÁ ENVIAR A REQUISIÇÃO COM OS DADOS PARA ATUALIZAR OS VALORES DOS ENDEREÇOS
    axios.put("http://localhost:3000/contacliente", obj).then(result => {
        if(result.status == 200) {
            
            //VALIDAÇÃO DE LOGIN PELO ID PADRÃO QUE SERÁ 1
            if(result.data[0][0].cod_cli = 1){
                window.location = "tela-deposit-verso.html";
            }
            
        } else {
            alert("Senha inválida");
        }
    })
}


function clienteConta() {
    let id = 1;
    let nome = document.querySelector("#nome").value;
    let email = document.querySelector("#email").value;
    let senha = document.querySelector("#senha").value;

    let obj = {
        "id": id,
        "nome": nome,
        "email": email,
        "senha": senha  
    }

    axios.put("http://localhost:3000/contacliente", obj).then(result => {
        if(result.status == 200) {
            //VALIDAÇÃO DE LOGIN PELO ID PADRÃO QUE SERÁ 1
                window.location = "seus-dados.html";
            
            
        } else {
            alert("Senha inválida");
        }
    })
}

