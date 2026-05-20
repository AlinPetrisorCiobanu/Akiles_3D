import Navbar from "../../components/layout/Navbar/Navbar";
import "./Contact.css";

function Contact() {
  return (
    <>
      <Navbar />

      <section className="contact-page">

  <div className="contact-header">
    <h1>Contacto</h1>

    <p>
      Si tienes cualquier duda sobre nuestros productos,
      impresiones personalizadas o pedidos, estaremos
      encantados de ayudarte.
    </p>
  </div>

  <div className="contact-content">

    <div className="contact-info">

      <h2>Información</h2>

      <div className="contact-item">
        <span>Email</span>
        <p>contacto@akiles3d.com</p>
      </div>

      <div className="contact-item">
        <span>Teléfono</span>
        <p>+34 651 758 263</p>
      </div>

      <div className="contact-item">
        <span>Horario</span>
        <p>Lunes - Viernes · 09:00 - 18:00</p>
      </div>

    </div>

    <div className="contact-form">

      <form>

        <input
          type="text"
          placeholder="Nombre"
        />

        <input
          type="email"
          placeholder="Correo electrónico"
        />

        <textarea
          placeholder="Escribe tu mensaje..."
        />

        <button type="submit">
          Enviar mensaje
        </button>

      </form>

    </div>

  </div>

</section>
    </>
  );
}

export default Contact;