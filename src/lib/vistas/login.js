import { inciarSesion, logueoConGoogle } from "../auth.js";

export const login = () => {
    const templateLogin = 
    `<div class="tarjeta sombra ancho-100" style="max-width: 450px">
      <div class="tarjeta-encabezado">
          <h2>Iniciar Sesión</h2>
      </div>
      <div class="tarjeta-cuerpo">
          <form action="" id="loginForm" class="formulario">
              <label for="">Correo:</label>
              <input type="email" id="inputEmail" name="correo" />
              <label for="">Contraseña:</label>
              <input type="password" id="inputPassword" name="contraseña" />
              <div class="flexible">
                  <a href="#/registro">Registrarse</a>
                  <button
                      type="submit"
                      class="boton boton-primario"
                  >
                      <i class="bi bi-box-arrow-in-right"></i>
                      <span>Iniciar Sesión</span>
                  </button>
              </div>
          </form>
          <hr />
          <button class="boton boton-secundario" id="loginGoogle">
              <img
                  src="img/Google_Logo.svg"
                  class="google-logo"
                  alt=""
              />
              <span>Iniciar con Google</span>
          </button>
      </div>
    </div>`;

    //se crea un elemto tipo template para insertarle el texto de la plantilla
    let template = document.createElement("template");
    template.innerHTML = templateLogin;
    
    // se obtiene el formulario dentro el elemnto template
    let form = template.content.querySelector("#loginForm");
    
    // se agrega el evento al formulario
    form.addEventListener("submit", (evt) => {
        evt.preventDefault();
        let email = document.querySelector("#inputEmail").value;
        let password = document.querySelector("#inputPassword").value;

        console.log("Iniciando sesion...");
        
        // se importa la funcion iniciar sesion de auth/index.js y se llama
        inciarSesion(email, password);
    });

    let loginGoogle = template.content.querySelector("#loginGoogle");
    
    loginGoogle.addEventListener("click", (evento) => {
        logueoConGoogle();
    });

    // el retunr ya no devuelve el texto del template sino que devuelve un nodo de HTML
    return template.content;
};
