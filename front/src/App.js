import Index from "./components/Index.jsx";
import Clientes from './components/Clientes.jsx'
import Cadastro from './components/Cadastro.jsx'
import Login from './components/Login.jsx';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/cliente" element={<Clientes />} />
        <Route path = "/cadastro" element={<Cadastro />} />
        <Route path = "/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;