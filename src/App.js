import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminSection from "./components/admin/AdminSection";
import MainAdmin from './components/admin/MainAdmin';
import AddHall from './components/admin/AddHall';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminSection />} />
        <Route path="/admin/authorized" element={<MainAdmin />} />
        <Route path="/admin/authorized/adding_hall" element={<AddHall />} />
      </Routes>
    </Router>
  );
}

export default App;
