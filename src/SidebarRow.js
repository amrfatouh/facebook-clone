import React from "react";
import "./SidebarRow.css";

function SidebarRow({ Icon, src, title }) {
  return (
    <div className="sidebar-row">
      <div className="icon">
        {src && <img src={src} alt="user photo" />}
        {Icon}
      </div>
      <div className="text">{title}</div>
    </div>
  );
}

export default SidebarRow;
