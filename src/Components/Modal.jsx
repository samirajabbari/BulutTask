import React, { useContext, useState } from "react";
import styles from "./Styles/Modal.module.css";
import { modalContex } from "../App";
import { todoList } from "../services/Service";

function Modal() {
  const setIsModal = useContext(modalContex);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [searchText, setSearchText] = useState("");

  const modalHandler = () => {
    setIsModal(false);
  };

  const stateHandler = (todo) => {
    const isSelected = selectedOptions.some(
      (selectedOption) => selectedOption.value === todo.value
    );

    if (isSelected) {
      const updatedSelection = selectedOptions.filter(
        (selectedOption) => selectedOption.value !== todo.value
      );
      setSelectedOptions(updatedSelection);
    } else {
      setSelectedOptions([...selectedOptions, todo]);
    }
  };

  const removeTodo = (todo) => {
    const updatedSelection = selectedOptions.filter(
      (selectedOption) => selectedOption.value !== todo.value
    );
    setSelectedOptions(updatedSelection);
  };
  const filteredTodoList = todoList.filter((todo) =>
    todo.label.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <div className={styles.addToDo}>
        <p className={styles.title}>Add to do</p>
        <div className={styles.addselect}>
          <label htmlFor="writer" className={styles.label}>
            write a title
          </label>
          <div className={styles.select} id="writer">
            <input type="text" placeholder="Select" />
            <span>
              <img src="src/assets/Icons/close.svg" alt="close-icon" />
            </span>
          </div>
        </div>
        <div className={styles.addperson}>
          <label htmlFor="add person" className={styles.personlabel}>
            Add person
          </label>
          <div className={styles.select} id="writer">
            <div className={styles.result}>
              {selectedOptions.map((selected) => (
                <div key={selected.value} className={styles.customdiv}>
                  <img
                    src={selected.image}
                    className={styles.customdivimage}
                    alt="person-avatar"
                  />
                  <p className={styles.customdivtext}>{selected.label}</p>
                  <div className={styles.customdivshape}>
                    <img
                      src="src/assets/Icons/remove.svg"
                      alt="remove-icon"
                      style={{ width: "20px", height: "20px" }}
                      onClick={() => removeTodo(selected)}
                    />
                  </div>
                </div>
              ))}
            </div>
            <span>
              <img src="src/assets/Icons/down2.svg" alt="down-icon" />
            </span>
          </div>
          <div className={styles.personbox}>
            <div className={styles.search}>
              <span>
                <img src="src/assets/Icons/search.svg" alt="search-icon" />
              </span>
              <input
                type="text"
                placeholder="search value"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>
            <div className={styles.top}>
              {filteredTodoList.map((todo) => (
                <div key={todo.value} className={styles.personlist}>
                  <input
                    type="checkbox"
                    id={todo.value}
                    checked={selectedOptions.some(
                      (selectedOption) => selectedOption.value === todo.value
                    )}
                    onChange={() => stateHandler(todo)}
                  />
                  <img src={todo.image} alt="person-avatar" />
                  <label>
                    {todo.label} / {todo.id}
                  </label>
                </div>
              ))}
            </div>
            <div className={styles.counter}>
              <span className={styles.count}>
                {" "}
                Selected: {selectedOptions.length}
              </span>
              <span
                className={styles.clear}
                onClick={() => setSelectedOptions([])}
              >
                Clear selected
              </span>
            </div>
          </div>
        </div>
        <div className={styles.buttonBox}>
          <button onClick={modalHandler} className={styles.cancelBtn}>
            Cancel
          </button>
          <button className={styles.AcceptBtn}>Accept</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
