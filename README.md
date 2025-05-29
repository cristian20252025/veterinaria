# 🐶🐱 Gestión Asíncrona de una Veterinaria

Este proyecto consiste en una aplicación interactiva construida en **JavaScript puro**, diseñada para gestionar el registro y control de mascotas y sus dueños en una veterinaria. La aplicación funciona en consola a través de `prompt`, `alert` y `console.log`, e implementa funcionalidades sincrónicas y asincrónicas.

---

## 🎯 Objetivo

Aplicar conceptos de programación asincrónica en JavaScript (callbacks, Promesas, async/await) dentro de una aplicación estructurada y modular, sin necesidad de almacenamiento persistente ni backend.

---

## 📁 Estructura del Proyecto

📂 veterinaria-asincrona/
├── index.html
├── script.js
└── README.md


- `index.html`: Página base que carga el script.
- `script.js`: Lógica de la aplicación.
- `README.md`: Descripción del proyecto.

---

## 🚀 Tecnologías Usadas

- **HTML5**
- **JavaScript (ES6+)**
- **Funciones asíncronas:** `setTimeout`, Callbacks, Promesas, Async/Await.
- **Interfaz por consola:** `prompt`, `alert`, `console.log`.

---

## ⚙️ Funcionalidades Implementadas

### CRUD de Dueños y Mascotas (Parte 1 - Sincrónica y básica):

1. Registrar nuevo dueño
2. Registrar nueva mascota
3. Listar todas las mascotas
4. Buscar mascota por nombre
5. Actualizar estado de salud
6. Eliminar mascota por nombre
7. Ver mascotas asociadas a un dueño
8. Salir del programa

---

## ⏳ Funcionalidades Asíncronas (Parte 2)

| Funcionalidad                             | Técnica Asíncrona          | Simulación de retraso |
|-------------------------------------------|-----------------------------|------------------------|
| Registrar dueño                           | `setTimeout + callback`     | 1.5 segundos           |
| Registrar mascota                         | `setTimeout + callback`     | 2 segundos             |
| Buscar mascota por nombre                 | `Promise`                   | 1.5 segundos           |
| Actualizar estado de salud de una mascota| `async/await + setTimeout` | 1 segundo              |
| Eliminar mascota                          | `Promise + setTimeout`      | 2 segundos             |
| Ver mascotas de un dueño                  | `async/await + setTimeout` | 2 segundos             |

---

## 🧩 Organización del Código

- **Modularidad**: Todas las funciones están separadas por propósito.
- **Funciones flecha**: Utilizadas para operaciones como listar o buscar.
- **Validaciones**: Se validan entradas vacías, tipos de datos y asociaciones correctas.

---

## 🖼️ Capturas (Opcional)

*Puedes incluir capturas de pantalla del flujo en consola o GIFs mostrando la interacción.*

---

## 📌 Cómo ejecutar

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/veterinaria-asincrona.git

Realizado por: Cristian Miguel Perez Hernandez
