function obtenerCarrito(){return JSON.parse(localStorage.getItem("pequemundo-carrito")||"[]");}
function guardarCarrito(carrito){localStorage.setItem("pequemundo-carrito",JSON.stringify(carrito));actualizarContador();}
function agregarAlCarrito(id, cantidad = 1){
  const cantidadValida = Math.min(20, Math.max(1, Number.parseInt(cantidad, 10) || 1));
  const carrito = obtenerCarrito();
  const item = carrito.find(p => p.id === id);
  if (item) item.cantidad += cantidadValida;
  else carrito.push({ id, cantidad: cantidadValida });
  guardarCarrito(carrito);
  alert(cantidadValida === 1 ? "Producto agregado al carrito." : `${cantidadValida} unidades agregadas al carrito.`);
}
function actualizarContador(){const el=document.getElementById("contador-carrito");if(el)el.textContent=obtenerCarrito().reduce((s,p)=>s+p.cantidad,0);}
function mostrarCarrito(){const cont=document.getElementById("contenido-carrito");if(!cont)return;const carrito=obtenerCarrito();if(!carrito.length){cont.textContent="Tu carrito está vacío por el momento.";return;}let total=0;cont.innerHTML=carrito.map(item=>{const p=productos.find(x=>x.id===item.id);if(!p)return "";total+=p.precio*item.cantidad;return `<p>${p.nombre} — ${item.cantidad} × S/ ${p.precio.toFixed(2)}</p>`;}).join("")+`<hr><h3>Total: S/ ${total.toFixed(2)}</h3><button class="btn" onclick="vaciarCarrito()">Vaciar carrito</button>`;}
function vaciarCarrito(){guardarCarrito([]);mostrarCarrito();}
document.addEventListener("DOMContentLoaded",()=>{actualizarContador();mostrarCarrito();});
