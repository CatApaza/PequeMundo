function obtenerCarrito() {
  return JSON.parse(localStorage.getItem("pequemundo-carrito") || "[]");
}
function guardarCarrito(carrito) {
  localStorage.setItem("pequemundo-carrito", JSON.stringify(carrito));
  actualizarContador();
}
function agregarAlCarrito(id, cantidad = 1) {
  const cantidadValida = Math.min(
    20,
    Math.max(1, Number.parseInt(cantidad, 10) || 1),
  );
  const carrito = obtenerCarrito();
  const item = carrito.find((p) => p.id === id);
  if (item) item.cantidad += cantidadValida;
  else carrito.push({ id, cantidad: cantidadValida });
  guardarCarrito(carrito);
  alert(
    cantidadValida === 1
      ? "Producto agregado al carrito."
      : `${cantidadValida} unidades agregadas al carrito.`,
  );
}
function eliminarItem(id) {
  const carrito = obtenerCarrito();
  const idTexto = String(id);
  const idx = carrito.findIndex((p) => String(p.id) === idTexto);
  if (idx === -1) return;
  if (carrito[idx].cantidad <= 1) carrito.splice(idx, 1);
  else carrito[idx].cantidad -= 1;
  guardarCarrito(carrito);
  mostrarCarrito();
}
function actualizarContador() {
  const el = document.getElementById("contador-carrito");
  if (el) el.textContent = obtenerCarrito().reduce((s, p) => s + p.cantidad, 0);
}
function mostrarCarrito() {
  const cont = document.getElementById("contenido-carrito");
  if (!cont) return;
  const carrito = obtenerCarrito();
  if (!carrito.length) {
    cont.textContent = "Tu carrito está vacío por el momento.";
    return;
  }
  let total = 0;
  const filas = carrito
    .map((item) => {
      const p = productos.find((x) => String(x.id) === String(item.id));
      if (!p) return "";
      const subtotal = p.precio * item.cantidad;
      total += subtotal;
      return `<tr>
        <td>${p.nombre}</td>
        <td>${item.cantidad}</td>
        <td class="col-numero">S/ ${p.precio.toFixed(2)}</td>
        <td class="col-numero">S/ ${subtotal.toFixed(2)}</td>
        <td class="col-accion">
          <button class="button alert hollow btn-eliminar" type="button" data-eliminar-id="${item.id}">
            -
          </button>
        </td>
      </tr>`;
    })
    .join("");
  cont.innerHTML = `
    <div class="tabla-responsive">
      <table class="tabla-datos tabla-carrito">
        <caption>Productos y precios en tu carrito</caption>
        <thead>
          <tr>
            <th scope="col">Producto</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Precio unitario</th>
            <th scope="col">Subtotal</th>
            <th scope="col">Acción</th>
          </tr>
        </thead>
        <tbody>${filas}</tbody>
        <tfoot>
          <tr>
            <td colspan="4"><strong>Total</strong></td>
            <td class="col-numero"><strong>S/ ${total.toFixed(2)}</strong></td>
            <td class="col-accion"></td>
          </tr>
        </tfoot>
      </table>
    </div>
    <p class="carrito-acciones">
      <button class="btn" onclick="vaciarCarrito()">Vaciar carrito</button>
    </p>`;
}
function vaciarCarrito() {
  guardarCarrito([]);
  mostrarCarrito();
}
document.addEventListener("DOMContentLoaded", () => {
  actualizarContador();
  mostrarCarrito();
});
document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-eliminar-id]");
  if (!btn) return;
  const id = btn.getAttribute("data-eliminar-id");
  if (typeof id !== "string" || !id) return;
  eliminarItem(id);
});
