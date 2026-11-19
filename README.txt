PEQUEMUNDO — PROYECTO FRONTEND
================================

Tienda virtual académica de productos para bebés y niños. El proyecto usa
HTML5, CSS externo, preprocesadores LESS y SASS, y el framework Foundation
CSS 6.8.1.

------------------------------------------------
1. CÓMO VISUALIZAR EL PROYECTO
------------------------------------------------
1. Abre la carpeta PequeMundo en Visual Studio Code.
2. Abre index.html con Live Server.
3. Navega con el menú superior o con la sección "Recursos del proyecto"
   del inicio.

Las fotografías se cargan desde Unsplash y los iconos desde Font Awesome,
por lo que se necesita conexión a Internet. Los archivos de audio y video
están guardados en la carpeta media/ y funcionan sin conexión.

------------------------------------------------
2. ESTRUCTURA
------------------------------------------------
index.html                     Página de inicio
pages/                         27 páginas internas
css/estilos.css                Estilos base (10 %)
css/estilos-less.css           Compilado de LESS (15 %)
css/estilos-sass.css           Compilado de SASS (15 %)
less/estilos.less              Fuente LESS (variables, mixins, anidación)
scss/estilos.scss              Fuente SASS principal
scss/_variables.scss           Variables SASS
scss/_mixins.scss              Mixins SASS
scss/_componentes.scss         Componentes de productos y WhatsApp
scss/_animaciones.scss         Animaciones, transiciones y transformaciones
scss/_foundation.scss          Rejilla y componentes Foundation
scss/_responsive.scss          Media queries
js/productos.js                Datos del catálogo
js/main.js                     Búsqueda, formularios y WhatsApp
js/carrito.js                  Carrito con localStorage
js/detalle-producto.js         Galería y ficha de producto
media/                         Audio, video y subtítulos
package.json                   Scripts de compilación

Páginas internas:
- Catálogo y categorías: catalogo.html, ofertas.html, accesorios.html,
  asientos-seguridad.html, camas-cuna.html, coches-bebes.html,
  cunas-bebes.html, cunas-infantiles.html.
- Fichas individuales: detalle-asiento-auto.html, detalle-cama-cuna.html,
  detalle-coche-compacto.html, detalle-cuna-madera.html,
  detalle-movil-musical.html, detalle-organizador.html,
  detalle-producto.html (ficha genérica con ?id=).
- Formularios: contacto.html, clientes.html, reclamos.html, login.html,
  registro.html.
- Contenido y recursos: nosotros.html, blog.html, tutoriales.html,
  tablas.html, marcos.html, frames-demo.html, carrito.html.

------------------------------------------------
3. CUMPLIMIENTO DE LA CONSIGNA
------------------------------------------------
Tecnologías de estilos
- LESS: less/estilos.less se compila en css/estilos-less.css. Usa variables,
  mixins, anidación y funciones de color (fade).
- SASS: scss/estilos.scss importa parciales con variables, mixins,
  anidación y módulos por tema. Se compila en css/estilos-sass.css.
- Foundation CSS: se enlaza el CDN en 27 páginas (todas salvo el frameset
  frames-demo.html). En tutoriales.html se
  usan grid-x/cell, tabs, accordion, reveal, label, badge, progress y clases
  de visibilidad. En blog.html se usan callout, label y badge. Las páginas de
  catálogo y productos usan grid-x/cell y button dentro del diseño de la
  tienda.

HTML
- 28 páginas (mínimo exigido: 14).
- Estructura completa: DOCTYPE, html lang, head, meta charset, viewport,
  description, author, keywords, favicon, body.
- Etiquetas de texto: h1-h3, p, strong, em, br, blockquote, ul, ol, li,
  dl, dt, dd, figure, figcaption, code, small.
- Encabezado con menú, cuerpo principal y pie de página en todas las
  páginas del sitio.
- Formularios completos: contacto (consulta), clientes (ficha con datos,
  dirección y preferencias), reclamos (libro de reclamaciones), login y
  registro. Incluyen fieldset, legend, input de texto, email, tel, date,
  password, number, range, file, select, radio, checkbox, textarea y
  validación HTML5.
- Multimedia: en tutoriales.html se usan imágenes con picture/srcset,
  galería de Foundation, audio MP3, video de un bebé con póster y
  subtítulos VTT, además de un icono SVG. Todos los recursos están
  relacionados con el cuidado infantil.
- Tablas: caption, colgroup, col, thead, tbody, tfoot, th con scope,
  colspan y estilos propios.
- Marcos: iframes de página interna, video y mapa; pagina marcos.html.
  Frames clásicos: frames-demo.html con frameset y frame.
- Marquee: etiqueta marquee en marcos.html y marquesina equivalente
  animada con CSS.

CSS, LESS y SASS
- CSS externo: todos los estilos están en archivos enlazados. No se usan
  atributos style en el HTML; incluso la barra de progreso de Foundation
  toma su ancho de una clase propia.
- LESS externo: formularios, tablas, multimedia, iframes, marquesina,
  listas, blog, recursos y ajustes responsivos.
- SASS externo: animaciones, transiciones, transformaciones, rejilla de
  Foundation y media queries.
- Animaciones: keyframes aparecer, flotar, pulso-suave y girar-icono;
  transiciones en tarjetas, botones y galería; transformaciones de escala,
  rotación y desplazamiento.
- Diseño responsivo: media queries en css/estilos.css,
  css/estilos-less.css y css/estilos-sass.css, con imágenes adaptativas y
  componentes que cambian de tamaño.
- Flexbox y Grid: se usan en el sitio y se refuerzan con la rejilla
  grid-x/cell de Foundation.

------------------------------------------------
4. COMPILAR LESS Y SASS
------------------------------------------------
Requisito: Node.js instalado.

npm install
npm run build        Compila LESS y SASS
npm run build:less   Solo LESS
npm run build:sass   Solo SASS
npm run watch:less   Vigila el archivo LESS
npm run watch:sass   Vigila el archivo SASS

Los archivos que se enlazan desde el HTML son los de la carpeta css/.
No edites css/estilos-less.css ni css/estilos-sass.css a mano: son
resultados de compilación. Edita less/estilos.less y scss/*.scss.

También puedes usar la extensión "Live Sass Compiler" de VS Code,
configurando la salida en css/estilos-sass.css.

------------------------------------------------
5. FOUNDATION CSS
------------------------------------------------
Versión: 6.8.1 mediante CDN.
CSS: https://cdn.jsdelivr.net/npm/foundation-sites@6.8.1/dist/css/foundation.min.css
JS:  https://cdn.jsdelivr.net/npm/foundation-sites@6.8.1/dist/js/foundation.min.js
jQuery: https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js

El JavaScript de Foundation se carga en tutoriales.html, que usa tabs,
accordion y reveal integrados en las guías de cuidado. El resto del sitio
usa las clases de rejilla, botones, etiquetas y visibilidad responsiva.

------------------------------------------------
6. MULTIMEDIA DE TUTORIALES
------------------------------------------------
- media/video-sueno-bebe.mp4: video libre de Pexels por Kevin Sparling
  (https://www.pexels.com/video/sleeping-newborn-baby-13271379/).
- media/poster-sueno-bebe.jpg: fotograma del video anterior.
- media/cancion-cuna.mp3: "Wiegenlied" de Brahms, grabación de 1906
  procedente de Internet Archive, dominio público.
- media/subtitulos-sueno.vtt: subtítulos en español con recomendaciones
  de sueño seguro.
- Las fotografías son de Unsplash y se usan con fines académicos.

Créditos de fotografías:
- Asiento de seguridad: https://unsplash.com/photos/k03ih6IqkDY
- Habitación con cuna: https://unsplash.com/photos/0gDtdOVhOLQ
- Cochecito: https://unsplash.com/photos/oHZaF7rbVZk
- Dormitorio infantil: https://unsplash.com/photos/FSsEIfS257Q
- Accesorios y ropa: https://unsplash.com/photos/wFHaSqNxHm4
- Juego y juguetes: https://unsplash.com/photos/hpgqbwjJ4pM

------------------------------------------------
7. NOTAS ACADÉMICAS
------------------------------------------------
- Los precios son ficticios y referenciales.
- Los formularios validan en el navegador y muestran un mensaje de
  demostración; no envían datos a un servidor.
- El carrito se guarda en localStorage.
- frames-demo.html usa frameset solo como demostración de una tecnología
  obsoleta; el sitio real utiliza iframes y diseño responsivo.
- El libro de reclamaciones es una simulación académica y no constituye
  un canal legal de atención.
