import React from 'react';
import Modal from 'react-modal';

const ContactModal = ({ open, closeModal }) => {

    return (
        <div className="modal">
            <Modal
                isOpen={open}
                contentLabel="Submission Accepted"
                closeTimeoutMS={200}
                className="modal"
            >
                <h3 className="modal__title">Submission Accepted</h3>
                <p className="modal__body">Email sent</p>
                <button className="button" onClick={closeModal}>Okay</button>
            </Modal>
        </div> 
    )
};

export default ContactModal;