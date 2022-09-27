import { useState } from "react";
import "./Modal.css";
export const Modal = ({ handleClick, children }) => {
  const [show, setShow] = useState(true);

  const handleHide = () => {
    setShow(false);
    handleClick();
  };

  return (
    <div
      class="wrapper"
      id={show ? "wrapper-show" : "wrapper-hide"}
      onClick={handleHide}
    >
      <div id={show ? "modal-show" : "modal-hide"} className="modal">
        {children}
      </div>
    </div>
  );
};
