import { mostrarVista } from './router.js';
//carga la pagina
document.addEventListener("DOMContentLoaded",()=>{
    const locationRood = window.location.hash;
    return mostrarVista(locationRood);
});
//escucha el cambio del hash(vista)
//el evento hashchange es un evento para window
window.addEventListener("hashchange",()=>{
    const locationRood = window.location.hash;
    console.log(locationRood);
    mostrarVista(locationRood);
    });

/*const divContenedor = document.createElement("div");
divContenedor.innerHTML = mostrarVista;
//divRegistro.classList.add("divRegistro") /*Se asigna la clase a un div creado desde createElement*/
/*console.log(divContenedor);*/
//return divRegistro
  

/*Prueba de boton */
const eventoFormReg = document.getElementById("nombres").value;

eventoFormReg.addEventListener(`submit`, e =>{
    e.preventDefault();

    const name = eventoFormReg["email-registro"].value;
    const passwords = eventoFormReg["password-one"].value;

    console.log(name, passwords);

})

/*document.getElementById("test").addEventListener("click", () => {
    
    import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
    const email = "test@gmail.com";
    const password = "123456";

    const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in

        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

})*/