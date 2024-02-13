import styles from "./Styles/EmailList.module.css";
import { emailsList } from "../services/Service";
function EmailsList() {
  return (
    <div className={styles.EmailList}>
      <div className={styles.title}>Recent Emails</div>
      <div className={styles.list}>
        {emailsList.map((list) => {
          return (
            <div key={list.id} className={styles.record}>
              <img src={list.image} className={styles.image} />

              <p>{list.from}</p>
              <p>{list.discription}</p>
              <p>{list.time}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EmailsList;
