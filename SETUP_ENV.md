# SETUP_ENV.md

> Local Development Environment Setup  
> **Estado actual:** Proyecto sin base de datos (estructura en construcción)

---

## 1. Prerequisitos

| Herramienta | Versión mínima |
|-------------|----------------|
| Node.js     | ≥ 20.x         |
| pnpm        | ≥ 8.x          |
| Git         | ≥ 2.40         |

---

## 2. Instalación del Proyecto

```bash
git clone https://github.com/AQXION/aqxion-app.git
cd aqxion-app
pnpm install
```

---

## 3. Variables de Entorno

Copia el archivo base:

```bash
cp .env.example .env.local
```

Ejemplo de contenido mínimo (no funcional aún):

```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

> Aún no se requiere base de datos. Se añadirá cuando se active la lógica de backend o persistencia.

---

## 4. Ejecutar el entorno local

```bash
pnpm dev
```

Esto levanta el servidor en `http://localhost:3000`.

---

## 5. Notas

- Si ves errores relacionados a rutas o CSS, asegúrate de tener las últimas versiones de Tailwind y Next.js instaladas.
- Este archivo se actualizará cuando se integre la base de datos o autenticación.
