import "./ModalWindow.scss";
import ModalCloseButton from "./ModalCloseButton";

function ModalWindow({ children }) {
  return (
    <>
      <div
        className="modal-wrapper"
        aria-modal="true"
        role="dialog"
        tabIndex="-1"
      >
        <div className="inner">
          <ModalCloseButton />
          {children}
        </div>
      </div>
    </>
  );
}

export default ModalWindow;
