let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let listaGenerica = ['JavaScript', 'C', 'Kotlin', 'Python'];
let summy = [90, 4, 6, 2000, 100, 600, 5, 4, 900, 10, 20];
let donatil = [90, 4, 6, 2000, 100, 600, 5, 4, 900, 10, 20];
listaGenerica.push('Java');
listaGenerica.push('Ruby');
listaGenerica.push("GoLang");

/*
function showList(lista) {
    return console.log(lista);
}
showList(listaGenerica);

function reverseShowList(lista) {
    return console.log(lista.reverse());
}
reverseShowList(listaGenerica);
let sum = 0;
function averageElements(lista) {
    for (i = 0; i < lista.length; i++) {
        sum += lista[i];
    }
    let avg = Math.round(sum/lista.length);
    return console.log(avg);
}
averageElements(summy);

function largestNumNSmallest(lista){
    let max = lista[0];
    let i;
    for (i = 1; i < lista.length; i++) {
             max = lista[i];
           return console.log(max);
        }
   }
}
function largestNumNSmallest(lista) {
    let i;
   }
 if (lista.includes(donati)) {
    return console.log(lista.indexOf(donati))
 } else {
        return console.log(-1)
      
    for (let i = 0; i < lista.length; i++) {
           gilbert = lista[i]*lista[i];
           console.log(gilbert);
    }
   
       const mulArrays = (summy, donatil) => {
        return summy.map((e, index) => e * donatil[index]);
    }
    
    console.log(mulArrays(summy, donatil));
        
      //};
        
       
      }
    }
        return console.log(Math.min(...lista)); 
           
    }
largestNumNSmallest(summy);
*/
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function intentoDeUsuario() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroSecreto === numeroDeUsuario) {
        asignarTextoElemento('p', `Acertaste el numero en ${(intentos === 1) ? 'el primer intento!' : `${intentos} intentos`}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acerto, ese mierda
        if (numeroSecreto > numeroDeUsuario) {
            asignarTextoElemento('p', 'El numero Secreto es mayor!');
        } else {
                asignarTextoElemento('p', 'El numero Secreto es menor!');
            }
        intentos++;
        limpiarCaja();
    }
    return;
}


function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}

function numeroAleatorio() {

    let numeroNuevo = Math.floor(Math.random()*numeroMaximo)+1;
 
   // console.log(numeroNuevo);
    //console.log(listaNumerosSorteados);
    if(listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles!');
    }
        else {

            if (listaNumerosSorteados.includes(numeroNuevo)) {
                return numeroAleatorio();
            }
                else {
                listaNumerosSorteados.push(numeroNuevo);
                return numeroNuevo;
            }
        }
}   

function condicionesIniciales() {

    asignarTextoElemento('h1', 'Juego del Numero Secreto!'); 
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = numeroAleatorio();
    intentos = 1;
}

function reiniciarJuego() {

//limpiar caja
limpiarCaja();
//Indicar mensaje de intervalo de numeros
condicionesIniciales();
//Generar el numero aleatorio
//Deshabilitar el boton de nuevo juego
document.querySelector('#reiniciar').setAttribute('disabled', 'true');
//Inicializar el numero de intentos
}

condicionesIniciales();
