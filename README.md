# Gym Routines App

Application to create and manage personalized gym workout routines.

## Project Structure

```
.
├── backend/                # API Backend
│   ├── src/
│   │   ├── controllers/   # Route controllers
│   │   ├── models/        # Data models
│   │   ├── routes/        # Route definitions
│   │   ├── services/      # Business logic
│   │   ├── middleware/    # Custom middleware
│   │   ├── config/        # Configuration
│   │   └── utils/         # Utilities
│   └── tests/             # Backend tests
│
├── frontend/              # Frontend Application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Pages/Views
│   │   ├── services/      # API services
│   │   ├── hooks/         # Custom hooks
│   │   ├── context/       # Context API
│   │   ├── utils/         # Utilities
│   │   └── assets/        # Static resources
│   └── public/            # Public files
│
├── database/              # Database
│   ├── migrations/        # Migrations
│   └── seeds/             # Test data
│
└── docs/                  # Documentation

```

## Key Features

- Create and customize workout routines
- Exercise management by muscle groups
- Progress tracking
- Weekly/monthly planning
- Workout history

## Technologies

- **Backend**: Node.js + Express + TypeScript
- **Frontend**: React + TypeScript
- **Database**: PostgreSQL/MongoDB
- **Authentication**: JWT

## Installation

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd frontend
npm install
```

## Development

```bash
# Run backend
cd backend
npm run dev

# Run frontend
cd frontend
npm run dev
```

## License

MIT
