# Gym Routines App

Aplicación para crear y gestionar rutinas de gimnasio personalizadas.

## Estructura del Proyecto

```
.
├── backend/                # API Backend
│   ├── src/
│   │   ├── controllers/   # Controladores de rutas
│   │   ├── models/        # Modelos de datos
│   │   ├── routes/        # Definición de rutas
│   │   ├── services/      # Lógica de negocio
│   │   ├── middleware/    # Middleware personalizado
│   │   ├── config/        # Configuración
│   │   └── utils/         # Utilidades
│   └── tests/             # Tests del backend
│
├── frontend/              # Aplicación Frontend
│   ├── src/
│   │   ├── components/    # Componentes React
│   │   ├── pages/         # Páginas/Vistas
│   │   ├── services/      # Servicios API
│   │   ├── hooks/         # Custom hooks
│   │   ├── context/       # Context API
│   │   ├── utils/         # Utilidades
│   │   └── assets/        # Recursos estáticos
│   └── public/            # Archivos públicos
│
├── database/              # Base de datos
│   ├── migrations/        # Migraciones
│   └── seeds/             # Datos de prueba
│
└── docs/                  # Documentación

```

## Características Principales

- Crear y personalizar rutinas de entrenamiento
- Gestión de ejercicios por grupos musculares
- Seguimiento de progreso
- Planificación semanal/mensual
- Historial de entrenamientos

## Tecnologías

- **Backend**: Node.js + Express + TypeScript
- **Frontend**: React + TypeScript
- **Base de datos**: PostgreSQL/MongoDB
- **Autenticación**: JWT

## Instalación

```bash
# Instalar dependencias del backend
cd backend
npm install

# Instalar dependencias del frontend
cd frontend
npm install
```

## Desarrollo

```bash
# Ejecutar backend
cd backend
npm run dev

# Ejecutar frontend
cd frontend
npm run dev
```

## Licencia

MIT
