var tdTotalCursos = document.getElementById("total-cursos")
var tdTotalHoras = document.getElementById("total-horas")

var TotalHoras = 0
var TotalCursos = 0

function adicionaCurso(checkbox){
    if(checkbox.checked){ //marquei
        TotalCursos+=1;
        TotalHoras += parseInt(checkbox.value)
    }
    else { //desmarquei
        TotalCursos-=1;
        TotalHoras -= parseInt(checkbox.value)
    }

    tdTotalHoras.textContent = TotalHoras + ' h(s)'                //textcontent é para colunas de tabelas, mesma coisa do innerHTML
    tdTotalCursos.textContent = TotalCursos + ' curso(s)'
}

function confirmaMatricula() {
    var textoConfirma = document.getElementById("textoConfirma")
    if(TotalCursos > 0){
        alert("Matrícula confirmada")
        window.location.href = "index.html"     //vai colocar no link esse caminho
    }
    else{
        alert("Nenhum curso selecionado")
    }
}