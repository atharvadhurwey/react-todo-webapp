import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { TodoContext } from "../../context/TodoContext";
import "./modal.css";

const Modal = () => {
  const { todos, tags, addTodo } = useContext(TodoContext);
  const [modal, setModal] = useState(false);

  var task = {
    id: "",
    title: "",
    desc: "",
    lastUpdated: "",
    tags: [],
  };

  const toggleModal = () => {
    return setModal(!modal);
  };

  const handleSave = () => {
    const title = document.querySelector(".modal-title").value;
    const desc = document.querySelector(".modal-description").value;
    const tags = document.querySelectorAll(".modal-tag");
    const error = document.querySelector(".error-container");

    if (title.trim() === "" || desc.trim() === "") {
      error.innerText = "Please fill all the fields";
      error.style.color = "red";
      error.style.display = "block";
      return;
    } else {
      error.style.display = "none";
    }

    var isEmpty = true;
    tags.forEach((tag) => {
      if (tag.classList.contains("selected")) {
        tag.classList.remove("selected");
        const icon = tag.querySelector(".icon");
        const tagObj = {
          name: tag.querySelector(".text").innerText,
          color: icon.getAttribute("data-color"),
        };
        task.tags.push(tagObj);
        isEmpty = false;
      }
    });
    if (isEmpty) {
      error.innerHTML = "Please select atleast one tag";
      error.style.color = "red";
      error.style.display = "block";
      return;
    } else {
      error.style.display = "none";
    }

    task.id = todos.length;
    task.title = title;
    task.desc = desc;

    const date = new Date();

    task.lastUpdated =
      date.toDateString().split(" ")[1] +
      " " +
      date.getMonth() +
      ", " +
      date.getFullYear();

    addTodo(task);
    toggleModal();
  };

  const handleSelected = (i, color) => {
    const tags = document.querySelectorAll(".modal-tag");
    const tag = tags[i];
    const icon = tag.querySelector(".icon");
    if (tag.classList.contains("selected")) {
      tag.classList.remove("selected");
      icon.style.background = color;
      tag.style.background = "whitesmoke";
    } else {
      tag.classList.add("selected");
      icon.style.background = "whitesmoke";
      tag.style.background = color;
    }
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
            <div className="error-container">
              <div className="error-message"></div>
            </div>
            <div className="modal-tags-container">
              <label className="modal-label">Select Tags</label>
              <div className="modal-tags-list">
                {tags.length > 0 ? (
                  tags.map((tag, i) => (
                    <div
                      className="modal-tag"
                      key={i}
                      onClick={() => handleSelected(i, tag.color)}
                    >
                      <span
                        className="icon"
                        data-color={tag.color}
                        style={{ background: tag.color }}
                      ></span>
                      <span className="text">{tag.name}</span>
                    </div>
                  ))
                ) : (
                  <div className="no-tags">No Tags available</div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
