# API Documentation

## Endpoints

### Authentication

#### POST /api/auth/register
Register a new user

**Request:**
```json
{
  "email": "user@example.com",
  "password": "password123",
  "name": "John Doe"
}
```

#### POST /api/auth/login
Log in

**Request:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

### Routines

#### GET /api/routines
Get all user routines

#### POST /api/routines
Create a new routine

**Request:**
```json
{
  "name": "Strength Routine",
  "description": "Focus on compound exercises",
  "days": ["Monday", "Wednesday", "Friday"]
}
```

#### GET /api/routines/:id
Get a specific routine

#### PUT /api/routines/:id
Update a routine

#### DELETE /api/routines/:id
Delete a routine

### Exercises

#### GET /api/exercises
Get all exercises

#### POST /api/exercises
Create a new exercise

**Request:**
```json
{
  "name": "Bench Press",
  "muscleGroup": "Chest",
  "equipment": "Barbell",
  "description": "Compound exercise for chest"
}
```

### Workouts

#### GET /api/workouts
Get workout history

#### POST /api/workouts
Log a workout

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
