import styles from "./Styles/Chart.module.css";
import { stats } from "../services/Service";
import LineCharter from "./LineChart";

function Chart() {
  return (
    <div className={styles.container}>
      <div className={styles.cardsbox}>
        {stats.map((item) => {
          return (
            <div key={item.id} className={styles.card}>
              <div>
                <p>{item.title}</p>
              </div>
              <div className={styles.changechart}>
                <span
                  className={styles.chanes}
                  style={{
                    backgroundColor: item.changes > 0 ? "#D1FADF" : "#FEE4E2",
                    color: item.changes > 0 ? "#027A48" : "#F04438",
                  }}
                >
                  {item.changes > 0 ? "+" : ""}
                  {item.changes}
                </span>
              </div>
              <div>
                <span className={styles.count}>{item.count}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.chart}>
        <LineCharter />
      </div>
    </div>
  );
}

export default Chart;
