import React from "react";

interface IProps {
  children: React.ReactNode;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<IProps> = ({ children, setModal }) => {
  return (
    <>
      <div
        className="modal"
        onClick={() => {
          setModal(false);
        }}
      >
        <div className="modal-inner" onClick={(e) => e.stopPropagation()}>
          <button className="close-modal_btn" onClick={() => setModal(false)}>
            &times;
          </button>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
