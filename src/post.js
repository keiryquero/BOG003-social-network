import {
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";
//import { app } from "./main.js";
import db from "./main.js";

export const post = () => {
  //se crea un elemento tipo template para insertarle el texto de la plantilla
  let contenedor = document.createElement("div");
  //let contenedorTarjeta = document.createElement("div");

  const templatePost = `
    <section id ="contenedor-post" class = "contenedor-post">
    <form id = "formulario-post">
    <div class = "Formgrupo">        
      <input type = "text" id = "nombre-restaurante" placeholder="Nombre del Restaurante">
    </div>

    <div class = "formgrupo">
      <textarea id ="datos-restaurante" rows="8" class = "datos-restaurante" 
      placeholder="Describe los datos: Costo, horario y ubicación"></textarea>
    </div>

    <button id="btn-publicar" type="submit">PUBLICAR</button
    </form>
    </section>

    
    <section id ="contenedor-Publicacion" class = "publicacion">
    
    
    
    </section>
  `;

  contenedor.innerHTML = templatePost; //reemplaza

  // se obtiene el formulario dentro el elemnto template
  let formPost = contenedor.querySelector("#formulario-post");

  formPost.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let nombre = document.querySelector("#nombre-restaurante");
    let descripcion = document.querySelector("#datos-restaurante");

    //console.log(nombre, descripcion);

    crearPost(nombre.value, descripcion.value)
      .then(() => {
        console.log("publicación exitosa");
        formPost.reset();
        nombre.focus();
      })
      .catch(() => {
        console.log("ocurrio un error");
      });
  });

  let btnPublicar = contenedor.querySelector("#btn-publicar");
  btnPublicar.addEventListener("click", (evento) => {
    leerDatos();
    //console.log("botón publicar")
  });

  return contenedor;
};

// Agregar una colección
const crearPost = async (nombre, descripcion) => {
  try {
    let docRef = await addDoc(collection(db, "publicaciones"), {
      nombreRestaurante: nombre,
      descripcion: descripcion,
      fecha: new Date(),
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

window.addEventListener("DOMContentLoaded", (e) => {
  leerDatos();
});

// Leer  la publiacción del post

const leerDatos = async () => {
  const querySnapshot = await getDocs(collection(db, "publicaciones"));

  querySnapshot.forEach((documento) => {
    //console.log(documento.data());
    mostrarPost(documento.data());
    //console.log(`${doc.id} => ${doc.data()}`);
  });
};
//Crear Div para mostrar historial de posts
const mostrarPost = (post) => {
  //document.getElementById("postTarjeta").innerHTML= "";
  let tarjetas = document.querySelector("#contenedor-Publicacion");

  const postTarjeta = document.createElement("div");
  postTarjeta.classList.add("postTarjeta");
  postTarjeta.dataset.id = "123";
  postTarjeta.className = "tarjetas-publicacion";
  postTarjeta.innerHTML = `<p>${post.descripcion}</p> `;
  tarjetas.appendChild(postTarjeta);
};

// Metodo para borrar un documento creado en firetore

//await deleteDoc(doc(db, "cities", "DC"));
