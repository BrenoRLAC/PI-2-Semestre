function login() {
    let id = 1;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    
    let senhaConvertidaNumero = parseInt(senha)
    let obj = {
        "id": id,
        "email" : email,
        "senha" : senhaConvertidaNumero
    }
   
    axios.post("http://localhost:3000/login", obj).then(result => {
        if(result.status == 200) {
            //VALIDAÇÃO DE LOGIN PELO ID PADRÃO QUE SERÁ 1
            if(result.data[0][0].cod_cli){
                window.location = "tela-ativ.html";
            }
            var resultado = document.querySelector('.mensagem-erro');
            
        } else {
            alert("Senha inválida");
        }
    })
}