import { AnimatePresence } from "framer-motion";
import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import Pagina1 from "./pages/Pagina1";
import Pagina2 from "./pages/Pagina2";

// Componente interno para usar useLocation
const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/pagina1" replace />} />
        <Route path="/pagina1" element={<Pagina1 />} />
        <Route path="/pagina2" element={<Pagina2 />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen overflow-hidden">
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;
