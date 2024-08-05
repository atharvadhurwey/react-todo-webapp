import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./modal.css";

const Modal = () => {
  const [modal, setModal] = useState(false);

  const task = {
    title: "",
    description: "",
    date: "",
    time: "",
    tags: [],
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleSave = () => {
    const title = document.querySelector(".modal-title").value;
    const description = document.querySelector(".modal-description").value;
    const tags = document.querySelectorAll(".modal-tag");

    task.title = title;
    task.description = description;

    tags.forEach((tag) => {
      if (tag.classList.contains("selected")) {
        tag.classList.remove("selected");
        task.tags.push(tag.innerText);
      }
    });

    const time = new Date();
    task.time = time.toTimeString();
    const date = new Date();
    task.date = date.toDateString();

    console.log(task);
  };

  if (modal) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "auto";
  }

  return (
    <div>
      <div className="header">
        <div className="add-task-button">
          <FontAwesomeIcon icon={faPlus} onClick={toggleModal} size="2xl" />
        </div>
      </div>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-container">
            <div className="modal-header">
              <button className="btn cancel-btn" onClick={toggleModal}>
                Cancel
              </button>
              <button className="btn add-btn" onClick={handleSave}>
                Add
              </button>
            </div>
            <div className="modal-title-container">
              <label className="modal-label">Title</label>
              <input
                type="text"
                placeholder="Enter your task title"
                className="modal-title"
              ></input>
            </div>
            <div className="modal-desc-container">
              <label className="modal-label">Description</label>
              <textarea
                rows={4}
                placeholder="Enter your task description"
                className="modal-description"
              ></textarea>
            </div>
            <div className="modal-tags-container">
              <label className="modal-label">Tags</label>
              <div className="modal-tags-list">
                <div className="modal-tag">
                  <span className="icon">📅</span>
                  <span className="text">Planned</span>
                </div>
                <div className="modal-tag">
                  <span className="icon">👀</span>
                  <span className="text">
                    Completed CompletedCompletedCompletedCompleted
                  </span>
                </div>
                <div className="modal-tag selected">
                  <span className="icon">🗑️</span>
                  <span className="text">Deleted</span>
                </div>
                <div className="modal-tag">
                  <span className="icon">🌟</span>
                  <span className="text">Important</span>
                </div>
                <div className="modal-tag">
                  <span className="icon">📝</span>
                  <span className="text">All</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
