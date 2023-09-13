import ReactDOM from "react-dom";
import React from "react";

const Modal: React.FC<any> = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-content">{children}</div>
    </div>,

    document.getElementById("modal-root") as HTMLElement
  );
};

export default Modal;