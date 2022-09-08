import React, { useState } from "react";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import Content from "./content/Content";

function Main() {
  const [sidebarStatus, setSidebar] = useState(false);

  return (
    <>
      <div className="l-app">
        <Header sidebarStatus={sidebarStatus} setSidebar={setSidebar} />

        <Sidebar sidebarStatus={sidebarStatus} />

        <Content />
      </div>
    </>
  );
}

export default Main;