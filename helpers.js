

const bancos = (entrada) => {
    if (entrada === "001") {
        return "Banco do Brasil";
    } else if (entrada === "003") {
        return "Banco Santander";
    } else if (entrada === "104") {
        return "Caixa Econômica Federal"
    } else if (entrada === "237") {
        return "Banco Bradesco";
    } else if (entrada === "341") {
        return "Banco Itaú";
    }  else if (entrada === "356") {
        return "Banco Real";
    } else if (entrada === "389") {
        return "Banco Mercantil do Brasil";
    } else if (entrada === "399") {
        return "HSBC Bank Brasil";
    } else if (entrada === "422") {
        return "Banco Safra";
    } else if (entrada === "453") {
        return "Banco Rural"
    } else if (entrada === "633") {
        return "Banco Rendimento"
    } else if (entrada === "652") {
        return "Itaú Unibanco";
    } else if (entrada === "745") {
        return "Banco Citibank"
    } else {
        return "Banco não encontrado"
    }
    
    }
    
    
    //console.log(bancos(entrada));
    
    const formatar = (entrada) => {
        let saida = entrada.replace(".", "").replace(".", "").replace("-", "")
           return saida 
    }
    
    //formatar(entrada)
    
    let entrada = "1234563"
    
    const formatarCpf = (entrada) => {  
    let cpf = entrada.substr(0, 3) + "." + entrada.substr(3, 3) + "." + entrada.substr(6, 3) + "-" + entrada.substr(9, 2)
        return cpf
    }
    
    //console.log(formatarCpf(entrada))
    
    const formatarAg = (entrada) => {
     let agencia = entrada.substr(0, 4) + "-" + entrada.substr(4)
        return agencia
    }
    
    // console.log(formartarAg(entrada))
    
    const formatarConta = (entrada) => {
        let conta = entrada.substr(0, 6) + "-" + entrada.substr(6)
           return conta
       }
    
       //console.log(formartarConta(entrada))
    
       module.exports = {
        bancos: bancos,
        formatar: formatar,
        formatarCpf: formatarCpf,
        formatarAg: formatarAg,
        formatarConta: formatarConta,
       }