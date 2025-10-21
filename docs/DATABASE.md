# Database Schema

## Tables

### users
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### routines
```sql
CREATE TABLE routines (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### exercises
```sql
CREATE TABLE exercises (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  muscle_group VARCHAR(100) NOT NULL,
  equipment VARCHAR(100),
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### routine_exercises
```sql
CREATE TABLE routine_exercises (
  id SERIAL PRIMARY KEY,
  routine_id INTEGER REFERENCES routines(id) ON DELETE CASCADE,
  exercise_id INTEGER REFERENCES exercises(id) ON DELETE CASCADE,
  sets INTEGER NOT NULL,
  reps INTEGER NOT NULL,
  rest_seconds INTEGER,
  order_index INTEGER NOT NULL,
  UNIQUE(routine_id, order_index)
);
```

### workouts
```sql
CREATE TABLE workouts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  routine_id INTEGER REFERENCES routines(id),
  workout_date DATE NOT NULL,
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### workout_exercises
```sql
CREATE TABLE workout_exercises (
  id SERIAL PRIMARY KEY,
  workout_id INTEGER REFERENCES workouts(id) ON DELETE CASCADE,
  exercise_id INTEGER REFERENCES exercises(id),
  set_number INTEGER NOT NULL,
  reps INTEGER NOT NULL,
  weight DECIMAL(6,2),
  completed BOOLEAN DEFAULT FALSE
);
```

## Relationships

- A user can have multiple routines
- A routine belongs to a user
- A routine can include multiple exercises
- An exercise can be in multiple routines
- A workout records the execution of a routine on a specific date
- workout_exercises records the details of each set performed
