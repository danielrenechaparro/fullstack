var persona = {nombre: "Pepito", apellido: "Perez"};
var {nombre, apellido} = persona;
console.log(nombre);
console.log(persona.nombre + " " + persona.apellido);
console.log(`${persona.nombre} ${persona.apellido}`);

var funcion = function () {
    return ["175","75"] ;
    };
var [altura,peso] = funcion ();
console.log(`${altura} ${peso}`)