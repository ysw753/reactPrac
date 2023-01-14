import React, { useState } from "react";
import Infowindow from "../components/Infowindow";
import SideMenuBar from "../components/SideMenuBar";
import styles from "../styles/Mainpage.module.css";
const Mainpage = () => {
  const [windowNumber, setWindowNumber] = useState(1);
  const openInfoWindowHandler = (id) => {
    setWindowNumber(id);
  };
  return (
    <div className={styles.Outter}>
      <SideMenuBar openInfoWindowHandler={openInfoWindowHandler} />
      <Infowindow windowId={windowNumber} />
    </div>
  );
};

export default Mainpage;
