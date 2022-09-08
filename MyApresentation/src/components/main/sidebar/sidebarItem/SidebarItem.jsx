import React from "react";

function SidebarItem() {
  return (
    <>
      <h1 className="l-logo">Anderson Borges</h1>
      <nav className="c-sidebar">
        <a className="c-nav__item" href="#sobre-mim">
          Sobre mim
        </a>
        <a className="c-nav__item" href="#contatos">
          Contatos
        </a>
      </nav>
    </>
  );
}

export default SidebarItem;