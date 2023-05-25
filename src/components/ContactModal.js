import React from 'react';
import Modal from 'react-modal';

const RedirectModal = ({ open, closeModal }) => {

    return (
        <div>
            <Modal
                isOpen={open}
                contentLabel="Website redirect"
                closeTimeoutMS={200}
                className="modal"
            >
                <h3 className="modal__title">Thanks for your submission!</h3>
                <p className="modal__body">You are being redirected...</p>
                <button className="button" onClick={closeModal}>Okay</button>
            </Modal>
        </div> 
    )
};

export default RedirectModal;