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

## Definicion de la navegacion y experiencia de usuario

Flujo 1: Visualización de productos destacados
Objetivo: Ver productos destacados.
Usuario entra al landing.
Desliza o hace clic en el carrusel de productos destacados.
Visualiza distintos teclados destacados.
Puede hacer clic en alguno (si está habilitado) → Redirige a página de producto o detalle.

Flujo 2: Explorar partes del teclado
Objetivo: Conocer y explorar los componentes de un teclado.
Usuario ve la sección “¿Qué deseas comprar?”.
Selecciona una categoría: Keycaps, Switches o Marco.
Clic en la imagen o botón → Redirige a una sección o página con más info y productos del componente seleccionado.

Flujo 3: Armar tu teclado
Objetivo: Personalizar un teclado desde cero.
Usuario ve la sección “Arma tu teclado”.
Selecciona una opción:
Armar en solitario.
Armar con ayuda.
Es redirigido a un configurador/personalizado de teclado.
Selecciona partes, estética y preferencias.
Agrega el teclado al carrito.

Flujo 4: Selección de estética
Objetivo: Elegir un estilo visual para el teclado.
Usuario llega a la sección “Selecciona tu estética”.
Hace clic en una estética (Asiática, Steampunk, etc.).
Es llevado a una galería de estilos o a una vista de teclados con esa estética.
Puede previsualizar cómo lucen los teclados con dicha temática.

Flujo 5: Opiniones de usuarios
Objetivo: Ver la experiencia de otros usuarios.
Usuario navega a “Opiniones Usuarios”.
Lee las reseñas visibles.

Flujo 6: Navegación desde el footer
Objetivo: Acceder a otras secciones o contactar.
Usuario baja hasta el footer.
Tiene acceso a:
Inicio
Ayuda
Más vendidos
Contacto por correo o teléfono

Flujo 7 (implícito): Comprar
Aunque no se ve completo en el landing, podría estar implícito desde cualquiera de estos flujos:
Después de armar un teclado → Agregar al carrito.
Después de ver un producto destacado → Ver detalle → Agregar al carrito.
Desde categoría de partes → Agregar partes al carrito.


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
