import styles from "./Styles/Menu.module.css";
import React, { useState } from "react";
import MenuList from "./MenuList";
import vectotRight from "../assets/Icons/VectorRight.svg";
import vectotLeft from "../assets/Icons/VectorLeft.svg";
import setting from "../assets/Icons/setting.svg";

const Menu = ({ menuOpen, setMenuOpen }) => {
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.container}>
      <div className={menuOpen ? styles.maxMenu : styles.miniMenu}>
        <div className={styles.menutitle}>
          <span>Money</span>
        </div>
        <div className={styles.toggelButton} onClick={toggleMenu}>
          <img src={menuOpen ? vectotRight : vectotLeft} />
        </div>
        <div className={styles.panelList}>
          <MenuList menuOpen={menuOpen} />
        </div>

        <div className={styles.setting}>
          <div className={menuOpen && styles.image}>
            <img src={setting} />
          </div>
          <div className={menuOpen && styles.caption}>
            <span>{menuOpen && "setting"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
