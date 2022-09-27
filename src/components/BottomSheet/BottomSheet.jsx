import { useState } from "react";
import { Modal } from "./../Modal";
import { debounce } from "lodash";
import "./BottomSheet.css";

export const BottomSheet = ({ children }) => {
  const [openState, setOpenState] = useState(false);

  const handleClick = debounce(() => {
    setOpenState(!openState);
    console.log("click called");
  }, 600);

  return (
    <>
      <button id="open-btn" onClick={handleClick}>
        Open Bottom Sheet
      </button>
      {openState && <Modal handleClick={handleClick}>{children}</Modal>}
    </>
  );
};
