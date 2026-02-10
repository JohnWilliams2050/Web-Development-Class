import { Cancion, listaCanciones } from "./cancion.js";

/*Obtener elementos */
const cancionesContainer = document.querySelector("#song-list-container"); //this can be used like in css where the query selector select songs based on clases or ids and is structured like in css
const PlaylistContainer = document.querySelector("#lista-canciones");
const playlistContainerLeft = document.querySelector(
  "#playlist-container-left"
);



const titulos = document.getElementsByTagName("h2"); //obtiene por tag
/*canciones.innerHTML = "canciones" modifica la seccion con ese tag con lo que le diga despues del =*/

for (const titulo of titulos){
  titulo.innerHTML = titulo.innerHTML.toUpperCase(); //cambia la parte en html con el tag para que los titulos sean capitalized
}

const negrillas = document.getElementsByClassName("negrilla"); //selecting all elements with the class name negrilla
for (const negrilla of negrillas){
  negrilla.style.fontweight = "bold";
}

const tituloPrincipal = document.querySelector("#playlist h2"); //this allows me to be more specific and is better than using the get elements because you can select specific classes and ids like in css
tituloPrincipal.style.textDecoration = "underline";

const modificarAlbum = document.querySelector("#amodificar");
modificarAlbum.src = "./images/album_2.jpg"; //updates the image

const images = document.querySelectorAll(".music-card img");
for(const imagen of imagenes){
  imagen.classList.add("border-radius"); ///adds classes to elements basically
}
function monstrarMensaje(objeto){
  console.log("mensaje");
  console.log(objeto.innerHTML) //to know what I pressed given that it is passing this.id
}
const boton = document.querySelector("#boton_especial");
boton.addEventListener("click", imprimirMensajeJs);

function imprimirMnesjaeJs(evento){
  console.log("mensaje js");
  console.log(evento.target.innerHTML);
}

const tarjetas1 = document.querySelectorAll(".music-card");

//basically lambda functions
for(const tarjeta of tarjetas1){
  tarjeta.addEventListener("mouseenter", (e) =>{
    console.log(e.target);
    e.target.style.background = "gray";
  });

  tarjeta.addEventListener("mouseleave", (e) =>{
    console.log(e.target);
    e.target.style.background = "gray";
  });
}

//traversing the DOM
const tarjetas = document.querySelector("#song-list-container");
console.log(tarjetas.children);
console.log(tarjetas.children[0]);
console.log(tarjetas.children[0].tagName);

const tarjeta1 = tarjetas.children[0];

tarjeta1.firstElementChild.src = "./images/album_2.jpg";

const tarjeta2 = tarjeta1.nextElementSibling;
console.log(tarjeta2);

tarjeta2.firstElementChild.src = "./images/album_3.jpg";






let cancionActual;

//Agregar todas las canciones a la lista
listaCanciones.forEach((cancion) => {
  const elementoCancion = cancion.generarStringHTML();
  cancionesContainer.innerHTML += elementoCancion;
});

//Array para guardar las canciones
// {
//   id: 1,
//   titulo: "Cancion 1",
//   reproduciendo: false,
// }
const playList = [];

const botonesFinal = document.querySelectorAll(".final");

botonesFinal.forEach((boton) => {
  boton.addEventListener("click", () => {
    const tarjeta = boton.parentElement.parentElement;

    const nombreCancion = tarjeta.querySelector(".cancion").textContent;

    // Agregar la cancion al array
    const cancion = {
      idPlaylist: playList.length + 1,
      titulo: nombreCancion,
      reproduciendo: false,
      idCancion: parseInt(boton.dataset.id),
    };
    playList.push(cancion);

    gererarPlaylistHTML();
  });
});

const botonesSiguiente = document.querySelectorAll(".siguiente"); //seleccionar todos los botones
botonesSiguiente.forEach((boton) => {
  boton.addEventListener("click", () => {
    const tarjeta = boton.parentElement.parentElement;

    const nombreCancion = tarjeta.querySelector(".cancion").textContent;

    // Agregar la cancion al array
    const cancion = {
      idPlaylist: playList.length + 1,
      titulo: nombreCancion,
      reproduciendo: false,
      idCancion: parseInt(boton.dataset.id),
    };

    // Buscar la cancion que se esta reproduciendo y agregar la nueva cancion despues
    playList.forEach((cancionPlaylist) => {
      console.log(cancion);
      if (cancionPlaylist.reproduciendo) {
        const index = playList.indexOf(cancionPlaylist);
        console.log("Indice", index);
        playList.splice(index + 1, 0, cancion);
      }
    });

    gererarPlaylistHTML();
  });
});

// Funcion auxiliar para generar la imagen de play o pausa
function generarImagen(cancion) {
  const imagen = document.createElement("img");
  if (cancion.reproduciendo !== true) {
    imagen.src = "./images/boton-de-play.png";
  } else {
    imagen.src = "./images/pause.png";
  }
  imagen.width = "20";
  imagen.style.marginRight = "5px";
  return imagen;
}

function agregarCancionListaHtml(cancion) {
  const elementoLista = document.createElement("li");
  //Si la cancion se está reproduciendo
  if (cancion.reproduciendo) {
    const imagen = generarImagen(cancion);
    elementoLista.appendChild(imagen);
    imagen.addEventListener("click", () => {
      cancion.reproduciendo = false;
      gererarPlaylistHTML();
    });
  } else {
    const imagen = generarImagen(cancion);
    elementoLista.appendChild(imagen);
    imagen.addEventListener("click", () => {
      // Si alguna cancion esta reproduciendo, se debe pausar
      const cancionReproduciendo = playList.find(
        (cancion) => cancion.reproduciendo === true
      );
      if (cancionReproduciendo) {
        cancionReproduciendo.reproduciendo = false;
      }
      cancion.reproduciendo = true;
      cancionActual = listaCanciones.find(
        (cancionLista) => cancionLista.id === cancion.idCancion
      );
      let tarjetaCancionActual = cancionActual.generarStringHTML(false);
      playlistContainerLeft.innerHTML = tarjetaCancionActual;
      gererarPlaylistHTML();
    });
  }
  const texto = document.createElement("span");
  texto.textContent = cancion.titulo;
  texto.classList.add("bigger-text");
  elementoLista.appendChild(texto);
  PlaylistContainer.appendChild(elementoLista);
}

function gererarPlaylistHTML() {
  PlaylistContainer.innerHTML = "";
  for (const cancion of playList) {
    agregarCancionListaHtml(cancion);
  }
}
