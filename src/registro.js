import { registrarUsusario, iniciarSesionGoogle } from "./auth/index.js";
export const registration = () => {
    const templateRegistro = `
    <div  class="contenedor-registro">
        <div class="contenedor-central">
        <h1 class="titulo">ALKEVE RESTAURANT SIDE</h1>
        <br />
            <img
                class="galeria"
                src="img/ejemplorestaurantes.jpg"
                alt="Imagen ejemplo restaurantes"
            /><br /><br />
            <p class="texto">
                Únete a la comunidad de ALKEVE RESTAURANT SITE, la app para crear,
                compartir y conocer restaurantes en tu ciudad.
            </p>
        </div>
        <br />
        <div class="contenedor-form">
            <h1>REGISTRARSE:</h1>
            <br />
            <button id="registro-google" class="registro-google" type="button">
                Registarse con Google</button
            ><br /><br />
            <p>Registrate con tu correo:</p>
            <br />
            <form id="formularioRegistro">
                <input
                    type="email"
                    class="form"
                    id="email-registro"
                    value=""
                    placeholder="Email"
                /><br />
                <input
                    type="password"
                    class="form"
                    id="password-one"
                    value=""
                    placeholder="Password"
                /><br />
                <p>Acepto <a href="#">terminos y condiciones</a></p>
                <button id="btn-resgistrarse" type="submit">CREAR CUENTA</button
                ><br />
                <p>
                    ¿Ya estas registrado?
                    <a href="#/login">Ingresa aquí</a>
                </p>
            </form>
        </div>
    </div>`;
    //se crea un elemto tipo template para insertarle el texto de la plantilla
    let template = document.createElement("template");
    template.innerHTML = templateRegistro; //remplaza
    // se obtiene el formulario dentro el elemnto template
    let form = template.content.querySelector("#formularioRegistro");

    form.addEventListener("submit", (evt) => {
        evt.preventDefault();
        let email = document.querySelector("#email-registro").value;
        let password = document.querySelector("#password-one").value;

        console.log("Registrando...");
        // se importa la funcion iniciar sesion de auth/index.js y se llama
        registrarUsusario(email, password);
    });

    let registroGoogle = template.content.querySelector("#registro-google");
    registroGoogle.addEventListener("click", (evento) => {
        iniciarSesionGoogle();
    });
    // el retunr ya no devuelve el texto del template sino que devuelve un nodo de HTML
    return template.content;
};
