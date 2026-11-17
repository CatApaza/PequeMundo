document.addEventListener("DOMContentLoaded", () => {
  const destacados = document.getElementById("productos-destacados");
  const catalogo = document.getElementById("catalogo-productos");
  if (destacados) renderizarProductos(productos.slice(0, 4), destacados);

  // Filtros del catálogo: búsqueda, categoría y orden por precio.
  if (catalogo) {
    const busqueda = document.getElementById("filtro-busqueda");
    const categoria = document.getElementById("filtro-categoria");
    const orden = document.getElementById("filtro-orden");
    const contador = document.getElementById("resultado-conteo");
    const limpiar = document.getElementById("limpiar-filtros");
    const params = new URLSearchParams(window.location.search);
    const busquedaGuardada = localStorage.getItem("pequemundo-busqueda") || params.get("q") || "";
    if (busqueda) busqueda.value = busquedaGuardada;
    localStorage.removeItem("pequemundo-busqueda");

    const aplicarFiltros = () => {
      const termino = (busqueda?.value || "").trim().toLocaleLowerCase("es");
      const cat = categoria?.value || "todas";
      let resultado = productos.filter(p => {
        const coincideTexto = `${p.nombre} ${p.categoria} ${p.descripcion}`.toLocaleLowerCase("es").includes(termino);
        const coincideCategoria = cat === "todas" || p.categoria === cat;
        return coincideTexto && coincideCategoria;
      });
      if (orden?.value === "menor") resultado.sort((a, b) => a.precio - b.precio);
      if (orden?.value === "mayor") resultado.sort((a, b) => b.precio - a.precio);
      renderizarProductos(resultado, catalogo);
      if (contador) contador.textContent = `${resultado.length} ${resultado.length === 1 ? "producto encontrado" : "productos encontrados"}`;
    };
    busqueda?.addEventListener("input", aplicarFiltros);
    categoria?.addEventListener("change", aplicarFiltros);
    orden?.addEventListener("change", aplicarFiltros);
    limpiar?.addEventListener("click", () => {
      if (busqueda) busqueda.value = "";
      if (categoria) categoria.value = "todas";
      if (orden) orden.value = "relevancia";
      aplicarFiltros();
    });
    aplicarFiltros();
  }

  const busquedaGlobal = document.getElementById("busqueda-global");
  if (busquedaGlobal) {
    busquedaGlobal.addEventListener("keydown", e => {
      if (e.key === "Enter") {
        const destino = location.pathname.includes("/pages/") ? "catalogo.html" : "pages/catalogo.html";
        window.location.href = `${destino}?q=${encodeURIComponent(busquedaGlobal.value.trim())}`;
      }
    });
  }

  const form = document.getElementById("form-contacto");
  if (form) form.addEventListener("submit", e => {
    e.preventDefault();
    const mensaje = document.getElementById("mensaje-form");
    mensaje.hidden = false;
    mensaje.textContent = "Tu consulta se registró en esta demostración. ¡Gracias!";
    form.reset();
  });
  const registro = document.getElementById("form-registro");
  if (registro) registro.addEventListener("submit", e => {
    e.preventDefault();
    const mensaje = document.getElementById("mensaje-form");
    mensaje.hidden = false;
    mensaje.textContent = "Formulario validado correctamente (demostración frontend).";
  });
});
