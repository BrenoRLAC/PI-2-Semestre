class ContaService{
    constructor(ContaModel){
        this.conta = ContaModel
    }

    async get(){
        const contas = await this.conta.findAll()
        return contas
    }

    async adicionar(contaDTO){
        await this.conta.create(contaDTO)
    }
}

module.exports = ContaService