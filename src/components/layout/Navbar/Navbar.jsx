import { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../../assets/img/banner-akiles-3d-png.png";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
          <img src={logo} alt="AKILES 3D" />
        </div>

        {/* DESKTOP MENU */}
        <ul className="navbar-links desktop">
          <li className="active">Inicio</li>
          <li>Catálogo</li>
          <li>Personalizados</li>
          <li>Contacto</li>
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
          <li>Inicio</li>
          <li>Catálogo</li>
          <li>Personalizados</li>
          <li>Contacto</li>
        </ul>
      </aside>
    </>
  );
}

export default Navbar;