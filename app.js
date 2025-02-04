// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el
let nombreAmigos = [];


function agregarAmigo() {
    let amigos = document.getElementById ('amigo').value;
    limpiarCaja();
    console.log(amigos);
  if(amigos == ''){
    alert('ingrese un nombre valido');
  } else if(!nombreAmigos.includes(amigos)){
    nombreAmigos.push(amigos);
    return amigos;
  }

}

function limpiarCaja(){
    document.getElementById('amigo').value= '';
}
console.log(nombreAmigos);

let lista = document.getElementById('listaAmigos');
lista.innerHTML='';