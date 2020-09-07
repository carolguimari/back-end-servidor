const koa = require('koa');
const bodyparser = require('koa-bodyparser');
const helpers = require("./helpers");

const { formatarAg, formatarCpf } = require("./helpers")

const server = new koa();
server.use(bodyparser());

const correntistas = [ {
    nome: "Maria Silva",
    cpf: "102.030.404-00",
    codigo: "001",
    agencia: "",
    conta: "",
    saldo: 800000
},

{
    nome: "João da Silva",
    cpf: "190.012.840-35",
    codigo: "001",
    agencia: "",
    conta: "",
    saldo: 50000


}

]

const listarCorrentistas = () => {
    return correntistas
}


const adicionarCorrentista = (novoCorrentista) => {
    novoCorrentista = {
        nome: novoCorrentista.nome ? novoCorrentista.nome.trim() : 'Você precisa informar o nome',
        cpf: novoCorrentista.cpf ? formatarCpf(novoCorrentista.cpf) : 'Você precisa informar o cpf',
        codigo: novoCorrentista.codigo ? novoCorrentista.codigo : 'Você precisa informar o código',
        agencia: novoCorrentista.agencia ? formatarAg(novoCorrentista.agencia) : 'Você precisa informar a agência',
        conta: novoCorrentista.conta ? helpers.formatarConta(novoCorrentista.conta) : 'Você precisa informar a conta',
        saldo: novoCorrentista.saldo ? (novoCorrentista.saldo * 100) : 'Você precisa informar o saldo'
    }

    correntistas.push(novoCorrentista) 
    return novoCorrentista
}




const encontrarCorrentista = (cpf) => {
    let cpfFormatado = helpers.formatarCpf(cpf)
    let encontrado = false
    for (i = 0; i < correntistas.length; i++) {
        if (correntistas[i].cpf === cpfFormatado) {
            encontrado = true
            return correntistas[i]
        }
        
    }
    if(!encontrado) {
         return "Não existe cpf cadastrado"
    }


} 


const atualizarCorrentista = (id, body) => {
       encontrarCorrentista(id)
       correntistas[i].nome = body.nome
       correntistas[i].cpf = formatarCpf(id)
       correntistas[i].agencia = formatarAg(body.agencia)
       correntistas[i].conta = helpers.formatarConta(body.conta)
       correntistas[i].saldo = (body.saldo * 100)

       return correntistas[i]
    
}

const deletarCorrentista = (id) => {
        encontrarCorrentista(id)
        correntistas[i] = null

    return correntistas
} 

const contexto = async(ctx) => {
    ctx.body = 'Hello, World'

    let caminho = ctx.originalUrl.split("/")
    let id = caminho[2]

    if (ctx.originalUrl.includes("/correntistas")) {
        if (ctx.method === 'GET' && id === '') {
            ctx.body = listarCorrentistas()
        } else if (ctx.method === 'GET' && id !== '') {
            ctx.body = encontrarCorrentista(id)
        } else if (ctx.method === 'POST') {
            ctx.body = adicionarCorrentista(ctx.request.body)
        } else if (ctx.method === 'PUT') {
           
                if (id === '') {
                    ctx.status = 400
                    ctx.body = 'Você precisa informar um cpf!'
                } else {
                    ctx.body = atualizarCorrentista(id, ctx.request.body)
                } 
        } else if (ctx.method === 'DELETE') {
           
                if (id === '') {
                    ctx.status = 400
                    ctx.body = 'Você precisa informar um cpf!'
                } else {
                ctx.body = deletarCorrentista(id)
            }
            
        }
    } else {
        ctx.status = 404
        ctx.body = 'Conteúdo não encontrado!'
    }
          
}

server.use(contexto)

server.listen(8081, () => {
    console.log('Servidor rodando!')
})
