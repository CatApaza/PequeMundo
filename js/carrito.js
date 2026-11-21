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
      const p = productos.find((x) => x.id === item.id);
      if (!p) return "";
      const subtotal = p.precio * item.cantidad;
      total += subtotal;
      return `<tr>
        <td>${p.nombre}</td>
        <td>${item.cantidad}</td>
        <td class="col-numero">S/ ${p.precio.toFixed(2)}</td>
        <td class="col-numero">S/ ${subtotal.toFixed(2)}</td>
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
          </tr>
        </thead>
        <tbody>${filas}</tbody>
        <tfoot>
          <tr>
            <td colspan="3"><strong>Total</strong></td>
            <td class="col-numero"><strong>S/ ${total.toFixed(2)}</strong></td>
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
