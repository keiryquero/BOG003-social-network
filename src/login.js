import { inciarSesion, logueoConGoogle } from "./auth/index.js";

export const login = () => {

  const templateLogin = `

    <div> 
    <div> <img class="galeria"src="img/ejemplorestaurantes.jpg" alt="Imagen ejemplo restaurantes"><br><br>
  </div> 
  <div class="title-login"> 
    <h1> welcome back </h1>,
  </div> 
  <div class="form-login">
  <button id="login-google" class="registro-google" type="button">Iniciar sesión con Google</button><br /><br />
    <form class= "login" id="login">
      <input type="email" class="form" id="email-login" value="" placeholder="Email">
      <input type= "password" class="form" id="password-two" value="" placeholder="Password">
      <button id="btn-login" type="submit">INGRESAR</button>
      <p>¿NO estas registrado aun? <a href="#/inicio">ingresa aquí</a></p>
   </form>
  </div>
`;
    //se crea un elemto tipo template para insertarle el texto de la plantilla
    let template = document.createElement("template");
    template.innerHTML = templateLogin;
    // se obtiene el formulario dentro el elemnto template
    let form = template.content.querySelector("#login");
    // se agrega el evento al formulario
    form.addEventListener("submit", (evt) => {
        evt.preventDefault();
        let email = document.querySelector("#email-login").value;
        let password = document.querySelector("#password-two").value;
        

        console.log("Iniciando sesion...");
        // se importa la funcion iniciar sesion de auth/index.js y se llama
        inciarSesion(email, password);
      
    });
    let loginGoogle = template.content.querySelector("#login-google");
    loginGoogle.addEventListener("click", (evento) => {
     logueoConGoogle();
});
    // el retunr ya no devuelve el texto del template sino que devuelve un nodo de HTML
    return template.content;
  
};
