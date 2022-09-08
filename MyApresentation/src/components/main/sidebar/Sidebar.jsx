import React from "react";
import SidebarItem from "./sidebarItem/SidebarItem";

const Sidebar = ({ sidebarStatus }) => {
  return (
    <div
      className={`l-sidebar${sidebarStatus ? "--open" : "--close"}`}
    >
      <SidebarItem />
    </div>
  );
};

export default Sidebar;