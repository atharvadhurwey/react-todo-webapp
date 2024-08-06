import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { TodoContext } from "../../context/TodoContext";
import "./modal.css";

const Modal = () => {
  // Get the todos, tags, and addTodo function from the TodoContext
  const { todos, tags, addTodo } = useContext(TodoContext);

  // State to control the visibility of the modal
  const [modal, setModal] = useState(false);

  // Object to store the task details
  var task = {
    id: "",
    title: "",
    desc: "",
    lastUpdated: "",
    tags: [],
  };

  // Function to toggle the modal visibility
  const toggleModal = () => {
    return setModal(!modal);
  };

  // Function to handle the save button click
  const handleSave = () => {
    // Get the values from the input fields
    const title = document.querySelector(".modal-title").value;
    const desc = document.querySelector(".modal-description").value;
    const tags = document.querySelectorAll(".modal-tag");
    const error = document.querySelector(".error-container");

    // Validate the input fields
    if (title.trim() === "" || desc.trim() === "") {
      error.innerText = "Please fill all the fields";
      error.style.color = "red";
      error.style.display = "block";
      return;
    } else {
      error.style.display = "none";
    }

    // Check if at least one tag is selected
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
      error.innerHTML = "Please select at least one tag";
      error.style.color = "red";
      error.style.display = "block";
      return;
    } else {
      error.style.display = "none";
    }

    // Set the task details
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

    // Add the task to the todos list
    addTodo(task);

    // Close the modal
    toggleModal();
  };

  // Function to handle the tag selection
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

  // Disable scrolling when the modal is open
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
