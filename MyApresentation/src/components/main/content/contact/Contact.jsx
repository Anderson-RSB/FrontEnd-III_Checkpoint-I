import React from "react";
import Footer from "./footer/Footer";
import Form from "./form/Form";

function Contact() {
  return (
    <div className="l-page" id="contatos">
      <section>
        <h1 className="title">Posso te ajudar?</h1>

        <nav className="c-nav">
          <a className="c-nav__item" href="https://github.com/Anderson-RSB">
            GitHub
          </a>
          <a
            className="c-nav__item"
            href="https://www.linkedin.com/in/anderson-rsborges/"
          >
            LinkedIn
          </a>
          <a className="c-nav__item" href="telefone:+5519982189343">
            Telefone
          </a>
        </nav>

        <Form />

      </section>

      <Footer />
      
    </div>
  );
}

export default Contact;