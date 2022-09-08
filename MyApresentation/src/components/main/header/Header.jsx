import React from "react";
import Toggle from "./toggle/Toggle";

function Header({ sidebarStatus, setSidebar }) {
  return (
    <header>
      <Toggle sidebarStatus={sidebarStatus} setSidebar={setSidebar} />
    </header>
  );
}

export default Header;