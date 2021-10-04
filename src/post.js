/*import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import {
  getFirestore,
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";*/
import {
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";
//import { app } from "./main.js";
import db from "./main.js";
/*const firebaseConfig = {
  apiKey: "AIzaSyDGmKzcSHyRp56lPmYE9r4hCsHnT0jeR_Y",
  authDomain: "social-network-1c5d2.firebaseapp.com",
  projectId: "social-network-1c5d2",
  storageBucket: "social-network-1c5d2.appspot.com",
  messagingSenderId: "514107260716",
  appId: "1:514107260716:web:77ff03537478a07489b689",
  measurementId: "G-3GHVJ77MJ3",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);*/

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

    
    <section id ="contenedor-Publicacion" class = "contenedor-post">
    <div id = "tarjetas-publicacion" background: #98DBC6;>      
    </div>

    
    </section>
  `;

  contenedor.innerHTML = templatePost; //remplaza
  //contenedorTarjeta.innerHTML =templatePost;

  // se obtiene el formulario dentro el elemnto template
  let formPost = contenedor.querySelector("#formulario-post");
  let tarjetas = contenedorTarjeta.querySelector("#contenedor-Publicacion");

  formPost.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let nombre = document.querySelector("#nombre-restaurante").value;
    let descripcion = document.querySelector("#datos-restaurante").value;

    console.log(nombre, descripcion);

     crearPost(nombre, descripcion)
      .then(() => {
        console.log("publicación exitosa");
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
const crearPost = async (nombre, descripcion) =>{
  
 try {
  let docRef = await addDoc(collection(db, "publicaciones"), {
    nombreRestaurante: nombre,
    descripcion: descripcion,
    fecha: 2021,
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
}

// Leer y mostrar la publiacción del post

const leerDatos = async () => {
const querySnapshot = await getDocs(collection(db, "publicaciones"));
querySnapshot.forEach((documento) => {
  console.log(documento.data())

  //${doc.data().nombre}
  //console.log(`${doc.id} => ${doc.data()}`);
});


}