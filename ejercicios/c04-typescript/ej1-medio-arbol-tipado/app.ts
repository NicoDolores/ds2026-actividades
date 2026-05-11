const inputAltura = document.getElementById("altura") as HTMLInputElement;
const boton = document.getElementById("generar") as HTMLButtonElement;
const resultado = document.getElementById("resultado") as HTMLPreElement;

function generarAsteriscos(cantidad: number): string {

    let resultado: string = "";

    for (let i = 0; i < cantidad; i++) {

        resultado += "*";

    }

    return resultado;
}

boton.addEventListener("click", () => {

    const altura: number = Number(inputAltura.value);

    let salida: string = "";

    for (let i = 1; i <= altura; i++) {
        salida += generarAsteriscos(i) + "\n";
    }

    resultado.textContent = salida;

});