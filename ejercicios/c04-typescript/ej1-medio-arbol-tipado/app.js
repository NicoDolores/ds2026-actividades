var inputAltura = document.getElementById("altura");
var boton = document.getElementById("generar");
var resultado = document.getElementById("resultado");
function generarAsteriscos(cantidad) {
    var resultado = "";
    for (var i = 0; i < cantidad; i++) {
        resultado += "*";
    }
    return resultado;
}
boton.addEventListener("click", function () {
    var altura = Number(inputAltura.value);
    var salida = "";
    for (var i = 1; i <= altura; i++) {
        salida += generarAsteriscos(i) + "\n";
    }
    resultado.textContent = salida;
});
