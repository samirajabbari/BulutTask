import React, { useState } from "react";
import styles from "./Styles/MenuList.module.css";
import { dashboard } from "../services/Service";

function MenuList({ menuOpen }) {
  const [active, setActive] = useState("Dashboard");

  const activeMenu = (event) => {
    const clickedElement = event.target;
    const closestDiv = clickedElement.closest("div[id]");

    if (closestDiv) {
      const parentId = closestDiv.getAttribute("id");
      setActive(parentId);
    }
  };
  return (
    <div>
      <div className={styles.ListBox} onClick={activeMenu}>
        {dashboard.map((info) => {
          return (
            <div
              className={
                active === info.title ? styles.menuActive : styles.title
              }
              key={info.id}
              id={info.title}
            >
              <div className={menuOpen && styles.image}>
                <img src={info.image} />
              </div>
              <div className={menuOpen && styles.caption}>
                <span className={info.title === active ? styles.selected : ""}>
                  {menuOpen && info.title}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MenuList;
