PEQUEMUNDO — PROYECTO FRONTEND ACADÉMICO
========================================

PequeMundo es una tienda virtual demostrativa orientada a productos para
bebés y niños. El sitio fue desarrollado con HTML5, CSS externo,
preprocesadores LESS y SASS, JavaScript y Foundation CSS 6.8.1.

Los precios, formularios y registro de datos son demostrativos. El proyecto
no procesa pagos ni envía información a un servidor real.


1. CONTENIDO DEL SITIO
----------------------

INICIO
- Presentación de la tienda
- Categorías y productos destacados
- Carrusel animado de marcas
- Accesos a catálogo, blog, tutoriales y comparativa

COMPRAS
- Catálogo con búsqueda, categorías y orden por precio
- Fichas individuales de producto
- Detalle dinámico mediante identificador
- Carrito con cantidades, subtotal y total
- Persistencia del carrito con localStorage

INFORMACIÓN
- Nosotros
- Blog de consejos
- Ofertas
- Tutoriales con video y audio
- Tabla comparativa de productos
- Demostración de frames
- Enlaces de contacto y redes sociales

FORMULARIOS
- Contacto
- Registro de clientes
- Inicio de sesión
- Libro de reclamaciones


2. EJECUCIÓN
------------

REQUISITOS
- Navegador web moderno
- Node.js y npm para recompilar LESS y SASS
- Live Server u otro servidor estático recomendado

INICIO RÁPIDO
1. Abre la carpeta del proyecto en Visual Studio Code.
2. Abre index.html con Live Server.
3. Explora el sitio desde el encabezado o desde los enlaces principales.

Los archivos principales se pueden abrir directamente, pero se recomienda
Live Server para que funcionen correctamente las rutas relativas y la carga
de recursos locales.

CONEXIÓN NECESARIA
- Las fotografías de Unsplash, Google Fonts, Font Awesome y Foundation CSS
  utilizan recursos CDN y requieren conexión a Internet.
- El video, el audio y los subtítulos de media/ funcionan desde archivos
  locales una vez abierto el proyecto.


3. COMPILACIÓN DE ESTILOS
-------------------------

Instala las dependencias:

    npm install

Comandos disponibles:

    npm run build        Compila LESS y SASS
    npm run build:less   Compila solo LESS
    npm run build:sass   Compila solo SASS
    npm run watch:less   Vigila el archivo LESS
    npm run watch:sass   Vigila el archivo SASS

El HTML enlaza los archivos compilados dentro de css/:

- css/estilos.css
- css/estilos-less.css
- css/estilos-sass.css

Edita las fuentes LESS y SASS; no modifiques directamente los CSS compilados
de las carpetas less y scss.


4. ESTRUCTURA REAL DEL PROYECTO
-------------------------------

index.html                     Página principal

pages/
  catalogo.html                Catálogo dinámico
  ofertas.html                 Ofertas
  nosotros.html               Historia y preguntas frecuentes
  blog.html                    Consejos y contenido embebido
  contacto.html               Formulario y mapa
  clientes.html               Registro de clientes
  reclamos.html               Libro de reclamaciones
  login.html                  Inicio de sesión
  tablas.html                 Tablas comparativas
  tutoriales.html             Video, audio y galería Foundation
  carrito.html                Carrito de compras
  frames-demo.html            Demostración académica de frames
  detalle-asiento-auto.html   Ficha individual
  detalle-cuna-madera.html    Ficha individual
  detalle-coche-compacto.html Ficha individual
  detalle-cama-cuna.html      Ficha individual
  detalle-organizador.html    Ficha individual
  detalle-movil-musical.html  Ficha individual
  detalle-producto.html       Ficha genérica por parámetro ?id=

css/
  estilos.css                 Estilos principales
  estilos-less.css            Resultado de la compilación LESS
  estilos-sass.css            Resultado de la compilación SASS

less/
  estilos.less                Variables, mixins, anidación y componentes
  estilos.css                 Copia o salida auxiliar LESS

scss/
  estilos.scss                Archivo principal SASS
  _variables.scss             Variables
  _mixins.scss                Mixins
  _componentes.scss           Tarjetas, botones y componentes
  _animaciones.scss           Keyframes y animaciones
  _foundation.scss            Personalización de Foundation
  _responsive.scss            Media queries y ajustes responsivos

js/
  productos.js                Catálogo y renderizado de tarjetas
  main.js                     Filtros, formularios y búsqueda
  carrito.js                  Operaciones del carrito
  detalle-producto.js         Galería y ficha dinámica

media/
  video-sueno-bebe.mp4        Video MP4
  poster-sueno-bebe.jpg       Póster del video
  subtitulos-sueno.vtt        Subtítulos en español
  cancion-cuna.mp3            Audio MP3


5. FRAMEWORK FOUNDATION CSS
---------------------------

Versión utilizada: Foundation Sites 6.8.1.

CDN CSS:
https://cdn.jsdelivr.net/npm/foundation-sites@6.8.1/dist/css/foundation.min.css

El sitio utiliza componentes y clases como:
- grid-x
- grid-margin-x / grid-margin-y
- cell
- grid-container
- callout
- button
- tabs
- accordion
- reveal
- close-button
- progress
- label y badge

El JavaScript de Foundation se carga en tutoriales.html para inicializar los
componentes interactivos disponibles en esa página.


6. TECNOLOGÍAS Y ELEMENTOS IMPLEMENTADOS
----------------------------------------

HTML5
- 19 páginas HTML en total: index.html y 18 páginas internas.
- Supera el mínimo solicitado de 14 páginas.
- Meta charset, viewport, descripción, idioma y favicon.
- Encabezado con menú, contenido principal y pie de página.
- Etiquetas semánticas y de texto: h1-h3, p, strong, em, br, blockquote,
  ul, ol, li, dl, dt, dd, figure, figcaption y code.
- Formularios con fieldset, legend, inputs, email, tel, date, password,
  number, range, select, radio, checkbox, file y textarea.
- Validación HTML5 y mensajes demostrativos procesados desde JavaScript.

CSS
- Hoja principal externa con variables, tipografía, iconos y personalización.
- Archivos LESS y SASS enlazados desde el HTML.
- Flexbox y Grid Layout.
- Media queries para equipos de escritorio, tabletas y teléfonos.
- Diseño responsivo para tablas, formularios, imágenes y galerías.
- Transiciones en tarjetas, enlaces y botones.
- Transformaciones al desplazarse, hacer hover o activar componentes.
- Animaciones mediante keyframes y carruseles CSS.

LESS
- Variables y colores personalizados.
- Mixins y estilos reutilizables.
- Anidación de selectores.
- Funciones de color como fade().
- Compilación hacia css/estilos-less.css.

SASS
- Archivo principal con @import de parciales.
- Variables globales y mixins.
- Componentes, animaciones, Foundation y responsive.
- Compilación hacia css/estilos-sass.css.

MULTIMEDIA
- Video MP4 con póster y subtítulos VTT en tutoriales.html.
- Audio MP3 de demostración.
- Imágenes locales y remotas.
- Iconos vectoriales de Font Awesome y SVG.
- Carrusel CSS de marcas.

TABLAS
- Caption, colgroup, col, thead, tbody y tfoot.
- Scope en encabezados de filas y columnas.
- Filas agrupadas y diseño responsivo.

IFRAMES Y FRAMES
- iFrames presentes en blog.html y contacto.html.
- frames-demo.html incluye frameset y frame como demostración académica del
  temario. Estas etiquetas pertenecen a HTML 4 y están obsoletas en HTML5.
  Los navegadores modernos pueden limitar su compatibilidad.
- En el resto del proyecto se utiliza una estructura HTML5 moderna.

MARQUESINA
- No se utiliza la etiqueta obsoleta <marquee>.
- Se implementan bandas de movimiento accesibles con CSS en blog.html,
  ofertas.html y index.html.
- Las animaciones pueden pausarse al pasar el cursor y respetan la preferencia
  prefers-reduced-motion cuando está disponible.


7. COMPROBACIÓN DE LA CONSIGNA
------------------------------

REQUERIMIENTO                          ESTADO
Más de 14 páginas HTML                 Cumple
HTML estructurado y semántico          Cumple
Menú, cuerpo y pie de página           Cumple
Etiquetas de texto y enlaces           Cumple
Formularios completos                  Cumple
Tablas completas y personalizadas      Cumple
Imágenes y recursos multimedia         Cumple
iFrames                                Cumple
Demostración de frames                 Cumple como HTML legado
Marquesina reemplazada por CSS         Cumple conceptualmente
LESS externo                           Cumple
SASS externo                           Cumple
Foundation CSS                         Cumple
CSS externo                            Cumple
Tipografía e iconos                    Cumple
Animaciones y transiciones             Cumple
Transformaciones                       Cumple
Diseño responsivo con media queries    Cumple
Flexbox y Grid Layout                  Cumple

DISTRIBUCIÓN DE ESTILOS
- No existe una obligación técnica de que los porcentajes sean una medida
  automática exacta. Los tamaños compilados aproximados son:
  CSS base: 53 %
  LESS: 27 %
  SASS: 20 %
- Esta distribución difiere de los porcentajes académicos de 10 %, 15 % y
  15 %, ya que los archivos compilados tienen tamaños diferentes. Los tres
  tipos de hoja están efectivamente presentes y enlazados desde el sitio.


8. DATOS Y FUNCIONALIDAD
------------------------

- El catálogo se define en js/productos.js.
- Los precios son referenciales y tienen formato PEN mediante Intl.
- El carrito guarda las cantidades en localStorage.
- Las calificaciones se guardan en el navegador.
- Los formularios muestran confirmaciones sin enviar datos a un servidor.
- La búsqueda y los filtros se procesan en el navegador.
- La ficha dinámica utiliza el parámetro ?id= en detalle-producto.html.


9. CRÉDITOS Y RECURSOS
----------------------

- Fotografías demostrativas: Unsplash.
- Iconos: Font Awesome.
- Tipografías: Google Fonts.
- Framework: Foundation Sites.
- Video: recurso público de demostración relacionado con el cuidado infantil.
- Audio: recurso musical de dominio público.
- Subtítulos: archivo VTT local creado para la actividad académica.


10. NOTAS ACADÉMICAS
--------------------

- Los productos y precios son ficticios.
- Las imágenes pueden variar según la disponibilidad del proveedor remoto.
- frames-demo.html conserva frameset y frame solo para demostrar el tema del
  curso. No es la tecnología recomendada para una página actual.
- El libro de reclamaciones no constituye un canal oficial de atención.
- Este README describe el estado real del proyecto y evita atribuirle páginas,
  estilos o funcionalidades que no existan en el repositorio.
