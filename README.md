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

## Requerimientos Funcionales por Rol

### Rol - Administrador

- **RF-ADM-01**: Puede registrar nuevos productos.
- **RF-ADM-02**: Puede editar productos existentes.
- **RF-ADM-03**: Puede eliminar productos del inventario (borrado lógico).
- **RF-ADM-04**: Puede configurar alertas de stock mínimo.
- **RF-ADM-05**: Puede gestionar usuarios y asignar roles.
- **RF-ADM-06**: Puede generar códigos promocionales.
- **RF-ADM-07**: Puede crear y gestionar combos/ofertas.

### Rol - Editor

- **RF-EDT-01**: Puede registrar nuevos productos con nombre, código, categoría, precio, stock y descripción.
- **RF-EDT-02**: Puede editar productos.
- **RF-EDT-03**: Puede buscar productos por diferentes criterios (nombre, código, categoría, stock, precio).

### Rol - Visualizador

- **RF-VIS-01**: Puede ver productos y sus detalles.
- **RF-VIS-02**: Puede usar filtros de búsqueda.
- **RF-VIS-03**: Puede acceder a la funcionalidad "Arma tu teclado".
- **RF-VIS-04**: Puede usar ayuda contextual y ver productos destacados.

---

## Requerimientos No Funcionales

- **RNF-01: Tiempo de respuesta**
  - El sistema debe responder a acciones clave en menos de 2 segundos en el 95% de los casos.

- **RNF-02: Seguridad**
  - Acceso mediante autenticación y roles.
  - Transacciones protegidas con HTTPS.
  - Almacenamiento seguro de contraseñas.

- **RNF-03: Usabilidad**
  - Interfaz intuitiva y accesible.
  - Diseño responsive (adaptable a web y móvil).

- **RNF-04: Compatibilidad**
  - Compatible con:
    - Google Chrome
    - Mozilla Firefox
    - Microsoft Edge
    - Safari

- **RNF-05: Escalabilidad**
  - Soporte para al menos 10,000 productos sin pérdida significativa de rendimiento.

---

## Arquitectura de la Información

[Estructura de Navegación - Whimsical](https://whimsical.com/escuelainf-4qgXnPptro4CqvEugsGNNZ)

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
