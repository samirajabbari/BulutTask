import styles from "./Styles/RightPanel.module.css";
import { todos } from "../services/Service";
import { modalContex } from "../App";
import { useContext } from "react";

function RightPanel() {
  const setIsModal = useContext(modalContex);

  const showModalHandler = () => {
    setIsModal(true);
  };
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <div>
          <img src="src/assets/Icons/calendar.svg" />
        </div>
        <div>
          <img src="src/assets/Icons/notif.svg" />
        </div>
        <div>
          <img src="src/assets/Icons/message.svg" />
        </div>
        <div>
          <img src="src/assets/PersonImage/Fram1.svg" />
        </div>
        <div>
          <img src="src/assets/Icons/arrow-down.svg" />
        </div>
      </div>
      <div className={styles.fotrmationStatus}>
        <p className={styles.title}>Formation status</p>
        <p className={styles.caption}>In progress</p>

        <progress value="70" max="100"></progress>
        <p className={styles.Estimat}>Estimated processing</p>
        <p className={styles.days}>I4-5 business days</p>
        <button className={styles.statusBtn}>View Status</button>
      </div>
      <div className={styles.toDoList}>
        <p className={styles.heading}>Your to-Do list</p>
        <div className={styles.itemList}>
          {todos.map((todo) => {
            return (
              <div className={styles.items} key={todo.id}>
                <div className={styles.itemImage}>
                  <img src={todo.icon} />
                </div>
                <div>
                  <p>{todo.title}</p>
                  <span>{todo.disc}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.addTodo}>
          <div className={styles.addTodoimage}>
            <img src="src/assets/Icons/add.svg" onClick={showModalHandler} />
          </div>
          <div>
            <p>Add to Do</p>
          </div>
        </div>

        <div className={styles.footer}>
          <p className={styles.pTag}>Board meeting</p>
          <span style={{ fontSize: "14px" }}>Feb 22 at 6:00 sM</span>
          <span style={{ fontSize: "12px" }}>
            You have been invited to attend a meeting of the Boeard Diretors.
          </span>
        </div>
      </div>
    </div>
  );
}

export default RightPanel;
