import {
    collection,
    addDoc,
    getDocs,
    query,
    where,
    setDoc,
    deleteDoc,
    getFirestore,
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
        <div></div>
        <button type="submit" form="formCrearPost" class="boton boton-primario">
            <i class="bi bi-plus-circle"></i>
            Crear
        </button>
    </div>
  </div>`;

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
    postTarjeta.innerHTML = `<p>${post.nombreRestaurante} <br>
  ${post.descripcion}
  </p> 
  <button id="btn-like" type="submit"><i style='font-size:24px' class='far'>&#xf164;</i></button> 
 
  `;

    // tarjetas.appendChild(postTarjeta);
};

//contenedor para mostrar las tarjetas html y aqui, crear la funcion que muestre 
//y me recorra las publicaciones del arreglo del post
// para habilitar el editar y borrar en la tarjeta 
// se debe comparar el uid guardado en la publicacion con el uid 
// del usuario actual logueado. (obtener usuarioactual).


// Metodo para borrar un documento creado en firetore

//await deleteDoc(doc(db, "cities", "DC"));

// const crearTarjeta = (data) => {
//     const tarjetaTemplate = `
//         <div>
//             <h2>${data.nombre}</h2>
//             <button class="boton-borrar">Borrar</button>
//         </div>
//     `;

//     let tarjeta = document.createElement("div");

//     tarjeta.innerHTML = tarjetaTemplate;

//     const botonBorrar = tarjeta.querySelector(".boton-borrar");

//     botonBorrar.addEventListener("click", borrar(data.uid))

//     return tarjeta;

// }

// const borrar = (id) => {

// }
