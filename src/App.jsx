import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfessionalPage from './pages/ProfessionalPage';
import TerminalPage from './pages/TerminalPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProfessionalPage />} />
        <Route path="/terminal" element={<TerminalPage />} />
      </Routes>
    </Router>
  );
}

export default App;
