import React from "react";
import "./Footer.css";

import {
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
  FaDiscord,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer__grid">

        {/* BRAND */}
        <div className="footer__col">
          <h2 className="footer__logo">3D Figures</h2>
          <p className="footer__desc">
            Figuras 3D coleccionables de alta precisión. Diseño, impresión y cultura geek en un solo lugar.
          </p>

          <div className="footer__social">
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="X"><FaXTwitter /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="#" aria-label="Discord"><FaDiscord /></a>
          </div>
        </div>

        {/* LEGAL */}
        <div className="footer__col">
          <h4 className="footer__title">Legal</h4>
          <a href="/privacy">Privacidad</a>
          <a href="/cookies">Cookies</a>
          <a href="/terms">Términos</a>
        </div>

        {/* COMPANY */}
        <div className="footer__col">
          <h4 className="footer__title">Empresa</h4>
          <a href="/about">Sobre nosotros</a>
          <a href="/contact">Contacto</a>
          <a href="/faq">FAQ</a>
        </div>

        {/* NEWSLETTER */}
        <div className="footer__col">
          <h4 className="footer__title">Newsletter</h4>
          <p className="footer__descSmall">
            Recibe drops exclusivos y nuevas figuras antes que nadie.
          </p>

          <form className="footer__form">
            <input
              type="email"
              placeholder="tu@email.com"
              aria-label="Email newsletter"
            />
            <button type="submit">Unirme</button>
          </form>
        </div>

      </div>

      <div className="footer__bottom">
        © {new Date().getFullYear()} 3D Figures — Crafted with precision
      </div>

    </footer>
  );
};

export default Footer;