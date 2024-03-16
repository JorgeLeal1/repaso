// Jquery 
function verValorInput() {
    const valorEscrito = $("#inputUsuario").val();
    alert($("#inputUsuario").val());

    $("#inputUsuario").val(valorEscrito + " Agregado desde java");
}


/*
//Javascript

const labelUsuario = document.getElementById("labelUsuario");
const btnIngresar = document.getElementById("btnIngresar");

labelUsuario.innerText ="LABEL";
labelUsuario.style.color = "#f20808";


// Funcion anonima 
btnIngresar.addEventListener("click", ()=>{
    //alert("Click");
    verValorInput();

});

function verValorInput(){
    const inputUsuario = document.getElementById("inputUsuario");
    alert(inputUsuario.value)
}

*/