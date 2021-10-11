import { registrarUsusario, iniciarSesionGoogle } from "../auth.js";

export const registration = () => {
    const templateRegistro = 
    `<div class="tarjeta sombra" style="width:100%; max-width: 450px;">
    <div class="tarjeta-encabezado">
        <h2>Registrarse</h2>
    </div>
    <div class="tarjeta-cuerpo">
        <form action="" id="formularioRegistro" class="formulario">
            <label for="">Nombres y apellidos:</label>
            <input type="text" id="inputNombre" name="nombre" required />
            <label for="">Correo:</label>
            <input type="email" id="inputEmail" name="correo" required />
            <label for="">Contraseña:</label>
            <input type="password" id="inputPassword" name="contraseña" required />
            <label for="">Confirmar Contraseña:</label>
            <input type="password" id="inputPasswordConfirmation" name="confirmar_contraseña" required />
            <div class="flexible">
                <a href="#/login">Iniciar Sesión</a>
                <button
                    type="submit"
                    class="boton boton-primario"
                >
                    <i class="bi bi-box-arrow-in-right"></i>
                    <span>Registrarse</span>
                </button>
            </div>
        </form>
        <hr />
        <button id="registro-google" class="boton boton-secundario">
            <img
                src="img/Google_Logo.svg"
                class="google-logo"
                alt=""
            />
            <span>Iniciar con Google</span>
        </button>
    </div>
</div>
   `;
    //se crea un elemto tipo template para insertarle el texto de la plantilla
    let template = document.createElement("template");
    template.innerHTML = templateRegistro; //remplaza
    // se obtiene el formulario dentro el elemnto template
    let form = template.content.querySelector("#formularioRegistro");

    form.addEventListener("submit", (evt) => {
        evt.preventDefault();
        let nombre = document.querySelector("#inputNombre").value;
        let email = document.querySelector("#inputEmail").value;
        let password = document.querySelector("#inputPassword").value;
        let passwordConfirmation = document.querySelector("#inputPasswordConfirmation").value;

        if(password != passwordConfirmation){
            alert("Las contraseñas no coinciden");
            return;
        }

        console.log("Registrando...");
        // se importa la funcion iniciar sesion de auth/index.js y se llama
        registrarUsusario(nombre, email, password);
    });

    let registroGoogle = template.content.querySelector("#registro-google");
    registroGoogle.addEventListener("click", (evento) => {
        iniciarSesionGoogle();
    });
    // el retunr ya no devuelve el texto del template sino que devuelve un nodo de HTML
    return template.content;
};
