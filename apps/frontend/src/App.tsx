import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/Form.tsx";
import Dashboard from "./components/Dashboard.tsx"; // Importamos tu Dashboard real

function App() {
  return (
    // Envolvemos la app con BrowserRouter para que useNavigate funcione
    <BrowserRouter>
      <Routes>
        {/* Ruta principal: muestra el formulario de login */}
        <Route path="/" element={<Form />} />
        
        {/* Ruta del dashboard: muestra el panel de gestión real */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;