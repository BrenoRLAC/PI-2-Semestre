//FUNÇÃO QUE IRÁ FAZER COM QUE O ENDEREÇO SEJA ATUALIZADO
function endereco() {
    let id = 1;
    let cep = document.querySelector(".cep").value;
    let endereco = document.querySelector(".enderecoo").value;
    let bairro = document.querySelector(".bairro").value;
    // let cidade = document.querySelector(".cidade").value;
    let complemento = document.querySelector(".complemento").value;
    // let cidade = document.querySelector(".numero").value;
   console.log(bairro)
   console.log(complemento)
    console.log(endereco)
   console.log(cep)
    let obj = {
        "id": id,
        "endereco": endereco,
        "bairro": bairro,
        "complemento": complemento,
        "cep": cep
   
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


function cadastrarCliente() {
    let nome = document.querySelector(".nome").value;
    let email = document.querySelector(".email").value;
    let cpf = document.querySelector(".cpff").value;
    let nascimento = document.querySelector(".nascimentoo").value;
    let senha = document.querySelector(".senhaa").value;
    
    console.log(nome)
    console.log(email)
    console.log(cpf)
    console.log(nascimento)
    console.log(senha)

    let obj = {
        "nome": nome,
        "email": email,
        "cpf": cpf,
        "nascimento": nascimento,
        "senha": senha  
    }

    axios.post("http://localhost:3000/cliente", obj).then(result => {
        if(result.status == 200) {
            //VALIDAÇÃO DE LOGIN PELO ID PADRÃO QUE SERÁ 1
                window.location = "tela-home.html";
            
            a
        } else {
            alert("Senha inválida");
        }
    })
}


