# 🍲 CuscoEats - Sistema de Gestión de Pedidos de Comida Local

> **Caso Práctico:** Startup en Cusco para la gestión ágil de pedidos de comida tradicional local.  
> **Curso:** Ingeniería de Software  
> **Institución:** Universidad Nacional de San Antonio Abad del Cusco (UNSAAC)

---

## 📌 1. Descripción del Proyecto

**CuscoEats** es un prototipo inicial de plataforma web diseñado para una startup gastronómica en la ciudad del Cusco. Permite a los usuarios y comensales explorar la carta de platos tradicionales cusqueños (como Chiri Uchu, Trucha Frita del Valle Sagrado, Lechón Cusqueño y Choclo con Queso) y registrar pedidos en tiempo real con cálculo automático del total a pagar.

Este repositorio marca el punto de partida del versionamiento formal del código fuente del equipo de desarrollo, siguiendo las mejores prácticas con Git y GitHub.

---

## 🚀 2. Estructura del Proyecto

El proyecto está organizado en una arquitectura frontend inicial ligera y modular:

```text
laboratorio1/
├── index.html        # Estructura semántica de la página y catálogo de pedidos
├── styles.css        # Hoja de estilos moderna y adaptable (responsive)
├── app.js            # Lógica interactiva para la adición y cálculo de pedidos
└── README.md         # Documentación oficial del proyecto y actividades Git
```

---

## 💻 3. Tecnologías Empleadas

- **HTML5:** Semántica web moderna para la presentación del menú y órdenes.
- **CSS3:** Diseño responsivo con CSS Grid y Flexbox con paleta de colores cusqueña.
- **JavaScript (ES6):** Manipulación dinámica del DOM y gestión de estado de pedidos.
- **Git & GitHub:** Sistema de control de versiones distribuido y alojamiento de repositorio remoto.

---

## 🛠️ 4. Guía de Ejecución Local

Para visualizar y probar la página web en tu computadora:

1. Clona o descarga este repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```
2. Navega a la carpeta del proyecto:
   ```bash
   cd laboratorio1
   ```
3. Abre el archivo `index.html` en tu navegador web de preferencia (Chrome, Edge, Firefox), o utiliza la extensión **Live Server** en Visual Studio Code.

---

## 📋 5. Bitácora de Actividades Git Realizadas

A continuación se detallan los pasos de configuración y versionamiento aplicados en este laboratorio:

### Parte 1: Configuración de Entorno
Configuración del perfil del estudiante y credenciales globales de Git:
```bash
git config --global user.name "Tu Nombre"
git config --global user.email "11158@unsaac.edu.pe"
```

### Parte 2: Proyecto Inicial
Inicialización del repositorio local en la raíz del proyecto:
```bash
git init
```

### Parte 3: Versionamiento Local
Indexación de los archivos iniciales y creación del primer commit:
```bash
git add .
git commit -m "Primer commit: Estructura inicial del sistema de pedidos CuscoEats"
```

### Parte 4: Vinculación con Repositorio Remoto (GitHub)
Conexión con el repositorio remoto y sincronización de la rama principal:
```bash
git branch -M main
git remote add origin <URL_DE_TU_REPOSITORIO_GITHUB>
git push -u origin main
```

---

## 📷 6. Evidencias del Entregable

- **URL del Repositorio:** `[Pegar aquí el enlace de GitHub]`
- **Historial de Commits:**
  ```text
  commit [hash] (HEAD -> main, origin/main)
  Author: Tu Nombre <11158@unsaac.edu.pe>
  Date:   2026-10-01
  
      Primer commit: Estructura inicial del sistema de pedidos CuscoEats
  ```
- *(Adjunta capturas de pantalla de la terminal con `git log` y la vista del repositorio en GitHub para la entrega académica).*

---

## 👤 7. Datos del Autor / Estudiante
- **Correo Institucional:** 11158@unsaac.edu.pe
- **Universidad:** Universidad Nacional de San Antonio Abad del Cusco (UNSAAC)
