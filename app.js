// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];

function agregarAmigo() {
    const amigo=document.getElementById('amigo');
    if(amigo.value==''){
        alert('Ingresa un amigo');
    } else {
        amigos.push(amigo.value);
        actualizarAmigo();
    }
}

function actualizarAmigo() {
    let lista=document.getElementById('listaAmigos');
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
      }
    for(let i=0; i<amigos.length; i++) {
        const elemento=document.createElement('li');
        elemento.textContent=amigos[i];
        lista.appendChild(elemento);
    }
}

function sortearAmigo() {
    const eleccion=amigos[Math.floor(Math.random() * amigos.length)];
    let resultado=document.getElementById('resultado');
    resultado.textContent='El amigo secreto sorteado es: '+eleccion;
}