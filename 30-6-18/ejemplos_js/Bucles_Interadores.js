var arreglo = [0,1,2,3,4,5,6,7,8,9,10];
var condicion = 0;

//decrementando
for (i = (arreglo.length - 1); i > 0 && condicion == 0; i--){
    console.log (i);
    if (i == 5)
        condicion = 1;
}
condicion = 0;
// incrementando
for (i = 0; i < arreglo.length && condicion == 0; i++){
    console.log (arreglo[(arreglo.length - 1) - i]);
    if (i == 5)
        condicion = 1;
} 