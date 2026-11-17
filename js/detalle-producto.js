document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("detalle-producto");
  if (!contenedor || typeof productos === "undefined") return;

  const parametros = new URLSearchParams(window.location.search);
  const idPagina = document.body.dataset.productId || parametros.get("id");
  const producto = productos.find((p) => String(p.id) === String(idPagina));

  if (!producto) {
    contenedor.innerHTML = `
      <div class="detail-not-found">
        <span class="eyebrow">PequeMundo</span>
        <h1>Selecciona un producto</h1>
        <p>Para consultar una ficha individual, ingresa desde una tarjeta del catálogo.</p>
        <a class="btn" href="catalogo.html">Explorar catálogo</a>
      </div>`;
    return;
  }

  document.title = `${producto.nombre} | PequeMundo`;
  const breadcrumb = document.getElementById("breadcrumb-producto");
  if (breadcrumb) breadcrumb.textContent = producto.nombre;
  const fotos = producto.galeria?.length ? producto.galeria : [producto.imagen];
  const caracteristicas = producto.caracteristicas || [];

  contenedor.className = "product-detail content-wrap";
  contenedor.innerHTML = `
    <div class="detail-layout">
      <div class="detail-gallery">
        <div class="detail-main-image-wrap">
          <img id="imagen-principal" class="detail-main-image" src="${fotos[0]}" alt="${producto.alt}" onerror="this.hidden=true; this.parentElement.classList.add('image-unavailable')">
          <span class="detail-image-label">${producto.etiqueta}</span>
        </div>
        <div class="detail-thumbnails" aria-label="Galería de fotografías">
          ${fotos
            .map(
              (foto, i) => `
            <button class="gallery-thumb ${i === 0 ? "active" : ""}" type="button" data-foto="${i}" aria-label="Mostrar fotografía ${i + 1}" aria-pressed="${i === 0}">
              <img src="${foto}" alt="Vista ${i + 1} de ${producto.nombre}" loading="lazy" onerror="this.hidden=true">
            </button>`,
            )
            .join("")}
        </div>
        <p class="gallery-caption">Galería visual de referencia del producto.</p>
      </div>

      <div class="detail-information">
        <span class="eyebrow">${producto.categoria}</span>
        <h1>${producto.nombre}</h1>
        <p class="detail-short-description">${producto.descripcion}</p>
        <div class="detail-price-block"><span>Precio referencial</span><strong>${formatoPrecio(producto.precio)}</strong><small>Importe ilustrativo para el proyecto académico.</small></div>
        <div class="detail-quantity-row">
          <label for="cantidad-producto">Cantidad</label>
          <div class="quantity-control"><button type="button" id="restar-cantidad" aria-label="Disminuir cantidad">−</button><input id="cantidad-producto" type="number" min="1" max="20" value="1" inputmode="numeric"><button type="button" id="sumar-cantidad" aria-label="Aumentar cantidad">＋</button></div>
        </div>
        <button class="btn detail-add-button" id="agregar-detalle" type="button">Añadir al carrito <span aria-hidden="true">♡</span></button>
        <p class="detail-delivery-note"><span aria-hidden="true">✧</span> Compra demostrativa · No se procesa ningún pago.</p>
      </div>
    </div>

    <div class="detail-description-panel">
      <div class="detail-description-copy"><span class="eyebrow">Conoce más</span><h2>Sobre este <em>producto</em></h2><p>${producto.descripcionCompleta || producto.descripcion}</p></div>
      <div class="detail-specifications"><h2>Características</h2><dl>${caracteristicas.map((c) => `<div><dt>${c.etiqueta}</dt><dd>${c.valor}</dd></div>`).join("")}</dl></div>
    </div>
    <p class="detail-disclaimer">Información e imágenes referenciales. Las especificaciones de seguridad, dimensiones, materiales y condiciones de uso deben confirmarse con la ficha técnica del fabricante antes de adquirir un producto real.</p>
  `;

  const imagenPrincipal = document.getElementById("imagen-principal");
  contenedor.querySelectorAll(".gallery-thumb").forEach((boton) => {
    boton.addEventListener("click", () => {
      const indice = Number(boton.dataset.foto);
      imagenPrincipal.src = fotos[indice];
      imagenPrincipal.alt = `Vista ${indice + 1} de ${producto.nombre}`;
      contenedor.querySelectorAll(".gallery-thumb").forEach((otro) => {
        const activo = otro === boton;
        otro.classList.toggle("active", activo);
        otro.setAttribute("aria-pressed", String(activo));
      });
    });
  });

  const cantidadInput = document.getElementById("cantidad-producto");
  const normalizarCantidad = () => {
    let cantidad = Number.parseInt(cantidadInput.value, 10);
    if (!Number.isFinite(cantidad)) cantidad = 1;
    cantidadInput.value = Math.min(20, Math.max(1, cantidad));
  };
  document.getElementById("restar-cantidad").addEventListener("click", () => {
    cantidadInput.value = Math.max(
      1,
      (Number.parseInt(cantidadInput.value, 10) || 1) - 1,
    );
  });
  document.getElementById("sumar-cantidad").addEventListener("click", () => {
    cantidadInput.value = Math.min(
      20,
      (Number.parseInt(cantidadInput.value, 10) || 1) + 1,
    );
  });
  cantidadInput.addEventListener("change", normalizarCantidad);
  document.getElementById("agregar-detalle").addEventListener("click", () => {
    normalizarCantidad();
    agregarAlCarrito(producto.id, Number.parseInt(cantidadInput.value, 10));
  });

  const relacionados = document.getElementById("productos-relacionados");
  if (relacionados) {
    const otros = productos.filter((p) => p.id !== producto.id).slice(0, 3);
    renderizarProductos(otros, relacionados);
  }
});
