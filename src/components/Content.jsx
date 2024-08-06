import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faSortDown,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "./modal/Modal";
import { TodoContext } from "../context/TodoContext";
import "./content.css";

const Content = () => {
  const { todos } = useContext(TodoContext);

  const toggleActive = (i) => {
    const accord = document.querySelectorAll(".task-wrap");
    const taskDropdown = accord[i].querySelector(".task-drowdown");
    const taskDesc = accord[i].querySelector(".task-desc");

    if (taskDropdown.classList.contains("active")) {
      taskDropdown.classList.remove("active");
      taskDesc.classList.remove("active");
      taskDesc.style.maxHeight = null;
    } else {
      taskDropdown.classList.add("active");
      taskDesc.classList.add("active");
      taskDesc.style.maxHeight = taskDesc.scrollHeight + "px";
    }
  };

  return (
    <div className="wrapper">
      <Modal />
      <div className="container">
        {todos.length > 0 ? (
          todos.map((todo, i) => (
            <div className="task-box" key={i}>
              <div className="task-wrap" onClick={() => toggleActive(i)}>
                <div className="task-head">
                  <div className="task-title">{todo.title}</div>
                  <div className="task-drowdown">
                    <FontAwesomeIcon icon={faSortDown} size="lg" />
                  </div>
                </div>
                <div className="task-desc">{todo.desc}</div>
              </div>
              <div className="task-foot">
                <div className="task-tags">
                  {todo.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="icon"
                      style={{ background: tag.color }}
                    ></span>
                  ))}
                </div>
                <div className="task-actions">
                  <div className="btn task-complete">
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </div>
                  <div className="btn task-edit">
                    <FontAwesomeIcon icon={faPen} />
                  </div>
                  <div className="btn task-delete">
                    <FontAwesomeIcon icon={faTrash} />
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-tasks">No tasks available</div>
        )}
      </div>
    </div>
  );
};

export default Content;
