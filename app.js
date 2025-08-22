

let nombresDeAmigos = [];
let lista = document.querySelector('#listaAmigos');
let resultado = document.querySelector('#resultado');

function agregarAmigo(){
    //Agregamos al arreglo el nombre introducido en el cuadro de texto
   
    let input = document.querySelector('#amigo');

    if(input.value.trim()==='')  //chequep de que no este vacio
        alert('NO INGRESASTE NINGUN NOMBRE 😢');
    else{
        nombresDeAmigos.push(input.value.trim()); //con push lo agregamos
    }

    input.focus(); // El cursor vuelve a 0
    limpiarCuadro();
    console.log(nombresDeAmigos); 
    mostrarListaHTML();
}

function limpiarCuadro() {
    document.querySelector('#amigo').value = '';
}

function mostrarListaHTML(){
    lista.innerHTML = ""; //limpia la lista, esto evita que se repitan nombres

    for (let i = 0; i < nombresDeAmigos.length; i++) {
        const li = document.createElement('li'); // crea el <li> en el html
        li.textContent = nombresDeAmigos[i];     // mete el texto al <li>
        lista.appendChild(li);                   // mete el li<> a la lista
    }

    
}

function sortearAmigo(){
     if (nombresDeAmigos.length < 2) {
        alert('DEBES AGREGAR AL MENOS 2 AMIGOS 😅 ');
        return; // sale de la función sin hacer el sorteo hasta que se agreguen dos amigos
    }

    let tamañoArreglo = nombresDeAmigos.length;
    numeroDeAmigoSorteado = Math.floor(Math.random()*tamañoArreglo);
    lista.innerHTML = ""; //se limpia la lista antes de mostrar el resultado
    resultado.innerHTML = ` 🎉TU AMIGO SECRETO ES ${nombresDeAmigos[numeroDeAmigoSorteado]} 🎉`;
}