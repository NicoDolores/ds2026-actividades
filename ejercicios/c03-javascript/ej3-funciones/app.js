function calcularPrecioFinal(monto, medioPago) {
    let descuento = 0;

    if (monto < 200) {
        descuento = 0;
    } else if (monto >= 200 && monto <= 400) {
        if (medioPago === "E") {
            descuento = 0.30;
        } else if (medioPago === "D") {
            descuento = 0.20;
        } else if (medioPago === "C") {
            descuento = 0.10;
        }
    } else {
        descuento = 0.40;
    }

    let precioFinal = monto - (monto * descuento);

    return precioFinal;
}

console.log(`Monto: $150 | Pago: E | Final: $${calcularPrecioFinal(150, "E")}`);
console.log(`Monto: $300 | Pago: E | Final: $${calcularPrecioFinal(300, "E")}`);
console.log(`Monto: $300 | Pago: D | Final: $${calcularPrecioFinal(300, "D")}`);
console.log(`Monto: $300 | Pago: C | Final: $${calcularPrecioFinal(300, "C")}`);
console.log(`Monto: $500 | Pago: E | Final: $${calcularPrecioFinal(500, "E")}`);