import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminSection from "./components/admin/AdminSection";
import MainAdmin from './components/admin/MainAdmin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminSection />} />
        <Route path="/admin/authorized" element={<MainAdmin />} />
      </Routes>
    </Router>
  );
}

export default App;
