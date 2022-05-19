let respCorrectas = [3, 2, 2, 1, 3];

let respElegidas = [];

let cantCorrectas = 0;

function checkUsuario(){ 
    let usuario = document.getElementById("usuario").value;
    if (usuario.length == 0) {
        return false;
    } else{
        return true;
    }
}

function repsuesta(num_preg, selecccionada){
    respElegidas[num_preg] = selecccionada.value;

}

function checkRespuestas(){

    if (checkUsuario() == true) {
        
    cantCorrectas = 0;
    
    for(let i = 0; i < respElegidas.length; i++){
        if(respElegidas[i] == respCorrectas[i]){
            cantCorrectas++;
        }
    }

    document.getElementById("respuestas").innerHTML = "Cantidad de respuestas correctas: " + cantCorrectas + " de " + respCorrectas.length;
        
    } else {
        alert("Por favor ingrese su nombre");
    }
}


