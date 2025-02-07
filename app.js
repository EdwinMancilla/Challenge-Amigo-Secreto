// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el
let amigos = [];
let lista = document.getElementById('listaAmigos');

function agregarAmigo() {
    let capturaValor = document.getElementById ('amigo').value;
    console.log(capturaValor);
    limpiarCaja();
  `${capturaValor === '' ? alert ('ingrese un nombre valido') : amigos.push(capturaValor)}`
  listaAmigosHtml();

}

function limpiarCaja(){
    document.getElementById('amigo').value= '';
}
console.log(amigos);

function actualizarLista(){
    let lista = document.getElementById('listaAmigos');
lista.innerHTML ='';
}

function listaAmigosHtml(){
    actualizarLista();
    for(let i =0;i<amigos.length;i++){
        let li = document.createElement('li');
        li.innerHTML= `${amigos[i]}`;
        lista.appendChild(li);
    }
    
}

function sortearAmigo() {
        if(amigos.length == 0){
            alert('No hay amigos para Sortear');
         } else {
            let amigoSorteado= Math.floor(Math.random()*amigos.length);
            let resultado = amigos[amigoSorteado];
              console.log(resultado);

              let amigoSeleccionado= document.getElementById('resultado');
         amigoSeleccionado.innerHTML=`El Amigo Secreto Sorteado es : ${resultado}`;
         }
         reiniciar();

}

function reiniciar(){
      amigos = [];

    limpiarCaja()
    actualizarLista()

    listaAmigosHtml()
}

