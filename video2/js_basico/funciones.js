//clasica
function sumar(a,b){
    return a + b;

}
console.log("Suma clasica: " + sumar(5,10));

//linea 1000
function restar(a,b){
    return a - b;
}

console.log("Resta clasica: " + restar(10,5));

const multiplicar = function(a,b){
    return a * b;
}
console.log("Multiplicacion funcion anonima: " + multiplicar(5,10));

//funcion parametro de otra function
function operar(a,b, operacion){
    return operacion(a,b);
}

console.log("Operacion suma: " + operar(10,5,sumar));
console.log("Operacion resta: " + operar(10,5,restar));
console.log("Operacion multiplicacion: " + operar(10,5,multiplicar));

//funcion anonima como parametro
let resultado = operar(20,10, function(a,b){
    return a / b;
});

console.log("Operacion division funcion anonima: " + resultado);

//funcion flecha (arrow function) this is a shorter syntax
const dividir = (a,b) => {
    return a / b;
}

console.log("Division funcion flecha: " + dividir(20,5));

const potencia = (a,b) => a ** b; //if only one expression, return is implicit

console.log("Potencia funcion flecha: " + potencia(2,3));

resultado = operar(3,4, (a,b) => a + b); //arrow function as parameter