import React from "react";

function Principal() {
  return (
    <div className="l-page bg__profile">
      <main>
        <h1 className="title">Olá, me chamo Anderson Borges</h1>
        <p className="description">Seja bem vindo ao meu currículo on-line.</p>

        <nav className="c-nav u-my-3">
          <a className="c-nav__item" href="https://github.com/Anderson-RSB">
            GitHub
          </a>
          <a
            className="c-nav__item"
            href="https://www.linkedin.com/in/anderson-rsborges/"
          >
            LinkedIn
          </a>
        </nav>

        <a className="c-btn u-my-3" href="#sobre-mim">
          Sobre mim
        </a>
      </main>
    </div>
  );
}

export default Principal;