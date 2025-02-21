//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let amigoSort = [];

function newFriends() {
    let novosAmigos = document.getElementById('amigo').value;
    
    if (novosAmigos == '') {
        alert('Por Favor, insira um nome.');
    } else { 
        if (amigos.includes(novosAmigos)){
            alert('Nome já incluindo na lista, insira um nome diferente.');
        } else {
            amigos.push(novosAmigos);
            let limpa = document.getElementById('amigo');
            limpa.value = '';
            addAmigos();
        }
    }
}

function addAmigos(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    listaAmigos = '';

    for(let i = 0; i < amigos.length; i++){
        listaAmigos = listaAmigos + '<li>' + amigos[i] +'</li>';
        document.getElementById('listaAmigos').innerHTML = listaAmigos;
    }
}

function sortearAmigo() {
    let listaResultado = document.getElementById('resultado');
    let numSorteio;
    if(amigos.length > 0){
        if(amigos.length == amigoSort.length){
            alert('Todos os nome já foram sorteados.');
        } else {
            do{
                numSorteio = Math.floor(Math.random() * amigos.length);
            } while(amigoSort.includes(amigos[numSorteio]));
            amigoSort.push(amigos[numSorteio]);
            document.getElementById('resultado').innerHTML = amigoSort[amigoSort.length -1];
            console.log(amigoSort);
        }
    }
    else {
       alert('Insira um nome.');
    }
}
    