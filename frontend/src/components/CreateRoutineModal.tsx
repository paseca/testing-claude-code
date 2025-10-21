import { useState } from 'react';
import './CreateRoutineModal.css';

interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: number;
  rest: number; // in seconds
  notes: string;
}

interface CreateRoutineModalProps {
  onClose: () => void;
}

const CreateRoutineModal = ({ onClose }: CreateRoutineModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    estimatedTime: '',
    description: '',
  });

  const [exercises, setExercises] = useState<Exercise[]>([]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addExercise = () => {
    const newExercise: Exercise = {
      id: Date.now().toString(),
      name: '',
      sets: 3,
      reps: 10,
      rest: 60,
      notes: '',
    };
    setExercises((prev) => [...prev, newExercise]);
  };

  const removeExercise = (id: string) => {
    setExercises((prev) => prev.filter((ex) => ex.id !== id));
  };

  const updateExercise = (id: string, field: keyof Exercise, value: string | number) => {
    setExercises((prev) =>
      prev.map((ex) => (ex.id === id ? { ...ex, [field]: value } : ex))
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle form submission
    console.log('Routine Data:', { ...formData, exercises });
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Create New Routine</h2>
          <button className="modal-close" onClick={onClose}>
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="modal-body">
            <div className="form-section">
              <h3 className="section-title">Basic Information</h3>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g., Full Body Workout"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="estimatedTime">Estimated Time (minutes) *</label>
                  <input
                    type="number"
                    id="estimatedTime"
                    name="estimatedTime"
                    value={formData.estimatedTime}
                    onChange={handleInputChange}
                    placeholder="60"
                    min="1"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Describe your routine..."
                  rows={3}
                />
              </div>
            </div>

            <div className="form-section">
              <div className="section-header">
                <h3 className="section-title">Exercises</h3>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={addExercise}
                >
                  + Add Exercise
                </button>
              </div>

              {exercises.length === 0 ? (
                <div className="empty-state">
                  <p className="text-muted">
                    No exercises added yet. Click "Add Exercise" to get started.
                  </p>
                </div>
              ) : (
                <div className="exercises-list">
                  {exercises.map((exercise, index) => (
                    <div key={exercise.id} className="exercise-card">
                      <div className="exercise-header">
                        <span className="exercise-number">Exercise {index + 1}</span>
                        <button
                          type="button"
                          className="btn-remove"
                          onClick={() => removeExercise(exercise.id)}
                          title="Remove exercise"
                        >
                          ✕
                        </button>
                      </div>

                      <div className="form-group">
                        <label>Exercise Name *</label>
                        <input
                          type="text"
                          value={exercise.name}
                          onChange={(e) =>
                            updateExercise(exercise.id, 'name', e.target.value)
                          }
                          placeholder="e.g., Bench Press"
                          required
                        />
                      </div>

                      <div className="form-row-3">
                        <div className="form-group">
                          <label>Sets</label>
                          <input
                            type="number"
                            value={exercise.sets}
                            onChange={(e) =>
                              updateExercise(
                                exercise.id,
                                'sets',
                                parseInt(e.target.value) || 0
                              )
                            }
                            min="1"
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label>Reps</label>
                          <input
                            type="number"
                            value={exercise.reps}
                            onChange={(e) =>
                              updateExercise(
                                exercise.id,
                                'reps',
                                parseInt(e.target.value) || 0
                              )
                            }
                            min="1"
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label>Rest (seconds)</label>
                          <input
                            type="number"
                            value={exercise.rest}
                            onChange={(e) =>
                              updateExercise(
                                exercise.id,
                                'rest',
                                parseInt(e.target.value) || 0
                              )
                            }
                            min="0"
                            step="15"
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <label>Notes</label>
                        <textarea
                          value={exercise.notes}
                          onChange={(e) =>
                            updateExercise(exercise.id, 'notes', e.target.value)
                          }
                          placeholder="Additional notes or instructions..."
                          rows={2}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Create Routine
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateRoutineModal;
