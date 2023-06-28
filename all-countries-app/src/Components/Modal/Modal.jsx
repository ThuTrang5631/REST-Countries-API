const Modal = ({ openModal, content, onCancel }) => {
  return (
    <>
      {openModal && (
        <div className="container-modal">
          <div className="wrap-modal">
            <button onClick={onCancel} className="modal-btn">
              <i class="fa fa-close"></i>
            </button>
            <p className="modal-desc">{content}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;