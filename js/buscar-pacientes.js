var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando pacientes");

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("erro-ajax");
        if(xhr.status == 200){
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta); //JSON: Um jeito de transportar pela Web formatos de dados tipo JAVASCRIPT.

            pacientes.forEach( function(paciente){
            adicionarPacienteNaTabela(paciente);
        });
            }else{
                erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();
});