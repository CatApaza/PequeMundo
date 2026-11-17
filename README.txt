PEQUEMUNDO - PROYECTO FRONTEND

Para visualizar:
1. Abre la carpeta PequeMundo en Visual Studio Code.
2. Abre index.html con Live Server.

Página de inicio actualizada:
- index.html
- css/estilos.css
- css/estilos-less.css y less/estilos.less
- css/estilos-sass.css y scss/estilos.scss (con parciales)

Identidad visual: estilo elegante y delicado, paleta celeste y blanco.
Framework: Foundation CSS 6.8.1 mediante CDN.

Nota académica: los archivos CSS dentro de /css están listos para ser enlazados por el navegador. Cuando se configure LESS y Sass en VS Code, compila los archivos fuente de /less y /scss para mantenerlos sincronizados con sus CSS resultantes.


Tarjetas de productos:
- Las tarjetas incluyen fotografías, categoría, etiqueta, descripción, precio referencial y botón para agregar al carrito.
- Las imágenes se cargan desde Unsplash, por lo que requieren conexión a Internet.
- Los precios son ficticios y se usan únicamente para la demostración académica.

Créditos de fotografías (Unsplash):
- Asiento de seguridad: https://unsplash.com/photos/baby-on-gray-stroller-k03ih6IqkDY
- Habitación con cuna: https://unsplash.com/photos/a-babys-room-with-a-white-crib-and-lots-of-windows-0gDtdOVhOLQ
- Cochecito: https://unsplash.com/photos/a-baby-stroller-parked-on-the-side-of-a-street-oHZaF7rbVZk
- Dormitorio infantil: https://unsplash.com/photos/a-cozy-childs-bedroom-with-a-single-bed-FSsEIfS257Q
- Accesorios y ropa: https://unsplash.com/photos/baby-clothes-and-shoes-neatly-organized-on-shelves-wFHaSqNxHm4
- Juego y juguetes: https://unsplash.com/photos/a-baby-reaching-for-a-toy-on-a-table-hpgqbwjJ4pM

Catálogo interactivo:
- Búsqueda instantánea por nombre, categoría y descripción.
- Filtro por categoría.
- Ordenamiento por precio: menor a mayor y mayor a menor.
- Botón para limpiar todos los filtros.
- La búsqueda del encabezado también abre el catálogo con el término ingresado.
- Los filtros funcionan en el navegador con JavaScript; no requieren backend.


DETALLE INDIVIDUAL DE PRODUCTOS
- Cada producto tiene una página propia dentro de pages/: detalle-asiento-auto.html, detalle-cuna-madera.html, detalle-coche-compacto.html, detalle-cama-cuna.html, detalle-organizador.html y detalle-movil-musical.html.
- Las tarjetas del catálogo y los productos destacados incluyen el enlace "Ver detalles".
- La ficha muestra galería interactiva, descripción ampliada, características, precio referencial y selector de cantidad.
- El botón "Añadir al carrito" agrega la cantidad seleccionada al carrito local (localStorage).
- El archivo js/detalle-producto.js controla la galería y la ficha. Los datos se mantienen en js/productos.js.
- Las fotografías de la galería son referencias visuales derivadas de la imagen de catálogo; reemplaza las URLs de la propiedad galeria de cada producto por fotografías adicionales del artículo cuando dispongas de ellas.
- Las descripciones y características son ilustrativas para el proyecto académico; no sustituyen fichas técnicas del fabricante.
