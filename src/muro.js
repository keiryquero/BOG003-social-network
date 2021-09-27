export const muro = () => {
  const templateMuro = `
<div class="barra">
  <button id="btn-crear" type="submit">CREAR POST</button
  <div>
      <label class="filtro-prueba">Filtrar por:</label>
      <select name="" id="filtro">
          <option value="">Selecciona...</option>
          <option value="Male">Hombre</option>
          <option value="Female">Mujer</option>
      </select>
  </div>

  <div>
      <label class="select-prueba">Ordenar por:</label>
      <select name="" id="ordenar">
          <option value="">Selecciona...</option>
          <option value="a-z">Nombre ascendente</option>
          <option value="z-a">Nombre descendente</option>
      </select>
  </div>
</div>

<main>

<div class="tarjeta">
  <div class="foto">
      <img src="img/google.png" alt="" />
  </div>
  <div class="bio">
      <p>
          abc
      </p>
  </div>
</div> 
</main>
`;

  return templateMuro;
};
