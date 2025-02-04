// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//arreglo para definir lista
let amigos = [];

function agregarAmigo(){
  
   let nombre = document.getElementById("amigo");
   if(nombre.value == ""){
    alert("Por favor inserte un nombre");
   }else{
    amigos.push(nombre.value);
    let limpiar = document.getElementById("amigo");
    limpiar.value = "";
    actualizar();
   }
  
    console.log(amigos);

}

function actualizar(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    amigos.forEach((amigo)=>{
        lista.innerHTML += `<ul>${amigo}</li>`;
    })
}

function sortearAmigo(){
    if(amigos.length === 0){
        alert("por favor ingrese un nombre para sortear");

    }else {
        
        let indice = Math.floor(Math.random() * amigos.length);
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = amigos[indice];
    }
}
