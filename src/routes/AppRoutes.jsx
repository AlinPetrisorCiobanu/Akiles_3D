import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Catalog from "../pages/Catalog/Catalog";
import Productos from "../pages/Productos/Productos";
import Contact from "../pages/Contact/Contact";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalogo" element={<Catalog />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/contacto" element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;