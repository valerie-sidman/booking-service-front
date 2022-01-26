import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminSection from "./components/admin/AdminSection";
import MainAdmin from './components/admin/MainAdmin';
import ClientSection from './components/client/ClientSection';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminSection />} />
        <Route path="/admin/authorized" element={<MainAdmin />} />
        <Route path="/client/home" element={<ClientSection />} />
      </Routes>
    </Router>
  );
}

export default App;
