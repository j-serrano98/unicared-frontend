# Unicared Frontend

Frontend para la plataforma Unicared, construido con Next.js, React y Tailwind CSS.

## 📋 Requisitos Previos

- **Node.js**: Versión 18 o superior.
- **npm**: Gestor de paquetes de Node.js.

## 🚀 Instalación y Ejecución

Sigue estos pasos para levantar la aplicación en tu entorno local:

### 1. Navegar al directorio del frontend

```bash
cd unicared-frontend
```

### 2. Instalar dependencias

Instala todas las librerías necesarias definidas en `package.json`.

```bash
npm install
```

### 3. Configurar variables de entorno

Crea un archivo llamado `.env.local` en la raíz del frontend (`unicared-frontend/`) para configurar la conexión con el backend.

```env
# URL base de la API del backend (Asegúrate de incluir /api/v1 si corresponde)
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000/api/v1
```

### 4. Ejecutar el servidor de desarrollo

```bash
npm run dev
```

La aplicación estará disponible en: **http://localhost:3000**

## 📜 Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo con Hot Reload.
- `npm run build`: Compila la aplicación para producción.
- `npm run start`: Inicia el servidor en modo producción (requiere `build` previo).
- `npm run lint`: Ejecuta ESLint para analizar el código.

## 📦 Estructura Principal

- `src/app/`: Rutas y páginas de la aplicación (App Router).
- `src/components/`: Componentes reutilizables de React.
- `src/lib/api/`: Funciones para interactuar con el Backend.
- `public/`: Archivos estáticos (imágenes, fuentes, etc).
