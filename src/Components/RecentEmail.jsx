import React, { useState } from "react";

import styles from "./Styles/RecentEmail.module.css";
import { options } from "../services/Service";
import down from "../assets/Icons/down.svg";
import search from "../assets/Icons/search.svg";
function RecentEmail() {
  //-------states------------
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isOpen, setisOpen] = useState(false);
  //-------Functions------------
  const stateHandler = (option) => {
    // console.log(option);
    const isSelected = selectedOptions.some(
      (selectedOption) => selectedOption.value === option.value
    );

    if (isSelected) {
      const updatedSelection = selectedOptions.filter(
        (selectedOption) => selectedOption.value !== option.value
      );
      setSelectedOptions(updatedSelection);
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const applyHandler = () => {
    if (selectedOptions.length) {
      console.log(selectedOptions);
    }
  };

  const clearHandler = () => {
    setSelectedOptions([]);
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchText.toLowerCase())
  );
  const showHandler = () => {
    setisOpen(!isOpen);
    // console.log(isOpen);
  };

  //-----------------------------
  return (
    <div className={styles.container}>
      <label htmlFor="recenrEmail" className={styles.label}>
        Recenr Email
      </label>
      <div className={styles.select} id="recenrEmail">
        <input
          type="text"
          placeholder="Select"

          // value={searchText}
          // onChange={(e) => setSearchText(e.target.value)}
        />
        <span onClick={showHandler}>
          <img src={down} />
        </span>
      </div>
      {isOpen && (
        <div className={styles.recentEmailBox}>
          <div className={styles.top}>
            <div className={styles.search}>
              <span onClick={showHandler}>
                <img src={search} />
              </span>
              <input
                type="text"
                placeholder="search value"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>

            {filteredOptions.map((option) => (
              <div key={option.value} className={styles.checkbox}>
                <input
                  type="checkbox"
                  id={option.value}
                  checked={selectedOptions.some(
                    (selectedOption) => selectedOption.value === option.value
                  )}
                  onChange={() => stateHandler(option)}
                />
                <label htmlFor={option.value}>{option.label}</label>
              </div>
            ))}
          </div>

          <button onClick={applyHandler} className={styles.btnApply}>
            Apply
          </button>
          <div className={styles.counter}>
            <span className={styles.count}>
              {" "}
              Selected: {selectedOptions.length}
            </span>
            <span onClick={clearHandler} className={styles.clear}>
              Clear selected
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default RecentEmail;
