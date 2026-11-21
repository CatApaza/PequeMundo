// Catálogo de demostración de PequeMundo.
// Las fotografías se sirven desde Unsplash; se necesita conexión a Internet para verlas.
const productos = [
  {
    id: 1,
    nombre: "Asiento de auto para bebé",
    precio: 329.9,
    categoria: "Asientos de seguridad",
    imagen:
      "https://images.unsplash.com/photo-1516309229383-2001fee59b2b?auto=format&fit=crop&w=900&q=85",
    alt: "Bebé sentado en un asiento de seguridad para auto",
    etiqueta: "Favorito",
    descripcion: "Comodidad y protección para acompañar cada trayecto.",
    paginaDetalle: "detalle-asiento-auto.html",
    descripcionCompleta:
      "Acompaña los trayectos en familia con un asiento de auto para bebé de diseño cómodo y práctico. Su formato está pensado para integrarse al espacio del vehículo y ofrecer un lugar propio para el pequeño durante los desplazamientos. Antes de utilizar cualquier sistema de retención infantil, revisa siempre el manual del fabricante y las indicaciones de instalación correspondientes al modelo real.",
    galeria: [
      "https://images.unsplash.com/photo-1516309229383-2001fee59b2b?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1516309229383-2001fee59b2b?auto=format&fit=crop&w=900&q=85&h=720&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1516309229383-2001fee59b2b?auto=format&fit=crop&w=900&q=85&h=720&fit=crop&crop=faces",
    ],
    caracteristicas: [
      { etiqueta: "Categoría", valor: "Asientos de seguridad" },
      { etiqueta: "Tipo", valor: "Asiento para bebé" },
      { etiqueta: "Diseño", valor: "Cómodo y funcional" },
      { etiqueta: "Uso", valor: "Traslados en automóvil" },
      { etiqueta: "Precio", valor: "Referencial para el proyecto" },
    ],
  },
  {
    id: 2,
    nombre: "Cuna de madera natural",
    precio: 599.0,
    categoria: "Cunas para bebés",
    imagen:
      "https://images.unsplash.com/photo-1721738859261-1f5e10c2054b?auto=format&fit=crop&w=900&q=85",
    alt: "Habitación infantil luminosa con una cuna blanca",
    etiqueta: "Ambiente sereno",
    descripcion: "Un espacio acogedor para sus momentos de descanso.",
    paginaDetalle: "detalle-cuna-madera.html",
    descripcionCompleta:
      "Crea un ambiente cálido y sereno con esta cuna de madera natural. Su estética sencilla combina con distintos estilos de habitación infantil y ayuda a organizar un espacio dedicado al descanso del bebé. Su acabado de inspiración natural aporta una sensación acogedora y atemporal al dormitorio.",
    galeria: [
      "https://images.unsplash.com/photo-1721738859261-1f5e10c2054b?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1721738859261-1f5e10c2054b?auto=format&fit=crop&w=900&q=85&h=720&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1721738859261-1f5e10c2054b?auto=format&fit=crop&w=900&q=85&h=720&fit=crop&crop=faces",
    ],
    caracteristicas: [
      { etiqueta: "Categoría", valor: "Cunas para bebés" },
      { etiqueta: "Material referencial", valor: "Madera" },
      { etiqueta: "Estilo", valor: "Natural y minimalista" },
      { etiqueta: "Ambiente recomendado", valor: "Dormitorio infantil" },
      { etiqueta: "Precio", valor: "Referencial para el proyecto" },
    ],
  },
  {
    id: 3,
    nombre: "Coche compacto plegable",
    precio: 459.9,
    categoria: "Coches para bebés",
    imagen:
      "https://plus.unsplash.com/premium_photo-1661418384831-134341adc135?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    alt: "Cochecito para bebé de diseño compacto",
    etiqueta: "Para paseos",
    descripcion: "Una opción práctica para salir a descubrir el mundo.",
    paginaDetalle: "detalle-coche-compacto.html",
    descripcionCompleta:
      "Disfruta de los paseos cotidianos con un coche compacto plegable, pensado para quienes valoran la practicidad y un diseño fácil de integrar a la rutina familiar. Su concepto plegable permite guardarlo ocupando menos espacio que un coche de estructura fija. Comprueba las medidas, el peso máximo y las instrucciones del fabricante antes de usar un modelo real.",
    galeria: [
      "https://plus.unsplash.com/premium_photo-1661418384831-134341adc135?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      "https://images.unsplash.com/photo-1539893147390-a9c1d69f00be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      "https://images.unsplash.com/photo-1559135141-2bea6465fccf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    ],
    caracteristicas: [
      { etiqueta: "Categoría", valor: "Coches para bebés" },
      { etiqueta: "Diseño", valor: "Compacto" },
      { etiqueta: "Sistema", valor: "Plegable" },
      { etiqueta: "Uso", valor: "Paseos y desplazamientos" },
      { etiqueta: "Precio", valor: "Referencial para el proyecto" },
    ],
  },
  {
    id: 4,
    nombre: "Cama cuna convertible",
    precio: 749.0,
    categoria: "Camas cuna",
    imagen:
      "https://images.unsplash.com/photo-1763478958804-33a0fe7b5137?auto=format&fit=crop&w=900&q=85",
    alt: "Dormitorio infantil de estilo cálido y delicado",
    etiqueta: "Diseño delicado",
    descripcion: "Un rincón pensado para crecer y descansar.",
    paginaDetalle: "detalle-cama-cuna.html",
    descripcionCompleta:
      "La cama cuna convertible propone una solución versátil para ambientar la habitación infantil. Su concepto convertible busca acompañar distintas etapas de crecimiento y mantener una estética delicada en el dormitorio. Consulta las especificaciones del fabricante para conocer las configuraciones, medidas y edades de uso del producto real.",
    galeria: [
      "https://images.unsplash.com/photo-1763478958804-33a0fe7b5137?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1763478958804-33a0fe7b5137?auto=format&fit=crop&w=900&q=85&h=720&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1763478958804-33a0fe7b5137?auto=format&fit=crop&w=900&q=85&h=720&fit=crop&crop=faces",
    ],
    caracteristicas: [
      { etiqueta: "Categoría", valor: "Camas cuna" },
      { etiqueta: "Concepto", valor: "Convertible" },
      { etiqueta: "Estilo", valor: "Infantil y delicado" },
      { etiqueta: "Ambiente recomendado", valor: "Dormitorio infantil" },
      { etiqueta: "Precio", valor: "Referencial para el proyecto" },
    ],
  },
  {
    id: 5,
    nombre: "Organizador infantil",
    precio: 89.9,
    categoria: "Accesorios",
    imagen:
      "https://images.unsplash.com/photo-1766918780916-228d10b071be?auto=format&fit=crop&w=900&q=85",
    alt: "Ropa y accesorios de bebé organizados en estantes",
    etiqueta: "Pequeños detalles",
    descripcion: "Mantén a mano los esenciales de cada día.",
    paginaDetalle: "detalle-organizador.html",
    descripcionCompleta:
      "Mantén en orden los objetos de uso cotidiano con este organizador infantil. Es un accesorio pensado para reunir pequeños esenciales y facilitar su ubicación dentro de la habitación o zona de cuidado. Su propuesta combina funcionalidad y una presentación sencilla que se adapta a diferentes espacios.",
    galeria: [
      "https://images.unsplash.com/photo-1766918780916-228d10b071be?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1766918780916-228d10b071be?auto=format&fit=crop&w=900&q=85&h=720&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1766918780916-228d10b071be?auto=format&fit=crop&w=900&q=85&h=720&fit=crop&crop=faces",
    ],
    caracteristicas: [
      { etiqueta: "Categoría", valor: "Accesorios" },
      { etiqueta: "Tipo", valor: "Organizador infantil" },
      { etiqueta: "Uso", valor: "Almacenamiento de esenciales" },
      { etiqueta: "Ubicación sugerida", valor: "Habitación o zona de cuidado" },
      { etiqueta: "Precio", valor: "Referencial para el proyecto" },
    ],
  },
  {
    id: 6,
    nombre: "Móvil musical para cuna",
    precio: 39.9,
    categoria: "Accesorios",
    imagen:
      "https://images.unsplash.com/photo-1644249485266-b60dcf31e42b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    alt: "Bebé explorando un juguete durante el juego",
    etiqueta: "Un toque de ternura",
    descripcion: "Un detalle especial para acompañar sus primeros juegos.",
    paginaDetalle: "detalle-movil-musical.html",
    descripcionCompleta:
      "Añade un detalle especial al espacio de descanso con este móvil musical para cuna. Su propuesta combina un elemento decorativo con una función musical para acompañar momentos tranquilos y rutinas cotidianas. Para un producto real, verifica el sistema de fijación, las recomendaciones de edad y las indicaciones de seguridad del fabricante.",
    galeria: [
      "https://images.unsplash.com/photo-1505043203398-7e4c111acbfa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      "https://images.unsplash.com/photo-1644249485266-b60dcf31e42b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D&h=720&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1707143017681-777ab2ac79a4?auto=format&fit=crop&w=900&q=85&h=720&fit=crop&crop=faces",
    ],
    caracteristicas: [
      { etiqueta: "Categoría", valor: "Accesorios" },
      { etiqueta: "Tipo", valor: "Móvil musical" },
      { etiqueta: "Uso", valor: "Elemento decorativo y musical" },
      { etiqueta: "Espacio sugerido", valor: "Habitación infantil" },
      { etiqueta: "Precio", valor: "Referencial para el proyecto" },
    ],
  },
];

function formatoPrecio(precio) {
  return new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: "PEN",
    minimumFractionDigits: 2,
  }).format(precio);
}

// Obtener las calificaciones guardadas en el navegador
function obtenerCalificaciones() {
  try {
    return JSON.parse(
      localStorage.getItem("pequemundo-calificaciones") || "{}",
    );
  } catch (error) {
    return {};
  }
}

// Obtener la calificación de un producto
function obtenerCalificacionProducto(id) {
  const calificaciones = obtenerCalificaciones();
  return Number(calificaciones[id] || 0);
}

// Guardar la calificación seleccionada
function calificarProducto(id, valor) {
  const puntuacion = Math.max(1, Math.min(5, Number(valor)));

  const calificaciones = obtenerCalificaciones();
  calificaciones[id] = puntuacion;

  localStorage.setItem(
    "pequemundo-calificaciones",
    JSON.stringify(calificaciones),
  );

  // Actualizar las estrellas de la tarjeta sin recargar la página
  const tarjeta = document.querySelector(
    `.product-card[data-product-id="${id}"]`,
  );

  if (!tarjeta) return;

  const estrellas = tarjeta.querySelectorAll(".rating-star");

  estrellas.forEach((estrella, indice) => {
    const activa = indice < puntuacion;

    estrella.classList.toggle("is-active", activa);
    estrella.setAttribute("aria-pressed", String(indice + 1 === puntuacion));
  });

  const mensaje = tarjeta.querySelector(".rating-feedback");

  if (mensaje) {
    mensaje.textContent = `Tu calificación: ${puntuacion}/5`;
  }
}

function rutaDetalleProducto(producto) {
  const prefijo = window.location.pathname.includes("/pages/") ? "" : "pages/";
  return `${prefijo}${producto.paginaDetalle}`;
}

function tarjetaProducto(producto) {
  const enlaceDetalle = rutaDetalleProducto(producto);
  const calificacion = obtenerCalificacionProducto(producto.id);

  return `
        <article class="product-card" data-product-id="${producto.id}">

            <a class="product-image-link"
               href="${enlaceDetalle}"
               aria-label="Ver detalles de ${producto.nombre}">

                <div class="product-image-wrap">

                    <img
                        class="product-image"
                        src="${producto.imagen}"
                        alt="${producto.alt}"
                        loading="lazy"
                        decoding="async"
                        onerror="this.hidden=true; this.parentElement.classList.add('image-unavailable')"
                    >

                    <span class="product-badge">
                        ${producto.etiqueta}
                    </span>

                </div>
            </a>

            <div class="product-info">

                <p class="product-category">
                    ${producto.categoria}
                </p>

                <h3>
                    <a class="product-title-link" href="${enlaceDetalle}">
                        ${producto.nombre}
                    </a>
                </h3>

                <p class="product-description">
                    ${producto.descripcion}
                </p>

                <!-- CALIFICACIÓN POR ESTRELLAS -->
                <div class="product-rating">

                    <span class="rating-label">
                        Califica:
                    </span>

                    <div class="rating-stars">

                        ${[1, 2, 3, 4, 5]
                          .map(
                            (valor) => `
                            <button
                                type="button"
                                class="rating-star ${valor <= calificacion ? "is-active" : ""}"
                                onclick="calificarProducto(${producto.id}, ${valor})"
                                aria-label="Calificar con ${valor} estrellas"
                                aria-pressed="${valor === calificacion}">
                                ★
                            </button>
                        `,
                          )
                          .join("")}

                    </div>

                    <span class="rating-feedback">
                        ${
                          calificacion
                            ? `Tu calificación: ${calificacion}/5`
                            : "Sin calificar"
                        }
                    </span>

                </div>

                <!-- PRECIO Y BOTONES -->
                <div class="product-purchase">

                    <div class="product-price">
                        <span>Precio referencial</span>

                        <strong>
                            ${formatoPrecio(producto.precio)}
                        </strong>
                    </div>

                    <div class="product-actions">

                        <a class="details-button"
                           href="${enlaceDetalle}">
                            Ver detalles
                        </a>

                        <button
                            class="add-cart-button"
                            type="button"
                            onclick="agregarAlCarrito(${producto.id})"
                            aria-label="Agregar ${producto.nombre} al carrito">

                            Añadir <span aria-hidden="true">＋</span>

                        </button>

                    </div>

                </div>

            </div>

        </article>
    `;
}

// Renderiza productos en catálogo o en la sección de destacados.
function renderizarProductos(lista, contenedor) {
  if (!contenedor) return;
  contenedor.innerHTML = lista.length
    ? lista.map(tarjetaProducto).join("")
    : '<p class="empty-results">No encontramos productos con esos criterios. Prueba otra búsqueda o categoría.</p>';
}
