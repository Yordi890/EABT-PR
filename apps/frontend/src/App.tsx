import "./App.css";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom"; // <-- Cambio aquí
import Form from "./components/Form.tsx";
import AdminDashboard from "./components/AdminDashboard.tsx";
import OperadorDashboard from "./components/OperadorDashboard.tsx";

function App() {
  return (
    <HashRouter> {/* <-- Cambio aquí */}
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/operador-dashboard" element={<OperadorDashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}

export default App;