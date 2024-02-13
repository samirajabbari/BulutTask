import React, { useState } from "react";

import Menu from "./Menu";
import styles from "./Styles/Panel.module.css";
import PanelBody from "./PanelBody";
import Modal from "./Modal";

function Panel({ setIsModal }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {/* <div className={styles.container}> */}
      {/* <div className={styles.div1}> */}
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {/* </div> */}
      {/* <div className={styles.div1}> */}
      <PanelBody menuOpen={menuOpen} setIsModal={setIsModal} />

      {/* </div> */}

      {/* </div> */}
    </>
  );
}

export default Panel;
