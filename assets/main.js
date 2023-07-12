//  Ejercicio 1
function imprimirPar(number){
    if (number % 2 === 0 ) {
        console.log(number)
    }
    else {
        console.log('El número es Impar')
    }
}

//  Ejercicio 2
function numeroMayor(num1, num2) {
    if (num1 > num2) {
        console.log(`El numero ${num1} es mayor que el numero ${num2}`);
    }
    else if (num1 == num2) {
        console.log(`Los numeros son iguales`);

    } else {
        console.log(`El numero ${num2} es mayor que el numero ${num1}`);
    }
}

//  Ejercicio 3
function multiploDe5(number) {
    const esMultiplo = number % 5 === 0
    if (esMultiplo) {
        console.log(`Es multiplo de 5`);
    } else {
        console.log("No es multiplo de 5");
    }
}

//  Ejercicio 4
function imprimeNumeros(number) {
    for (let i = 0; i <= number; i++) {
        console.log(i);
    }
}

//  Ejercicio 5
function palabraNumero(string, number) {
    for (let i = 1; i <= number; i++) {
        console.log(i + '' + string);
    }
}

//  Ejercicio 6
let Numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function cincoAfuera(array) {
    for (let i = 0; i <= array.length; i++) {
        if (i == 5)
            continue;
        console.log(i);
    }
}

//  Ejercicio 7
function todoslosArrayMenos5(array) {
    for (let i = 0; i <array.length; i++) {
        if (i !== 4) {
            console.log (array[i])
        }
    }
} 
const Sin5ta = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//  Ejercicio 8
function arrayMultiplicado(array, number) {
    for (let i = 0; i < array.length; i++) {
        console.log (array[i] * number);
    }
}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const number = 10;


