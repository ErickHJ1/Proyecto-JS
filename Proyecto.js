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


uno.onclick = function(e){
    resultado.textContent = resultado.textContent  + "1";
}
dos.onclick = function(e){
    resultado.textContent = resultado.textContent  + "2";
}
tres.onclick = function(e){
    resultado.textContent = resultado.textContent  + "3";
}
cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent  + "4";
}
cinco.onclick = function(e){
    resultado.textContent = resultado.textContent  + "5";
}
seis.onclick = function(e){
    resultado.textContent = resultado.textContent  + "6";
}
siete.onclick = function(e){
    resultado.textContent = resultado.textContent  + "7";
}
ocho.onclick = function(e){
    resultado.textContent = resultado.textContent  + "8";
}
nueve.onclick = function(e){
    resultado.textContent = resultado.textContent  + "9";
}
cero.onclick = function(e){
    resultado.textContent = resultado.textContent  + "0";
}
reset.onclick = function(e){
    resetear();
}
suma.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "+";
    limpiar();
}
resta.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "-";
    limpiar();
}
multiplicacion.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "*";
    limpiar();
}
division.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "/";
    limpiar();
}
igual.onclick = function(e){
    operandob = resultado.textContent;
    resolver(); }
