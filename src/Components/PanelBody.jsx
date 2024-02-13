import React from "react";
import RecentEmail from "./RecentEmail";
import Card from "./Card.jsx";
import styles from "./Styles/PanelBody.module.css";
import Chart from "./Chart.jsx";
import EmailsList from "./EmailsList.jsx";
import RightPanel from "./RightPanel.jsx";

function PanelBody({ menuOpen }) {
  return (
    <div className={styles.container}>
      <div className={styles.panelsize}>
        <div className={styles.receptacle}>
          <div className={styles.recentEmail}>
            <RecentEmail />
          </div>
          <div className={styles.allBody}>
            <div className={styles.left}>
              <Card />
              <Chart />
              <EmailsList />
            </div>
            <div className={styles.right}>
              <RightPanel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PanelBody;
