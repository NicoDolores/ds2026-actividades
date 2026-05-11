const inputAltura = document.getElementById("altura");
const boton = document.getElementById("generar");
const resultado = document.getElementById("resultado");
const error = document.getElementById("error");

boton.addEventListener("click", function () {
    const altura = Number(inputAltura.value);

    resultado.textContent = "";
    error.textContent = "";

    if (inputAltura.value === "" || altura < 1) {
        error.textContent = "Ingrese un número válido mayor a 0";
        return;
    }

    let arbol = "";

    for (let i = 1; i <= altura; i++) {
        arbol += "*".repeat(i) + "\n";
    }

    resultado.textContent = arbol;
});