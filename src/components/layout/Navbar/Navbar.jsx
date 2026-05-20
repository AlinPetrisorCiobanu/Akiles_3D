import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../../assets/img/banner-akiles-3d-png.png";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>

        {/* LOGO */}
        <div className="navbar-logo">
          <img src={logo} alt="AKILES 3D" onClick={()=>navigate("/")} />
        </div>

        {/* DESKTOP MENU */}
        <ul className="navbar-links desktop">
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>

          <li>
            <NavLink to="/catalogo">Catálogo</NavLink>
          </li>

          <li>
            <NavLink to="/productos">Productos</NavLink>
          </li>

          <li>
            <NavLink to="/contacto">Contacto</NavLink>
          </li>
        </ul>

        {/* ACTIONS */}
        <div className="navbar-actions desktop">
          <button className="icon-btn">❤️</button>
          <button className="icon-btn">🛒</button>
          <button className="icon-btn">👤</button>
        </div>

        {/* MOBILE BUTTON */}
        <button className="menu-btn" onClick={() => setOpen(true)}>
          ☰
        </button>
      </nav>

      {/* OVERLAY */}
      <div
        className={`overlay ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      />

      {/* MOBILE MENU */}
      <aside className={`mobile-menu ${open ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setOpen(false)}>
          ✕
        </button>

        <ul>
          <li>
            <NavLink to="/" onClick={() => setOpen(false)}>
              Inicio
            </NavLink>
          </li>

          <li>
            <NavLink to="/catalogo" onClick={() => setOpen(false)}>
              Catálogo
            </NavLink>
          </li>

          <li>
            <NavLink to="/personalizados" onClick={() => setOpen(false)}>
              Personalizados
            </NavLink>
          </li>

          <li>
            <NavLink to="/contacto" onClick={() => setOpen(false)}>
              Contacto
            </NavLink>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Navbar;