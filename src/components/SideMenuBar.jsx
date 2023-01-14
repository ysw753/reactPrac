import React from "react";
import SideMenuButton from "./SideMenuButton";
import styles from "../styles/SideMenuBar.module.css";
const SideMenuBar = ({ openInfoWindowHandler }) => {
  const menuItems = [
    {
      id: 1,
      name: "factor",
    },
    {
      id: 2,
      name: "좋아요관리",
    },
    {
      id: 3,
      name: "사용자관리",
    },
  ];

  return (
    <div className={styles.SideMenuBar}>
      {menuItems.map((item) => (
        <SideMenuButton
          key={item.id}
          itemelement={item}
          openInfoWindowHandler={openInfoWindowHandler}
        ></SideMenuButton>
      ))}
    </div>
  );
};

export default SideMenuBar;
