document.addEventListener("DOMContentLoaded", () => {
  // 1. Productos destacados y catálogo
  const destacados = document.getElementById("productos-destacados");
  const catalogo = document.getElementById("catalogo-productos");
  if (destacados) renderizarProductos(productos.slice(0, 4), destacados);

  if (catalogo) {
    const esOfertas = window.location.pathname.includes("ofertas.html");
    const busqueda = document.getElementById("filtro-busqueda");
    const categoria = document.getElementById("filtro-categoria");
    const orden = document.getElementById("filtro-orden");
    const contador = document.getElementById("resultado-conteo");
    const limpiar = document.getElementById("limpiar-filtros");
    const params = new URLSearchParams(window.location.search);
    const busquedaGuardada =
      localStorage.getItem("pequemundo-busqueda") || params.get("q") || "";
    if (busqueda) busqueda.value = busquedaGuardada;
    localStorage.removeItem("pequemundo-busqueda");

    const aplicarFiltros = () => {
      const termino = (busqueda?.value || "").trim().toLocaleLowerCase("es");
      const cat = categoria?.value || "todas";
      let resultado = productos.filter((p) => {
        const coincideTexto = `${p.nombre} ${p.categoria} ${p.descripcion}`
          .toLocaleLowerCase("es")
          .includes(termino);
        const coincideCategoria = cat === "todas" || p.categoria === cat;
        return coincideTexto && coincideCategoria;
      });
      if (orden?.value === "menor")
        resultado.sort((a, b) => a.precio - b.precio);
      if (orden?.value === "mayor")
        resultado.sort((a, b) => b.precio - a.precio);
      renderizarProductos(resultado, catalogo, esOfertas);
      if (contador)
        contador.textContent = `${resultado.length} ${resultado.length === 1 ? "producto encontrado" : "productos encontrados"}`;
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

  // 2. Búsqueda global del encabezado
  const busquedaGlobal = document.getElementById("busqueda-global");
  if (busquedaGlobal) {
    busquedaGlobal.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const destino = location.pathname.includes("/pages/")
          ? "catalogo.html"
          : "pages/catalogo.html";
        window.location.href = `${destino}?q=${encodeURIComponent(busquedaGlobal.value.trim())}`;
      }
    });
  }

  // 3. Formularios
  const manejarFormulario = (idFormulario, idMensaje, texto) => {
    const formulario = document.getElementById(idFormulario);
    if (!formulario) return;
    formulario.addEventListener("submit", (evento) => {
      evento.preventDefault();
      const mensaje = document.getElementById(idMensaje);
      if (mensaje) {
        mensaje.hidden = false;
        mensaje.textContent = texto;
      }
      formulario.reset();
    });
  };

  manejarFormulario(
    "form-contacto",
    "mensaje-form",
    "Tu consulta se registró en esta demostración. ¡Gracias!",
  );
  manejarFormulario(
    "form-login",
    "mensaje-form-login",
    "Datos de acceso validados en el navegador (demostración frontend).",
  );
  manejarFormulario(
    "form-reclamos",
    "mensaje-form-reclamos",
    "Tu reclamo fue registrado en esta demostración. Recibirás una respuesta en un plazo máximo de 15 días hábiles.",
  );

  // Validación visible de campos con patterns en el libro de reclamaciones
  const formReclamos = document.getElementById("form-reclamos");
  if (formReclamos) {
    const controlesReclamos = Array.from(
      formReclamos.querySelectorAll(
        "input:not([type='radio']):not([type='checkbox']):not([type='file']), textarea, select",
      ),
    );

    const validarControlReclamos = (control, mostrarError = true) => {
      control.setCustomValidity("");
      let mensaje = "";
      const valor = typeof control.value === "string" ? control.value.trim() : "";

      if (control.required && (control.type === "checkbox" || control.type === "radio")) {
        if (!control.checked) mensaje = "Selecciona una opción.";
      } else if (control.required && valor === "") {
        mensaje =
          control.dataset.errorRequired ||
          "Completa este campo.";
      } else if (valor !== "" && control.validity.typeMismatch) {
        mensaje =
          control.dataset.errorType ||
          "Ingresa un formato válido.";
      } else if (valor !== "" && control.validity.patternMismatch) {
        mensaje =
          control.dataset.errorPattern ||
          "El valor no cumple el formato solicitado.";
      } else if (valor !== "" && control.validity.tooShort) {
        mensaje =
          control.dataset.errorMinlength ||
          `Debes ingresar al menos ${control.minLength} caracteres.`;
      } else if (control.validity.rangeUnderflow) {
        mensaje =
          control.dataset.errorRange ||
          `El valor debe ser mayor o igual a ${control.min}.`;
      }

      control.setCustomValidity(mensaje);
      control.setAttribute("aria-invalid", mensaje ? "true" : "false");

      let ayuda = control.parentElement?.querySelector(".field-error");
      if (!ayuda) {
        ayuda = document.createElement("small");
        ayuda.className = "field-error";
        ayuda.setAttribute("aria-live", "polite");
        control.parentElement?.appendChild(ayuda);
      }
      ayuda.textContent = mostrarError ? mensaje : "";

      if (control.id) {
        ayuda.id = ayuda.id || `${control.id}-error`;
        const ids = (control.getAttribute("aria-describedby") || "")
          .split(/\s+/)
          .filter((id) => id && id !== ayuda.id);
        ids.push(ayuda.id);
        control.setAttribute("aria-describedby", ids.join(" "));
      }

      return !mensaje;
    };

    controlesReclamos.forEach((control) => {
      control.addEventListener("input", () => validarControlReclamos(control));
      control.addEventListener("change", () => validarControlReclamos(control));
      control.addEventListener("blur", () => validarControlReclamos(control));
      validarControlReclamos(control, false);
    });

    formReclamos.addEventListener("reset", () => {
      requestAnimationFrame(() => {
        controlesReclamos.forEach((control) =>
          validarControlReclamos(control, false),
        );
      });
    });
  }
  manejarFormulario(
    "form-clientes",
    "mensaje-form-clientes",
    "Tu ficha de cliente se registró correctamente en esta demostración.",
  );

  // 3.1 Presupuesto dinámico del formulario de clientes
  const rangoPresupuesto = document.getElementById("cliente-presupuesto");
  const salidaPresupuesto = document.getElementById("salida-presupuesto");
  if (rangoPresupuesto && salidaPresupuesto) {
    const actualizarPresupuesto = () => {
      salidaPresupuesto.textContent = `S/ ${Number(rangoPresupuesto.value).toLocaleString("es-PE")}`;
    };
    rangoPresupuesto.addEventListener("input", actualizarPresupuesto);
    document
      .getElementById("form-clientes")
      ?.addEventListener("reset", () =>
        requestAnimationFrame(actualizarPresupuesto),
      );
    actualizarPresupuesto();
  }

  // 4. Botón flotante de WhatsApp automático
  const telefono = "51935964167";
  const tituloProducto = document.querySelector("h1")?.textContent.trim();
  const esPaginaDetalle = window.location.pathname.includes("detalle-");

  const mensajeWsp =
    esPaginaDetalle && tituloProducto
      ? `Hola PequeMundo, necesito información sobre este producto: ${tituloProducto}`
      : "Hola PequeMundo, necesito información sobre sus productos.";

  const urlWhatsApp = `https://wa.me/${telefono}?text=${encodeURIComponent(mensajeWsp)}`;

  const btnWhatsApp = document.createElement("a");
  btnWhatsApp.href = urlWhatsApp;
  btnWhatsApp.target = "_blank";
  btnWhatsApp.rel = "noopener noreferrer";
  btnWhatsApp.className = "whatsapp-float";
  btnWhatsApp.setAttribute("aria-label", "Consultar por WhatsApp");
  btnWhatsApp.innerHTML = `
    <svg viewBox="0 0 32 32" width="28" height="28" fill="currentColor" aria-hidden="true">
      <path d="M16.01 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.26.59 4.46 1.71 6.4L3.1 29l6.78-1.78a12.74 12.74 0 0 0 6.13 1.56h.01c7.06 0 12.79-5.73 12.79-12.8 0-3.42-1.33-6.64-3.75-9.05A12.71 12.71 0 0 0 16.01 3.2zm0 23.42h-.01a10.6 10.6 0 0 1-5.41-1.48l-.39-.23-4.02 1.05 1.07-3.92-.25-.4a10.58 10.58 0 0 1-1.62-5.64c0-5.86 4.77-10.63 10.64-10.63 2.84 0 5.51 1.11 7.52 3.12a10.56 10.56 0 0 1 3.11 7.52c0 5.86-4.77 10.61-10.63 10.61zm5.83-7.96c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.72.16-.21.32-.82 1.04-1.01 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.89-1.78-2.21-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66s1.15 3.09 1.31 3.3c.16.21 2.26 3.45 5.47 4.84.76.33 1.36.53 1.82.67.77.24 1.46.21 2.01.13.61-.09 1.89-.77 2.16-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37z"/>
    </svg>
    <span class="whatsapp-tooltip">¿Necesitas ayuda?</span>
  `;

  document.body.appendChild(btnWhatsApp);
});
