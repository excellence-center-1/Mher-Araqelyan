import React from "react"

const ModalCreate = () => {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={handleModalClose}>&times;</span>
                <h2>Post Video</h2>
                <form>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" value={newVideo.title} onChange={handleInputChange} />
                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" value={newVideo.category} onChange={handleInputChange} />
                    <label htmlFor="url">URL:</label>
                    <input type="text" id="url" name="url" value={newVideo.url} onChange={handleInputChange} />
                    <button type="button" onClick={handlePostVideo}>Save</button>
                </form>
            </div>
        </div>
    );
}
export default ModalCreate;