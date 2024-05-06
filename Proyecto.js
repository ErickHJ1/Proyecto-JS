function calcularPropina() {
    var totalCompra = document.getElementById('cuenta').value;
    var porcentajePropina = document.getElementById('propina').value;
    var totalPersonas = document.getElementById('personas').value;

    var porcentaje = porcentajePropina/100;
    var resultado1 = totalCompra*porcentaje;
    var resultado2 = resultado1/totalPersonas

    if (totalCompra == "") {
        document.getElementById('r3').innerHTML = "Introduzca los datos"
        document.getElementById('r1').innerHTML = ":'v"
        document.getElementById('r2').innerHTML = ":'v"
    }

    else {
        document.getElementById('r1').innerHTML = resultado1.toFixed(2);
        document.getElementById('r2').innerHTML = resultado2.toFixed(2)
    }
}

