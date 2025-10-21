import './Calendar.css';

const Calendar = () => {
  return (
    <div className="calendar-page">
      <div className="page-header">
        <div>
          <h1>Calendar</h1>
          <p className="text-secondary">View and schedule your workouts</p>
        </div>
      </div>

      <div className="calendar-placeholder">
        <p className="text-muted">Calendar view coming soon...</p>
      </div>
    </div>
  );
};

export default Calendar;
