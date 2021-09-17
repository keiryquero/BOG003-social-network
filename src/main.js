import { mostrarVista } from './router.js';
//import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
//carga la pagina
document.addEventListener("DOMContentLoaded", () => {
    const locationRood = window.location.hash;
    return mostrarVista(locationRood);
});
//escucha el cambio del hash(vista)
//el evento hashchange es un evento para window
window.addEventListener("hashchange", () => {
    const locationRood = window.location.hash;
    console.log(locationRood);
    mostrarVista(locationRood);
    });
//accion al btn de registro (preguntar donde debe ubicarse antes de llamar los template)
 const formulario = document.getElementById("btn-resgistrarse");
 formulario.addEventListener("submit",(event)=>{
  event.preventDefault();
  const name = formulario['nombres'].value;
  const password= formulario['password-one'].value;
  const email = formulario['email-registro'].value;
  console.log(name,password,email);

 })


//const divContenedor = document.createElement("div");
//divContenedor.innerHTML = mostrarVista;
//divRegistro.classList.add("divRegistro") /*Se asigna la clase a un div creado desde createElement*/
//console.log(divContenedor);
//return divRegistro
  
/*document.getElementById("btn-resgistrarse").addEventListener("click", () => {
    
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
