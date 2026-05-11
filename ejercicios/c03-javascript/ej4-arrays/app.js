const numeros = [10, 25, 8, 14, 50, 32, 7, 19];

let suma = 0;
let mayor = numeros[0];
let menor = numeros[0];

for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];

    if (numeros[i] > mayor) {
        mayor = numeros[i];
    }

    if (numeros[i] < menor) {
        menor = numeros[i];
    }
}

let promedio = suma / numeros.length;

console.log(`Suma total: ${suma}`);
console.log(`Promedio: ${promedio}`);
console.log(`Número mayor: ${mayor}`);
console.log(`Número menor: ${menor}`);

function generarAsteriscos(n) {
    let resultado = "";

    for (let i = 0; i < n; i++) {
        resultado += "*";
    }

    return resultado;
}

console.log(generarAsteriscos(5));