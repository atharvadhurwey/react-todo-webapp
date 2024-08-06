import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { TodoContext } from "../../context/TodoContext";

const EditModal = (data) => {
  const { tags, updateTodo } = useContext(TodoContext);
  const [modal, setModal] = useState(false);
  const [task, setTask] = useState(data.todo);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
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

    task.tags = [];
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

    task.title = title;
    task.desc = desc;

    const date = new Date();

    task.lastUpdated =
      date.toDateString().split(" ")[1] +
      " " +
      date.getMonth() +
      ", " +
      date.getFullYear();

    updateTodo(task);
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

  const toggleEditModal = () => {
    return setModal(!modal);
  };

  return (
    <div>
      <FontAwesomeIcon icon={faPen} onClick={toggleEditModal} />
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-container">
            <div className="modal-header">
              <button className="btn cancel-btn" onClick={toggleModal}>
                Cancel
              </button>
              <button className="btn add-btn" onClick={handleSave}>
                Save
              </button>
            </div>
            <div className="modal-title-container">
              <label className="modal-label">Title</label>
              <input
                type="text"
                placeholder="Enter your task title"
                className="modal-title"
                name="title"
                value={task.title}
                onChange={handleChange}
              ></input>
            </div>
            <div className="modal-desc-container">
              <label className="modal-label">Description</label>
              <textarea
                rows={4}
                placeholder="Enter your task description"
                className="modal-description"
                name="desc"
                value={task.desc}
                onChange={handleChange}
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

export default EditModal;
