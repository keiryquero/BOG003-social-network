import {
  collection,
  doc,
  addDoc,
  getDocs,
  setDoc,
  deleteDoc, 
} from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";

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

    
    <section id ="contenedor-publicacion" class = "publicacion">
    <div id = "tarjetas-publicacion" >   segundo plano   
    </div>

    
    </section>
  `;

  contenedor.innerHTML = templatePost; //remplaza
  //contenedorTarjeta.innerHTML =templatePost;

  // se obtiene el formulario dentro el elemnto template
  let formPost = contenedor.querySelector("#formulario-post");
  //let tarjetas = contenedorTarjeta.querySelector("#contenedor-Publicacion");

  formPost.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let nombre = document.querySelector("#nombre-restaurante").value;
    let descripcion = document.querySelector("#datos-restaurante").value;

    //console.log(nombre, descripcion);

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

// Leer la publiación del post

const leerDatos = async () => {
const querySnapshot = await getDocs(collection(db, "publicaciones"));
querySnapshot.forEach((documento) => {
  console.log(documento.data())

  //${doc.data().nombre}
  //console.log(`${doc.id} => ${doc.data()}`);
});

}
//Función para mostrar la publicación
const enlistarTareas= () => db. collection("publicaciones").getDoc();
console.log(enlistarTareas);




// Metodo para borrar un documento creado en firetore

//await deleteDoc(doc(db, "cities", "DC"));
