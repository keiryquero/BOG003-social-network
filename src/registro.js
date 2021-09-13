export const registration = () => {

  const templateRegistro = `
  <section>
    <div> 
    <h1> REGISTRARSE:</h1>,
    <button id="registro-google" type="button">Registarse con Google</button>
    <input type="text" class="form" id="nombres" value="" placeholder="Nombre">
    <input type="email" class="form" id="email-registro" value="" placeholder="Email">
    <input type= "password" class="form" id="password-one" value="" placeholder="Password">
    <input type="password" class="form" id="password-one" value="" placeholder="Confirme password">
    <p>Acepto terminos y condiciones</p>
    <button id="btn-resgistrarse" type="button">Registrarse </button>
    <p>¿Ya estas registrado?</p>
    </div>
    </section>    
`

  const divRegistro = document.createElement("div");
  divRegistro.innerHTML = templateRegistro;

  divRegistro.classList.add("divRegistro") /*Se asigna la clase a un div creado desde createElement*/
  console.log()
  return divRegistro

}



/*let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;*/