////////////////
// OBJETOS/////
//////////////

// 1. Object literals
const estudiate = {
    nombre: "Ana",
    edad: 22,
    apellido: "Perex",
}

console.log(estudiate.nombre); // Ana
console.log(estudiate["edad"]); // 22

//permitir agregar y eliminar propiedades
estudiante.carrera = "Ingenieria";
console.log(estudiate);
delete estudiante.carrera;
console.log(estudiate);

console.log("El estudiante es: " + estudiante.nombre + " " + estudiante.apellido + " y tiene " + estudiante.edad + " años.");


//Destructuring
const {nombre, edad} = estudiante; //extraer propiedades a variables
console.log("El estudiante es: " + nombre + " y tiene " + edad + " años.");

//objetos anidados
const persona = {
    nombre: "Luis",
    direccion: {
        ciudad: "Madrid",
        pais: "España"
    },
    hobbies: ["futbol", "musica", "cine"]
};

console.log(persona.direccion.ciudad); // Madrid

persona.edad = 30; //agregar nueva propiedad
console.log(persona);

//metodos o functiones
const alumno = {
    nombre: "Carlos",
    edad: 20,
    saludar: function() {
        console.log("Hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " años.");
    },
};
alumno.saludar();

function Estudiate(nombre, edad, apellido) {
    this.nombre = nombre;
    this.edad = edad;
    this.apellido = apellido;
    this.saludar = function() {
        console.log("Hola, mi nombre es " + this.nombre + " " + this.apellido + " y tengo " + this.edad + " años.");
    };
}

const estudiante1 = new Estudiate("Marta", 21, "Lopez");
console.log(estudiante1);
estudiante1.saludar();

console.log(Object.keys(estudiante1)); // ["nombre", "edad", "apellido", "saludar"]
console.log(Object.values(estudiante1)); // ["Marta", 21, "Lopez", function]
console.log(Object.entries(estudiante1)); // [["nombre", "Marta"], ["edad", 21], ["apellido", "Lopez"], ["saludar", function]]

///////////////////////
//// Array Methods////
///////////////////////

const estudiantes = [
    {nombre: "Ana", edad: 22},
    {nombre: "Luis", edad: 19},
    {nombre: "Marta", edad: 21},
    {nombre: "Carlos", edad: 20},
];

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

//below are some useful array methods
let encontrado = meses.includes("Marzo"); //true
console.log("Marzo esta en el array meses? " + encontrado);
//includes works for arrays of primitives
encontrado = estudiantes.find( estudiante => estudiante.edad === 20); //{nombre: "Carlos", edad: 20}
console.log("Estudiante con edad 20: ", encontrado);
//find works for arrays of objects
encontrado = estudiantes.some(function (estudiante){
    return estudiante.edad > 30;
});
//false
console.log("Hay algun estudiante mayor de 30? " + encontrado); //false
//some checks if at least one element meets the condition
encontrado = estudiantes.indexOf("Marzo"); //2
console.log("Indice de Marzo en meses: " + encontrado);
//indexOf works for arrays of primitives
encontrado = estudiantes.findIndex( estudiante => estudiante.nombre === "Marta"); //2
console.log("Indice de Marta en estudiantes: " + encontrado);
//findIndex works for arrays of objects


const total = estudiantes.reduce( (acumulador, estudiante) => acumulador + estudiante.edad, 0); //82
//the second parameter 0 is the initial value of the accumulator
console.log("Suma de edades de estudiantes: " + total);

const mayores = estudiantes.filter( estudiante => estudiante.edad > 30);
console.log("Estudiantes mayores de 30: ", mayores); //[]

let resultado = estudiantes.filter( estudiante => estudiante.nombre !== "Carlos");
console.log("Estudiantes sin Carlos: ", resultado);

resultado = estudiantes.find( estudiante => estudiante.edad > 20);
console.log("Estudiante Ana: ", resultado);

/////////////////
////prototipos////
/////////////////

function Perro(nombre, raza, edad) {
    this.nombre = nombre;
    this.raza = raza;
    this.edad = edad;
    this.saludar = function() {
        console.log("Guau! Mi nombre es " + this.nombre + ", soy un " + this.raza + " y tengo " + this.edad + " años.");
    };
};

const perro1 = new Perro("Fido", "Labrador", 5);
console.log(perro1);
perro1.saludar();

function Gato(nombre, raza, edad){
    this.nombre = nombre;
    this.raza = raza;
    this.edad = edad;
}

//use this when it is not necessary to have the function every time it creates an instance of the object
Gato.prototype.saludar = function (){
    console.log('Hola, mi nombre es ${this.nombre}');
};

const gato1 = new Gato("Miau", "Persa", 3);
console.log(gato1);
gato1.saludar();

function Gatito(nombre, raza, edad, color){
    Gato.call(this,nombre, raza, edad);
    this.color;
}

const gatito1 = new Gatito("Miau", "Persa", 3, "Negro");
console.log(gatito1);

Gatito.prototype = Object.create(Gato.prototype);

const gatito2 = new Gatito("Miau", "Persa", 3, "Negro");
console.log(gatito2);

////////////////////
/////Clases/////////
////////////////////

class Empleado{
    constructor(nombre, apellido, salario){
        this.nombre = nombre;
        this.apellido = apellido;
        this.saalario = salario;
    }

    saludar(){
        console.log('Hola, mi nombre es ${this.nombre} ${this.apellido}');
    }

    static bievenido(){
        console.log("Bienvenido al curso de JavaScript");
    }
}

const empleado = new Empleado("Juan", "Perez", 5000);
console.log(empleado);
empleado.saludar();
Empleado.bienvenido();

//this is herencia
class Desarrolador extends Empleado{
    constructor(nombre, apellido, salario, lenguaje){
        super(nombre, apellido, salario);
        this.lenguaje = lenguaje;
    }

    static bienvenido(){
        console.log("Bienvenido al curso")
    }
}

const desarrollador = new Desarrollador("Juan", "Perex", 5000, "Javascript");
console.log(desarrollador);
desarrollador.saludar();
Desarrollador.bienvenido();

//Encapsulamiento
class Trabajador{
    #nombre
    #apellido
    #salario;

    constructor(nombre, apellido, salario){
        this.#nombre =  nombre;
        this.#apellido = apellido;
        this.#salario = salario;
    }

    saludar(){
        console.log('Hola, mi nombre es ${this.nombre} ${this.apellido}');
    }
    get nombre(){
        return this.#nombre;
    }

    set nombre(nuevoNombre){
        this.#nombre = nuevoNombre;
    }
}

const trabajador =  new Trabajador("Juan", "Perex", 5000);
console.log(trabajador);
trabajador.saludar();

//console.log(trabajador.#salario)

trabajador.nombre = "Predo";
console.log(trabajador);
console.log(trabajador.nombre);