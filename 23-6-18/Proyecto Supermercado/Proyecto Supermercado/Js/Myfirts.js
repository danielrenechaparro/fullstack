/*var nombre = "Juan Camilo";
var edad = 50;
var peso = 75.5;
var estadoCivil = true;
var datos = [nombre, edad, peso, estadoCivil];
datos.push("adicional");
var dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];

console.log(datos);
console.log(nombre);
console.log(edad);
console.log(peso);
console.log(estadoCivil);

console.log(datos[0]);
for (i in dias) {
    console.log(dias[i]);
}

if (edad < 40) {
    console.log("persona  joven");
} else
    console.log("persona Adulta");

//var x = document.getElementsByTagName("p");
//console.log(x);

function suma() {

    var x = document.getElementById("num1");
    var y = document.getElementById("num2");

    alert(x + "" + y);

    var result = parseInt(x) + parseInt(y);
    alert("la suma es " + result);
}*/

/*var x = parseInt(prompt("digite el valor del primer producto"));
var y = parseInt(prompt("digite el valor del segundo producto"));
alert("la suma de los productos es " + suma(x, y));
alert("el iva del producto uno es " + ivaUni(x))
alert("el iva del producto dos es " + ivaUni(y))
alert("el valor del iva total de los productos es:" + ivaTotal(x, y))

function suma(x, y) {
    var result = x + y;
    return result;
}

function ivaUni(x) {
    var result = x * 0.19;
    return result;
}

function ivaTotal(x, y) {
    var ivaTotal = (x * 0.19) + (y * 0.19)
    return ivaTotal
}*/

function cambiar() {
    document.getElementById("frutas").innerHTML = "HOLA BB"
    document.getElementById("Manzana").src = "imagenes/Banano.jpg"
    document.getElementsByTagName("width")
}