mudaServico()           //Chamar a função antes pra já aplicar os displays
function mudaServico() {
    let servico = document.getElementById("selectServico").value;
    if (servico == 1){
        document.getElementById("divIMC").style.display="block";
        document.getElementById("divPorcento").style.display="none";
        document.getElementById("divOrdenacao").style.display="none";
        document.getElementById("divCEP").style.display="none";
    }
    else if (servico == 2){
        document.getElementById("divIMC").style.display="none";
        document.getElementById("divPorcento").style.display="block";
        document.getElementById("divOrdenacao").style.display="none";
        document.getElementById("divCEP").style.display="none";
    }
    else if (servico == 0){
        document.getElementById("divIMC").style.display="none";
        document.getElementById("divPorcento").style.display="none";
        document.getElementById("divOrdenacao").style.display="none";
        document.getElementById("divCEP").style.display="none";
    }
    else if (servico == 3){
        document.getElementById("divIMC").style.display="none";
        document.getElementById("divPorcento").style.display="none";
        document.getElementById("divOrdenacao").style.display="block";
        document.getElementById("divCEP").style.display="none";
        
    }
    else if (servico == 4){
        document.getElementById("divIMC").style.display="none";
        document.getElementById("divPorcento").style.display="none";
        document.getElementById("divOrdenacao").style.display="none";
        document.getElementById("divCEP").style.display="block";
    }
}

function calcularIMC() {
        let peso = document.getElementById("peso").value;
        let altura = document.getElementById("altura").value;
        let imc = peso / (altura*altura)
        imc = parseFloat(imc).toFixed(2)
        document.getElementById("resultadoIMC").innerHTML = "O IMC é: " + imc + "%.";
}

function calcularPorcento(){
    let porcentagem = (document.getElementById("porcento").value) / 100;
    let valor = document.getElementById("valorTotal").value;
    let resultadoPorcentagem = valor*porcentagem
    resultadoPorcentagem = parseFloat(resultadoPorcentagem).toFixed(1)
    document.getElementById("resultadoPorcento").innerHTML = porcentagem * 100 + "% de "+valor+" é: " + resultadoPorcentagem
}

function fazOrdenacao(){
    const regex = /[a-zA-Z]/
    let desordenados = document.getElementById("numeros").value;
    if(regex.test(desordenados)){
        alert("VALOR INVÁLIDO DIGITADO!")
        window.location.href = "servicos.html"
    }
    else{
        if(desordenados.includes(",")){
            let array = desordenados.split(",")
            let ordenados = array.sort(function(a,b){return a-b})
            document.getElementById("numerosOrdenados").innerHTML = "Esses números, ordenados, são:" + " " +  ordenados;
        }
        else{
            alert("VALOR INVÁLIDO DIGITADO!")
            window.location.href = "servicos.html"
        }
    }
}


async function buscaCEP(){
    let cep = document.getElementById("inputCEP").value;                             // async diz que é assincrona, pra poder esperar
    const resposta = await fetch('https://brasilapi.com.br/api/cep/v1/' + cep);      //await esperar para executar
    const dados = await resposta.json();
    console.log(dados)
    console.log(dados['city'])
    document.getElementById("endereco").innerHTML = dados['city'] + ' - ' + dados['state'] + ' - ' + dados['street'];
}