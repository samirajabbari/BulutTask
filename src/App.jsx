import { createContext, useState } from "react";
import "./App.css";
import Modal from "./Components/Modal";

import Panel from "./Components/Panel";
export const modalContex = createContext();
function App() {
  const [isModal, setIsModal] = useState(false);
  return (
    <>
      <modalContex.Provider value={setIsModal}>
        {isModal && <Modal />}
        <Panel />
      </modalContex.Provider>
    </>
  );
}

export default App;
