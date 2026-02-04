//imprimir en consola
console.log("Hello world");
console.error("Esto es un error");
console.warn("Esto es una advertencia");


//variables

// no son tipadas
//son dinammicas
let variable = "hola mundo";
console.log(variable); //will print "hola mundo"
variable = 20;
console.log(variable); //will print 20

const constantes = 20;
console.log(constantes);
//constantes = 30; //will give an error
const arreglo = [1,2,3];
arreglo[0] = 10; //this is allowed
console.log(arreglo); //will print [10,2,3]

let variable2 = "otro valor";
console.log(variable2); //will print "otro valor"
variable2 = "nuevo valor";
console.log(variable2); //will print "nuevo valor"

//condicionales
let edad = 18;
if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

//switch
let categoria = "A";
switch (categoria) {
    case "A":
        console.log("Categoria A");
        break;
    case "B":
        console.log("Categoria B");
        break;
    default:
        console.log("Categoria desconocida");
        break;
}

//Ciclos
for (let i = 0; i < 10; i++) {
    console.log("Ciclo for: " + i);
}

let i = 0;
while (i < 10) {
    console.log("Ciclo while: " + i);
    i++;
}
do {
    console.log("Ciclo do while: " + i);
    i++;
} while (i < 10);

//funciones
function suma(a, b) {
    return a + b;
}
console.log("Suma: " + suma(10, 20));