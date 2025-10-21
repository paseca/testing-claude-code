# API Documentation

## Endpoints

### Authentication

#### POST /api/auth/register
Registrar nuevo usuario

**Request:**
```json
{
  "email": "user@example.com",
  "password": "password123",
  "name": "John Doe"
}
```

#### POST /api/auth/login
Iniciar sesión

**Request:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

### Routines

#### GET /api/routines
Obtener todas las rutinas del usuario

#### POST /api/routines
Crear nueva rutina

**Request:**
```json
{
  "name": "Rutina de Fuerza",
  "description": "Enfoque en ejercicios compuestos",
  "days": ["Monday", "Wednesday", "Friday"]
}
```

#### GET /api/routines/:id
Obtener una rutina específica

#### PUT /api/routines/:id
Actualizar una rutina

#### DELETE /api/routines/:id
Eliminar una rutina

### Exercises

#### GET /api/exercises
Obtener todos los ejercicios

#### POST /api/exercises
Crear nuevo ejercicio

**Request:**
```json
{
  "name": "Press de Banca",
  "muscleGroup": "Pecho",
  "equipment": "Barra",
  "description": "Ejercicio compuesto para pecho"
}
```

### Workouts

#### GET /api/workouts
Obtener historial de entrenamientos

#### POST /api/workouts
Registrar un entrenamiento

**Request:**
```json
{
  "routineId": "123",
  "date": "2024-10-21",
  "exercises": [
    {
      "exerciseId": "456",
      "sets": 3,
      "reps": 10,
      "weight": 60
    }
  ]
}
```
