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

//strings
let curso =  "curso de javascript";
let profesor = "Juan Perez";

//largo del string
console.log("Largo del string curso: " + curso.length);

//indice de un substring
console.log("Indice de 'javascript': " + curso.indexOf("javascript"));

//si existe una subcadena
console.log("Incluye 'de': " + curso.includes("de"));

let frase = curso + " de " + profesor;
console.log(frase);
frase = curso.concat(" de ", profesor);
console.log(frase);
console.log(curso, "de", profesor);

//template literals
console.log(`${curso} de ${profesor}`);

//trim
let stringConEspacios = "   Hola mundo   ";
console.log(stringConEspacios);
console.log(stringConEspacios.trim());

//remplac3e
console.log(frase.replace("javascript", "JS"));


//mayusculas y minusculas
console.log(curso.toUpperCase());
console.log(curso.toLowerCase());
//letra en una posicion
console.log(frase.charAt(0));

//substrings
console.log(curso.substring(0, 5));

//split
let array = frase.split(" ");
console.log(array);

//////Numeros
let numero = 20;
let decimal = 20.5;
console.log(typeof numero);
console.log(typeof decimal);

//libreria math
console.log(Math.round(10.5)); //redondear
console.log(Math.ceil(10.1)); //redondear hacia arriba
console.log(Math.floor(10.9)); //redondear hacia abajo
console.log(Math.random()); //numero aleatorio entre 0 y 1
console.log(Math.max(10, 20, 30)); //maximo
console.log(Math.min(10, 20, 30)); //minimo

console.log(Math.sqrt(16)); //raiz cuadrada
console.log(Math.pow(2, 3)); //potencia

console.log(Math.floor(Math.random() * 100) + 1); //numero aleatorio entre 1 y 100

console.log(Number.parseInt("20")); //convertir string a entero
console.log(Number.parseFloat("20.5")); //convertir string a float
console.log(Number.isInteger(20)); //verificar si es entero
console.log((Number.parseInt("hola"))); //verificar si no es un numero

console.log(Number.parseInt("abc")); //convertir string a entero hasta que encuentra un caracter no numerico
let indefinido;
console.log(indefinido); //undefined
indefinido = null;
console.log(indefinido); //null diferencia entre null y undefined

//la dif entre == y ===
console.log(10 == "10"); //true
console.log(10 === "10"); //false
console.log(null == undefined); //true
console.log(null === undefined); //false

//arrays
let arreglo1 = [1, 2, 3, 4, 5];
console.log(arreglo1);
let arregloMixto = [1, "dos", true, null, undefined, [1,2,3]];
console.log(arregloMixto);

//matrices
const numeros = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(numeros);
console.log(numeros[0][0]); //1
console.table(numeros);

//agragar algo al final
const meses = ["Enero", "Febrero", "Marzo"];
meses.push("Abril");
console.log(meses);

//agregar algo al inicio
meses.unshift("Mes 0");
console.log(meses);

//eliminar el ultimo elemento
meses.pop();
console.log(meses);

//eliminar el primer elemento
meses.shift();
console.log(meses);

//splice para eliminar o agregar en una posicion especifica
let algunosMeses = meses.splice(1, 1); //elimina 1 elemento en la posicion 1
console.log(algunosMeses);
console.log(meses);


//concat
let pares = [2,4,6,8];
let impares = [1,3,5,7,9];
let todos = pares.concat(impares);
console.log(todos);

//frma declarativa
let todos2 = [...pares, ...impares]; //spread operator
console.log(todos2);

//for each
todos.forEach(function(numero) {
    console.log("Numero: " + numero);
});

//map
todos.map(function(numero) {
    console.log("Numero map: " + numero);
});

//for of y for in
for (let elemento of todos) {
    console.log("Elemento for of: " + elemento);
}


for (let elemento in todos) {
    console.log("Elemento for in: " + todos[elemento]);
}

