import React from "react";

function Toggle({ sidebarStatus, setSidebar }) {
  return (
    <div>
      <button
        className="l-sidebar__btn"
        type="button"
        onClick={() => {
          setSidebar(!sidebarStatus);
        }}
      >
        Menu
      </button>
    </div>
  );
}

export default Toggle;