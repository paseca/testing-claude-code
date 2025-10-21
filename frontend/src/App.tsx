import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Routines from './pages/Routines';
import Calendar from './pages/Calendar';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Routines />} />
            <Route path="/routines" element={<Routines />} />
            <Route path="/calendar" element={<Calendar />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
