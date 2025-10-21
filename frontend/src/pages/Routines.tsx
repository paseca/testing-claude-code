import { useState } from 'react';
import CreateRoutineModal from '../components/CreateRoutineModal';
import './Routines.css';

interface Routine {
  id: string;
  name: string;
  duration: number; // in minutes
  createdAt: string;
  lastCompleted: string | null;
}

const Routines = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Mock data - will be replaced with API calls later
  const [routines] = useState<Routine[]>([
    {
      id: '1',
      name: 'Full Body Strength',
      duration: 60,
      createdAt: '2024-10-15',
      lastCompleted: '2024-10-20',
    },
    {
      id: '2',
      name: 'Upper Body Focus',
      duration: 45,
      createdAt: '2024-10-10',
      lastCompleted: '2024-10-19',
    },
    {
      id: '3',
      name: 'Leg Day',
      duration: 50,
      createdAt: '2024-10-08',
      lastCompleted: null,
    },
  ]);

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Never';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const formatDuration = (minutes: number) => {
    if (minutes < 60) return `${minutes} min`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return mins > 0 ? `${hours}h ${mins}min` : `${hours}h`;
  };

  return (
    <div className="routines-page">
      <div className="page-header">
        <div>
          <h1>Routines</h1>
          <p className="text-secondary">Manage your workout routines</p>
        </div>
        <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
          + New Routine
        </button>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Duration</th>
              <th>Created</th>
              <th>Last Completed</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {routines.length === 0 ? (
              <tr>
                <td colSpan={5} style={{ textAlign: 'center', padding: '3rem' }}>
                  <p className="text-muted">No routines yet. Create your first routine!</p>
                </td>
              </tr>
            ) : (
              routines.map((routine) => (
                <tr key={routine.id}>
                  <td>
                    <span className="routine-name">{routine.name}</span>
                  </td>
                  <td>{formatDuration(routine.duration)}</td>
                  <td>{formatDate(routine.createdAt)}</td>
                  <td>
                    <span className={routine.lastCompleted ? '' : 'text-muted'}>
                      {formatDate(routine.lastCompleted)}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button className="btn-icon" title="Edit">
                        ✏️
                      </button>
                      <button className="btn-icon" title="Delete">
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <CreateRoutineModal onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export default Routines;
