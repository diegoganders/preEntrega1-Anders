
const calcularIVA = (precioUnitario) => {
    if (!isNaN(precioUnitario)) {
        return precioUnitario * 1.21;
    } else {
        return 0;
    }
}

const select = () => {
    let valor = parseInt(prompt("Ingresa un producto dentro de la lista a comprar:"));
    if (!isNaN(valor)) {
        switch (valor) {
            case 1:
                valor = 12000;
                alert("El precio + el IVA es: $" + calcularIVA(valor));

                break;
            case 2:
                valor = 8000;
                alert("El precio + el IVA es: $" + calcularIVA(valor));

                break;
            case 3:
                valor = 23000;
                alert("El precio + el IVA es: $" + calcularIVA(valor));

                break;
            default:
                alert("El producto seleccionado no se encuentra disponible.");
        }
    } else {
        alert("El precio ingresado no es valido.");
    }

    for (let i = 3; i >= 1; i--) {
        let text = "La página se cerrará en " + i + "<br> <br> <br> ";
        document.write(text)

    }
}