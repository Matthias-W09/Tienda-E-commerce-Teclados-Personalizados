# Presentado por:
- Carlos Aguirre
- Javier Donetch
- Matias Romero
# Tienda-E-commerce-Teclados-Personalizados

##  Índice
1. [Resumen del Proyecto](#resumen-del-proyecto)
2. [Requerimientos](#requerimientos)
3. [Arquitectura de la Información](#arquitectura-de-la-información)
3. [Diseño de prototipos](#prototipo-de-diseño)
4. [Librerías en Angular](#liberías-usadas-con-angular)

## Resumen del Proyecto

---
## Requerimientos

## Roles del Sistema
- **Administrador**: Control total sobre el sistema.
- **Editor**: Puede crear, editar y eliminar productos.
- **Visualizador**: Solo puede ver información de productos.


## Requerimientos Funcionales por Rol

### Rol-Administrador

- **RF-ADM-01**: El administrador puede registrar nuevos productos.
- **RF-ADM-02**: El administrador puede editar cualquier producto existente.
- **RF-ADM-03**: El administrador puede eliminar productos del inventario (borrado lógico).
- **RF-ADM-04**: El administrador puede configurar alertas de stock mínimo.
- **RF-ADM-05**: El administrador puede gestionar usuarios y asignar roles.

### Rol-Editor

- **RF-EDT-01**: El editor puede registrar nuevos productos ingresando:
  - Nombre
  - Código (único)
  - Categoría
  - Precio
  - Stock (entero positivo)
  - Descripción
- **RF-EDT-02**: El editor puede editar productos existentes.
- **RF-EDT-03**: El editor puede aplicar filtros y buscar productos por nombre, código, categoría, stock o precio.

### Rol-Visualizador

- **RF-VIS-01**: El visualizador puede acceder a la lista de productos y sus detalles.
- **RF-VIS-02**: El visualizador puede utilizar la función de búsqueda y filtrado.

---

## Requerimientos No Funcionales

- **RNF-01: Tiempo de respuesta**
  - El sistema debe responder a operaciones clave (registro, edición, búsqueda) en menos de **2 segundos** en el 95% de los casos.

- **RNF-02: Seguridad**
  - Solo usuarios autenticados pueden ingresar al sistema.
  - Los roles deben restringir el acceso a funciones según permisos (Administrador, Editor, Visualizador).
  - Acceso protegido por HTTPS y almacenamiento seguro de contraseñas.

- **RNF-03: Usabilidad**
  - La interfaz debe ser intuitiva y fácil de usar.
  - Compatible con pantallas móviles y escritorio (responsive design).

- **RNF-04: Compatibilidad**
  - Compatible con los navegadores:
    - Google Chrome
    - Mozilla Firefox
    - Microsoft Edge
    - Safari

- **RNF-05: Escalabilidad**
  - El sistema debe ser capaz de manejar más de **10,000 productos** sin pérdida notable de rendimiento.


## Requerimientos No Funcionales

### RNF-01: Tiempo de respuesta
- El sistema debe responder a solicitudes de registro, edición o búsqueda en menos de **2 segundos** en el 95% de los casos.

### RNF-02: Seguridad
- Solo usuarios autenticados pueden gestionar productos.
- Debe haber control de roles: administrador, editor, visualizador.

### RNF-03: Usabilidad
- La interfaz debe ser intuitiva y fácil de usar.
- Debe seguir principios de diseño responsive para adaptarse a pantallas móviles y de escritorio.

### RNF-04: Compatibilidad
- El sistema debe funcionar correctamente en los siguientes navegadores:
  - Google Chrome (última versión)
  - Mozilla Firefox
  - Microsoft Edge
  - Safari

### RNF-05: Escalabilidad
- El sistema debe poder manejar al menos **10,000 productos** sin disminución significativa del rendimiento
---
## Arquitectura de la Información 
[Estructura de Navegación](https://whimsical.com/escuelainf-4qgXnPptro4CqvEugsGNNZ )

---

## Prototipo de diseño 
[Figma - Prototipo de Gestión de Productos](https://www.figma.com/team_invite/redeem/u9JntJiKIwNNdHLfrAdPMs)

---
## Liberías usadas con Angular
- Bootstrap

## Tecnologías
- **Ionic Framework** (v7+)
- **Angular** (v15+)
- **TypeScript**
- **Capacitor** (para plugins nativos, si aplica)
- **SASS** (para estilos)
- **RxJS** (para manejo reactivo)
- **Angular Router** (para navegación entre vistas)
