import {
  doc,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  setDoc,
  deleteDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";

import { db } from "../app.js";
import { obtenerUsuarioActual } from "../auth.js";


export const post = () => {
  //se crea un elemento tipo template para insertarle el texto de la plantilla
  let contenedor = document.createElement("div");
  //let contenedorTarjeta = document.createElement("div");

  const templatePost = `
  <div class="tarjeta sombra">
    <div class="tarjeta-encabezado">
        <h2>Nuevo post</h2>
    </div>
    <div class="tarjeta-cuerpo">
        <form action="" id="formCrearPost"class="formulario">
        <table>
            <tbody>
                <tr>
                    <td>
                        <strong style="margin: 0px 5px">
                            Nombre del restaurante:
                        </strong>
                    </td>   
                    <td><input id="nombre_restaurante" type="text"></td>
                </tr>
                <tr>
                    <td>
                        <strong style="margin: 0px 5px">
                            Horarios:
                        </strong>
                    </td>   
                    <td>
                        <input id="horario_ini_restaurante" type="time">
                        <input id="horario_fin_restaurante" type="time">
                    </td>
                </tr>
                <tr>
                    <td>
                        <strong style="margin: 0px 5px">
                            Costo:
                        </strong>
                    </td>   
                    <td><input id="costo_restaurante" type="number"></td>
                </tr>
                <tr>
                    <td>
                        <strong style="margin: 0px 5px">
                            Ubicación:
                        </strong>
                    </td>   
                    <td><input id="ubicacion_restaurante" type="text"></td>
                </tr>
                <tr>
                    <td>
                        <strong style="margin: 0px 5px">
                            Descripción:
                        </strong>
                    </td>
                    <td>
                        <textarea name="" id="datos_restaurante" cols="30" rows="10"></textarea>
                    </td>
                </tr>
            </tbody>
        </table>
    </form>
    </div>
    <div class="tarjeta-acciones">
                <button type="submit" form="formCrearPost" class="boton boton-primario">
            <i class="bi bi-plus-circle"></i>
            Crear
        </button>
        <button type="button" form="formCrearPost" class="boton boton-primario btn-guardar">
            <i class="bi bi-plus-circle"></i>
           Editar vista
        </button>
    </div>
  </div>
  
  <div class = "tarjeta-acciones" id ="contenedorPublicacion"></div>
  `;

  contenedor.innerHTML = templatePost; //reemplaza-mete el template

  // se obtiene el formulario dentro el elemnto template
  let formPost = contenedor.querySelector("#formCrearPost");

  formPost.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let nombre = document.querySelector("#nombre_restaurante").value;
    let horaIni = document.querySelector("#horario_ini_restaurante").value;
    let horaFin = document.querySelector("#horario_fin_restaurante").value;
    let costo = document.querySelector("#costo_restaurante").value;
    let ubicacion = document.querySelector("#ubicacion_restaurante").value;
    let descripcion = document.querySelector("#datos_restaurante").value;

    //console.log(nombre, descripcion);

    crearPost(nombre, horaIni, horaFin, costo, ubicacion, descripcion)
      .then((data) => {
        console.log(data);
        console.log("publicación exitosa");
        formPost.reset();
        leerDatos();
      })
      .catch((error) => {
        console.log(error);
        console.log("ocurrio un error");
      });
  });

  // let btnPublicar = contenedor.querySelector("#btn-publicar");
  // btnPublicar.addEventListener("click", (evento) => {
  //   leerDatos();
  //   //console.log("botón publicar")
  // });

  return contenedor;
};

// Agregar una colección en firebase (crea los datos)
const crearPost = async (
  nombre,
  horaIni,
  horaFin,
  costo,
  ubicacion,
  descripcion
) => {
  return new Promise((resolve, reject) => {
    console.log("me estoy creando");
    addDoc(collection(db, "publicaciones"), {
      nombre: nombre,
      horaIni: horaIni,
      horaFin: horaFin,
      costo: costo,
      ubicacion: ubicacion,
      descripcion: descripcion,
      userId: obtenerUsuarioActual().uid,
      userName: obtenerUsuarioActual().displayName,
      fecha: new Date(),
    })
      .then((data) => {
        console.log("Document written with ID: ", data.id);
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

window.addEventListener("DOMContentLoaded", (e) => {
  leerDatos();
});

// Leer  la publiacción del post

const leerDatos = async () => {
  const querySnapshot = await getDocs(collection(db, "publicaciones"));
  document.getElementById("contenedorPublicacion").innerHTML= "";
  querySnapshot.forEach((documento) => {
    //console.log(documento.data());
    mostrarPost(documento.data(), documento.id);
    //console.log(`${doc.id} => ${doc.data()}`);
  });
};

//Crear Div para mostrar historial de posts
export const mostrarPost = (post, id) => {
  
  let tarjetas = document.querySelector("#contenedorPublicacion");
  const postTarjeta = document.createElement("div");
  postTarjeta.dataset.id = id;
  postTarjeta.className = "tarjetas-publicacion";
  postTarjeta.innerHTML = `<h2>${post.nombre}</h2>
    <p>${post.horaIni} a
    ${post.horaFin}</p>
    <p>${post.costo}<br>
    ${post.ubicacion}</p> 
    <p>${post.descripcion}</p> 
    <button class="boton boton-plano" >
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        class="bi bi-hand-thumbs-up"
        viewBox="0 0 16 16"
    >
        <path
            d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"
        />
    </svg>
</button>
<button class="boton boton-plano editar"  data-id= "${id}" data-descripcion = "${post.descripcion}">
    <svg 
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        class="bi bi-pencil-square"
        viewBox="0 0 16 16"
    >
        <path 
            d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
        />
        <path
            fill-rule="evenodd"
            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
        />
    </svg>
</button>
<button class="boton boton-plano borrar"  data-id= "${id}" >
<svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      class="bi bi-trash"
      viewBox="0 0 16 16"
  >
  <path
  d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
  />
  <path
  fill-rule="evenodd"
  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
  />
  </svg>  
</button>
            
    `;
  tarjetas.appendChild(postTarjeta);
//Boton Eliminar
  let btnBorrar = postTarjeta.querySelectorAll(".borrar");
  btnBorrar.forEach((btn) => {
    btn.addEventListener("click", (evento) => {
      const id = evento.currentTarget.getAttribute("data-id");
      //console.log(evento.target.getAttribute("data-id"));
      borrarPost(id);
    });
  });
  //Boton Editar
  let btnEditar = postTarjeta.querySelectorAll(".editar");
  btnEditar.forEach((btn) => {
    btn.addEventListener("click", (evento) => {
      
     //console.log(evento);
     const id = evento.currentTarget.getAttribute("data-id");
     const dataDescripcion = evento.currentTarget.getAttribute("data-descripcion");
     console.log(id,dataDescripcion);
      editar(id,dataDescripcion);
    });
  });
};

// Metodo para borrar un documento creado en firestore
const borrarPost = async (id) => {
  await deleteDoc(doc(db, "publicaciones", id));
  console.log(id);
};

// Metodo para editar un documento creado en firestore
  const editar = async (id, dataDescripcion) => {
  const btnGuardar = document.querySelector(".btn-guardar");
  btnGuardar.style.display = "block";
  let formPost = document.querySelector("#formCrearPost");
  let descripcion = document.querySelector("#datos_restaurante");
  descripcion.value = dataDescripcion;

  let btnGuardarCambios = document.querySelector(".btn-guardar");
  btnGuardarCambios.addEventListener("click", (evento) =>{
    console.log("hola", id);
    actualizar(id,descripcion.value);
  
  });
   
};
const actualizar = async (id) =>{
  console.log("guardado", id);
  const camposEditar = doc(db, "publicaciones", id);
  let nuevaDescripcion = document.querySelector("#datos_restaurante").value;
   //console.log(camposEditar);
  // Set the "capital" field of the city 'DC'
  await updateDoc(camposEditar, {
    descripcion: nuevaDescripcion,
    //userId: obtenerUsuarioActual().uid,
   // userName: obtenerUsuarioActual().displayName,
    
  });

};