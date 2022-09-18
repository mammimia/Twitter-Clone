import clsx from "clsx";
import React from "react";
import "./SidebarOption.css";

function SidebarOption({ active, text, Icon }) {
  return (
    <div className={clsx("sidebar-option", active && "sidebar-active-option")}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;
