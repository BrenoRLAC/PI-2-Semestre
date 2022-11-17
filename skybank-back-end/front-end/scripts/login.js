function login() {
    let id = 1;
    let email = document.querySelector("#cpf").value;
    let senha = document.querySelector("#senha").value;

    let senhaConvertidaNumero = parseInt(senha)
    let obj = {
        "id": id,
        "email" : email,
        "senha" : senhaConvertidaNumero
    }
   
    axios.post("http://localhost:3000/login", obj).then(result => {
        if(result.status == 200) {
            console.log(result)
            //VALIDAÇÃO DE LOGIN PELO ID PADRÃO QUE SERÁ 1
            if(result.data[0][0].cod_cli == 1){
                window.location = "tela-ativ.html";
            }
           
            
        } else {
            alert("Senha inválida");
        }
    })
}

