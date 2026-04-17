# Somos Hispanidad — Proyecto Web Renovado

Sitio web renovado de **Somos Hispanidad**, asociación cultural dedicada a la verdad histórica y la herencia cultural hispana.

---

## Información del proyecto

| Campo | Valor |
|---|---|
| **Modo de migración** | Equilibrada |
| **Criterio de entrega** | Multipage (5 páginas) |
| **Dominio de prueba** | maristasdel76.com |
| **Dominio definitivo** | [placeholder pendiente de validación] |
| **Paleta** | Sepia elegante (#F5ECD7 / #2C1A0E / #C17F3A) |
| **Tipografías** | Playfair Display (títulos) + Lato (cuerpo) |

---

## Estructura de archivos

```
somos-hispanidad/
├── index.html           → Página principal (home)
├── quienes-somos.html   → Quiénes somos / misión / valores
├── eventos.html         → Agenda de eventos (3 eventos)
├── articulos.html       → Artículos e investigación
├── contacto.html        → Contacto + formulario mailto
├── styles.css           → Estilos globales (toda la web)
├── script.js            → JS (nav móvil, animaciones, form)
├── README.md            → Este archivo
└── images/
    ├── logo.png          ← Coloca aquí el PNG del logo oficial
    ├── hero_visual.png   ← Imagen heroica generada
    └── about_image.png   ← Imagen "Quiénes Somos" generada
```

---

## Cómo editar textos

### Hero (index.html)
- **Headline principal:** busca `<h1>Orgullosos de nuestra historia`
- **Subtítulo:** busca `<p class="hero-sub">`
- **Lema:** busca `<p class="hero-lema">`

### Pilares / Valores
- En `index.html` y `quienes-somos.html`, busca `<div class="pilar-card">`
- Edita el `<h3>` (título) y el `<p>` (descripción) de cada pilar

### Eventos
- Fuente principal: `eventos.html` → cada `<article class="evento-item">`
- Preview en portada: `index.html` → `<div class="eventos-grid">`
- Para añadir un nuevo evento, duplica un bloque `<article class="evento-item">` en `eventos.html`

### Artículos
- Fuente principal: `articulos.html` → cada `<article class="articulo-full-card">`
- Preview en portada: `index.html` → `<div class="articulos-grid">`

### Datos de contacto
- Aparecen en el `<footer>` de todas las páginas y en `contacto.html`
- Busca `contacto@somoshispanidad.es` y `28250 Torrelodones` para localizarlos

---

## Cómo editar colores

Abre `styles.css` y modifica las **variables CSS** en el bloque `:root` (líneas iniciales):

```css
:root {
  --bg:          #F5ECD7;   /* Fondo sepia cálido — fondo principal */
  --bg-dark:     #2C1A0E;   /* Marrón oscuro — nav, footer, bloques oscuros */
  --bg-card:     #FAF5EE;   /* Crema claro — tarjetas y formularios */
  --bg-section:  #EDE0C4;   /* Sepia medio — secciones alternas */
  --accent:      #C17F3A;   /* Dorado hispánico — COLOR PRINCIPAL */
  --accent-dark: #9B5E1E;   /* Dorado oscuro — hover de botones */
  --text:        #3D2B1F;   /* Texto principal oscuro cálido */
  --text-muted:  #8B7355;   /* Texto secundario */
  --border:      #D4B896;   /* Bordes y separadores */
}
```

---

## Cómo editar imágenes

- **Logo:** Reemplaza `images/logo.png` con tu archivo PNG oficial
- **Hero:** Reemplaza `images/hero_visual.png`
- **Quiénes somos:** Reemplaza `images/about_image.png`
- El hero usa `background-image: url('images/hero_visual.png')` en `styles.css` → clase `.hero-bg`

---

## SEO — Dónde editar por página

En el `<head>` de cada archivo HTML:

```html
<!-- TÍTULO DE PÁGINA -->
<title>Somos Hispanidad — [descripción específica de página]</title>

<!-- META DESCRIPTION -->
<meta name="description" content="[Descripción SEO de 150-160 caracteres]">

<!-- URL CANÓNICA -->
<link rel="canonical" href="https://[tu-dominio]/[página].html">

<!-- OPEN GRAPH (redes sociales) -->
<meta property="og:title"       content="[Título OG]">
<meta property="og:description" content="[Descripción OG]">
<meta property="og:url"         content="https://[tu-dominio]/[página].html">
<meta property="og:image"       content="https://[tu-dominio]/images/[imagen].png">
```

---

## Tracking — Cómo integrar IDs reales

En cada `.html`, dentro del `<head>`, busca:

```html
<!-- [placeholder pendiente de validación] Google Analytics GA4 -->
<!-- <script async src="...?id=G-XXXXXXXXXX"></script> -->
```

Reemplaza `G-XXXXXXXXXX` con tu ID real de GA4 y **descomenta** ambas líneas del script.

---

## Formulario de contacto

El formulario en `contacto.html` usa **mailto simple** gestionado por JavaScript (`script.js`).

Al enviar, el script construye una URL `mailto:` con el asunto y el cuerpo, y abre el cliente de correo del usuario.

- **Dirección de destino:** `contacto@somoshispanidad.es`
- Para cambiar el email de destino, edita `script.js` → busca `mailto:contacto@somoshispanidad.es`

---

## Cómo desplegar

### Opción A — GitHub + Vercel (recomendado)

```bash
# 1. Inicializar git en la carpeta del proyecto
git init
git add .
git commit -m "Primer deploy - Somos Hispanidad renovada"

# 2. Conectar con GitHub
git remote add origin https://github.com/[tu-usuario]/somos-hispanidad.git
git push -u origin main

# 3. En vercel.com → Import Project → selecciona el repo
# Vercel detecta automáticamente proyecto estático
# Deploy automático en cada git push
```

### Opción B — Hosting estático (FTP)

Sube **todos los archivos** (incluida la carpeta `images/`) por FTP al directorio raíz de tu dominio. Asegúrate de que `index.html` queda en la raíz.

---

## Placeholders pendientes de validación

| Placeholder | Ubicación | Acción necesaria |
|---|---|---|
| `G-XXXXXXXXXX` | `<head>` de todos los HTML | Sustituir por ID real de GA4 |
| Dominio definitivo | Todas las URLs canónicas y OG | Reemplazar `maristasdel76.com` por el dominio final |
| `logo.png` de alta calidad | `images/logo.png` | Colocar el PNG oficial del logo |
| URLs de reserva de eventos | `eventos.html` | Verificar que los enlaces a somoshispanidad.es siguen activos |
| Aviso Legal | Footer de todos los HTML | Confirmar URL del `.docx` o sustituir por página estática |
| [No verificable] GTM / Meta Pixel | `<head>` de todos los HTML | Añadir si se dispone del ID correspondiente |
