import React, { useState, useEffect } from "react";
import "./styles/DeleteConfirmationModal.css";
const DeleteConfirmationModal = ({ handleClose, handleDelete }) => {
    const handleOverlayClick = () => {
        handleClose();
    };
    useEffect(() => {
        document.body.classList.add('modal-open');
        return () => {
            document.body.classList.remove('modal-open');
        };
    }, []);
    return (
        <>
            {(
                <div className="overlay" onClick={handleOverlayClick} >
                    <div className="delete-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <span className="close" onClick={handleClose}>&times;</span>
                        </div>
                        <div className="modal-body">
                            <p>Are you sure you want to delete this video?</p>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-no" onClick={handleClose}>No</button>
                            <button className="btn btn-yes" onClick={handleDelete}>Yes</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default DeleteConfirmationModal;
