export const errorPage = () => {
    const templateErrorPage = 
    `<div class="" style="max-width: 450px">
      <h2>Error!</h2>
      <p>Está página no existe!</p>
      <a href=""><- Volver a inicio</a>
    </div>`;

    //se crea un elemto tipo template para insertarle el texto de la plantilla
    let template = document.createElement("template");
    template.innerHTML = templateErrorPage;
        
    // el retunr ya no devuelve el texto del template sino que devuelve un nodo de HTML
    return template.content;
};

