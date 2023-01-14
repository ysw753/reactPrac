import React from "react";
import "../styles/common.css";
const SideMenuButton = ({ itemelement, openInfoWindowHandler }) => {
  const { id, name } = itemelement;
  return (
    <button onClick={() => openInfoWindowHandler(id)}>{(id, name)}</button>
  );
};

export default SideMenuButton;
