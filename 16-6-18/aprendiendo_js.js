// Operadores aritmeticos: +, -, *, /
// Operadores relacionales: ==, !=, <, >, <=, >=
// Operadores Logicos: and, or, not. &&, ||, !

//var cadena = prompt("Escriba algo");
//alert(cadena);
//var arreglo = []; // Listas, arreglos. tambien se puede: var arreglo = new Array()
//arreglo[0] = "Tomas";
//arreglo[1] = 1;
// arreglo.push("dato nuevo"); // metodo push, inserta datos en la lista
//tam = arreglo.length; // tamaño del arreglo
//console.log(arreglo); // Escribe eb el log
//document.write("<h1>Hola mundo cruel</h1>")
/* 
if(arreglo[1] === 1){ // == igual a, === exactamente igual a
    alert("Si es uno");
}else if(arreglo[0] == 2){
    alert("Funciono");
}else{
    alert("No es igual");
}
var numero = parseInt("1"); // convierte la cadena a entero
parseFloat("1.2"); // Convierte la cadena a numero real

switch(numero){
    case 1:
        alert("es uno");
        break;
    case "uno":
        alert("es texto");
        break;
    default:
        alert("No es conocido");
        break;
}

for(var cont=0; cont<10; cont++){
    document.write("<li>"+cont+"</li>");
}
var cont = 0;
while(cont < 10){
    document.write("Hola");
    cont ++;
}

do{
    document.write("Hola");
    cont ++;
}while(cont < 10);

function sumar(a,b){
    return a+b;
}
alert("La suma es: "+sumar(2,3));
*/

/* Comentario multilinea
cont = 0;
setInterval(
    function(){
        document.write("Llamada: "+ cont);
        cont ++;
    },
    2
); // Funcion que permite repetir cada x miliseg una funcion o porcion de codigo
*/ 
function capturar_valor(){
    alert(document.getElementById("campo_entrada").value);
}

function mostrar_mensaje(msj){
    alert(msj);
}

function cambiar_color(color){
    document.getElementById("caja_colores").style.background = color;
}

function permitir_cancelar(){
    var respuesta = confirm("Desea permitirlo?");
    return respuesta;
}

function cambiar_clase(){
    var estilo = document.getElementById("caja_estilos");
    if (estilo.className == "estilo_negro"){
        estilo.className = "estilo_amarillo";
    }else{
        estilo.className = "estilo_negro";
    }
}