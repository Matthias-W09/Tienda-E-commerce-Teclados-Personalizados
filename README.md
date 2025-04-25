# Presentado por:
- Carlos Aguirre  
- Javier Donetch  
- Matías Romero  

# Tienda-E-commerce-Teclados-Personalizados

---

## Índice

1. [Resumen del Proyecto](#resumen-del-proyecto)  
2. [Requerimientos](#requerimientos)  
3. [Arquitectura de la Información](#arquitectura-de-la-información)  
4. [Diseño de prototipos](#prototipo-de-diseño)  
5. [Librerías en Angular](#librerías-usadas-con-angular)  
6. [Tecnologías](#tecnologías)

---

## Resumen del Proyecto

**Tienda-E-commerce-Teclados-Personalizados** es una plataforma web desarrollada con **Ionic + Angular** que permite a los usuarios armar su propio teclado mecánico seleccionando componentes como switches, keycaps, PCB y carcasa.

El proyecto está orientado a ofrecer una experiencia interactiva tanto para el cliente (usuario final), como para los administradores del sistema. Incluye funcionalidades como constructor de teclado, gestión de productos, filtros de búsqueda, generación de promociones y más.

Esta entrega contempla el diseño de la arquitectura, definición de requerimientos, prototipado en Figma y desarrollo de la estructura inicial del frontend.

---

## Requerimientos

### Roles del Sistema

- **Administrador**: Control total sobre el sistema.
- **Editor**: Puede crear, editar y eliminar productos.
- **Visualizador**: Solo puede ver información de productos.

---

## 🧩 Requerimientos Funcionales (RF)

### RF1: Personalización Interactiva de Teclados
**Rol:** Usuario  
**Descripción:**  
El sistema debe incluir una sección llamada **"Arma tu teclado"**, accesible desde el menú principal. Al ingresar, el usuario podrá personalizar su teclado mediante una interfaz interactiva.

**Funcionalidades:**
- **RF1.1**: Selección de componentes por categoría (Base, Switches, Keycaps, Cable, Accesorios) desde una lista desplegable o vista en cuadrícula.
- **RF1.2**: Botón de ayuda dentro de cada categoría con explicación funcional de cada tipo y subtipo (ej: *Switches táctiles, clicky...*).
- **RF1.3**: Validación automática de compatibilidad entre componentes (ej: alertas si un switch no es compatible con la base).
- **RF1.4**: Visualización de precio dinámico que se actualiza en tiempo real según las selecciones.
- **RF1.5**: Opción para guardar la configuración (en la cuenta del usuario o como enlace temporal).

---

### RF2: Generación Dinámica de Códigos Promocionales
**Rol:** Admin  
**Descripción:**  
El sistema debe proporcionar un **panel administrativo exclusivo** para la gestión de códigos promocionales.

**Funcionalidades:**
- **RF2.1**: Crear códigos promocionales con:
  - Código (manual o auto-generado).
  - Tipo de descuento (porcentaje o monto fijo).
  - Fecha de vigencia (inicio y fin).
  - Límite de usos (global o por usuario).
  - Filtros para productos o categorías aplicables.
- **RF2.2**: Editar o eliminar códigos existentes con confirmación para evitar borrado accidental.

---

### RF3: Tienda por Tipo de Producto
**Rol:** Usuario  
**Descripción:**  
El sistema debe incluir una **sección de tienda**, accesible desde el menú principal, donde los usuarios puedan explorar productos por tipo.

**Funcionalidades:**
- **RF3.1**: Selección por categorías (Base, Switches, Keycaps, Cable, Accesorios).
- **RF3.2**: Botón de ayuda por categoría con explicación de cada tipo y subtipo.
- **RF3.3**: Ordenar productos por criterios (ej: precio, popularidad).

---

### RF4: Formulario de Combos y Ofertas
**Rol:** Admin  
**Descripción:**  
El sistema debe permitir crear y administrar **combos y ofertas especiales** a través de un formulario interactivo.

**Funcionalidades:**
- **RF4.1**: Creación y edición de combos con:
  - Nombre del combo (ej: *Kit Inicio*).
  - Selección de productos incluidos (con búsqueda por nombre/SKU y límite de ítems).
  - Campo de descuento (porcentaje o monto fijo).
  - Opción de "Descuento recomendado" según márgenes.
  - Fecha de inicio/fin (con calendario).
  - Opción "Oferta relámpago" (duración por horas).
- **RF4.2**: Reglas avanzadas:
  - Restricción por tipo de usuario (ej: usuarios con al menos 1 compra).
  - Límite de stock por combo.
  - Prevención de promociones superpuestas.

---

### RF5: Selector de Estética Inicial
**Rol:** Usuario  
**Descripción:**  
En el primer acceso, el sistema debe mostrar una **pantalla de bienvenida** para elegir un estilo visual predeterminado para la interfaz.

---

### RF6: Formulario de Nuevo Producto
**Rol:** Admin  
**Descripción:**  
El sistema debe incluir un formulario interactivo para agregar productos al catálogo con validaciones en tiempo real.

**Funcionalidades:**
- **RF6.1**: Campos requeridos:
  - Nombre del producto.
  - Tipo de producto (Base, Switches, Keycaps, Accesorios, Prearmado).
  - Subtipo (ej: switches *clicky*, *tactile*).
  - Precio.
  - Stock inicial (≥ 0).
  - Compatibilidad con otras partes.
  - Descripción del producto.
  - Imagen (al menos una).

---

### RF7: Carrusel de Productos y Productos Destacados
**Rol:** Usuario  
**Descripción:**  
El sistema debe mostrar un **carrusel visualmente atractivo** de productos dentro de la página principal (web y móvil).

**Funcionalidades:**
- **RF7.1**: Carrusel de productos:
  - Desplazamiento horizontal.
  - Tarjeta con imagen, nombre, precio y etiqueta (ej: *Nuevo*, *En oferta*).
  - Navegación por flechas o desplazamiento táctil.
  - Lazy loading.
  - Botón "Ver más" hacia el catálogo completo.
- **RF7.2**: Carrusel de productos destacados:
  - Sección especial con productos seleccionados por admin.
  - Resaltado visual con etiqueta *Destacado*.
  - Misma navegación e interacción que el carrusel general.

---

## 🔄 Flujos de Navegación del Landing Page
link de apoyo https://www.canva.com/design/DAGlO_EwYPM/n5XAu4L9lEuTTDRuS4Kz9w/edit?utm_content=DAGlO_EwYPM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton

### 🧩 Flujo 1: Visualización de Productos Destacados
**🎯 Objetivo:** Ver productos destacados.  
**Pasos:**
1. El usuario accede al landing page.
2. Desliza o hace clic en el carrusel de productos destacados.
3. Visualiza distintos teclados destacados.
4. (Opcional) Hace clic en un producto → Redirige a la página de detalle del producto.

---

### 🔍 Flujo 2: Explorar Partes del Teclado
**🎯 Objetivo:** Conocer y explorar los componentes de un teclado.  
**Pasos:**
1. El usuario ve la sección **"¿Qué deseas comprar?"**.
2. Selecciona una categoría: *Keycaps*, *Switches* o *Marco*.
3. Hace clic en una imagen o botón → Es redirigido a una sección o página con más información y productos relacionados.

---

### ⚙️ Flujo 3: Armar tu Teclado
**🎯 Objetivo:** Personalizar un teclado desde cero.  
**Pasos:**
1. El usuario accede a la sección **"Arma tu teclado"**.
2. Selecciona una modalidad:
   - Armar en solitario.
   - Armar con ayuda.
3. Es redirigido al configurador de teclado.
4. Selecciona partes, estética y preferencias.
5. Agrega el teclado al carrito.

---

### 🎨 Flujo 4: Selección de Estética
**🎯 Objetivo:** Elegir un estilo visual para el teclado.  
**Pasos:**
1. El usuario llega a la sección **"Selecciona tu estética"**.
2. Hace clic en una estética (ej: Asiática, Steampunk, etc.).
3. Es redirigido a una galería de estilos o vista filtrada de productos con esa estética.
4. Puede previsualizar cómo lucen los teclados con esa temática.

---

### 💬 Flujo 5: Opiniones de Usuarios
**🎯 Objetivo:** Ver la experiencia de otros usuarios.  
**Pasos:**
1. El usuario navega a la sección **"Opiniones Usuarios"**.
2. Lee las reseñas visibles publicadas por otros compradores.

---

### 🔗 Flujo 6: Navegación desde el Footer
**🎯 Objetivo:** Acceder a otras secciones del sitio o medios de contacto.  
**Pasos:**
1. El usuario baja hasta el **footer** del landing.
2. Puede acceder a:
   - **Inicio**
   - **Ayuda**
   - **Más vendidos**
   - **Contacto** (correo o teléfono)

---

### 🛒 Flujo 7 (Implícito): Comprar
**🎯 Objetivo:** Comprar un producto personalizado o individual.  
**Pasos posibles:**
- Después de armar un teclado → Agregar al carrito.
- Desde productos destacados → Ver detalle → Agregar al carrito.
- Desde categorías de partes → Seleccionar parte → Agregar al carrito.

---

## Prototipo de Diseño

[Figma - Prototipo de Gestión de Productos](https://www.figma.com/team_invite/redeem/u9JntJiKIwNNdHLfrAdPMs)

---

## Librerías usadas con Angular

- **Bootstrap** – para estilos responsivos y componentes reutilizables

---

## Tecnologías

- **Ionic Framework** (v7+)
- **Angular** (v15+)
- **TypeScript**
- **Figma** (para diseño de interfaces y prototipado)
- **Capacitor**
- **SASS**
- **RxJS**
- **Angular Router**

---
