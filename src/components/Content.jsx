import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faSortDown,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "./modal/Modal";
import { TodoContext } from "../context/TodoContext";
import "./content.css";
import EditModal from "./editModal/EditModal";

const Content = () => {
  const { todos, removeTodo, updateTodo, selectedFilters, hideCompleted } =
    useContext(TodoContext);

  var FilteredTodos = todos;

  if (selectedFilters.length > 0) {
    FilteredTodos = todos.filter((todo) => {
      return todo.tags.some((tag) => selectedFilters.includes(tag.name));
    });
  }

  if (hideCompleted) {
    FilteredTodos = FilteredTodos.filter((todo) => !todo.isCompleted);
  }

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

  const handleComplete = (todo) => {
    todo.isCompleted = !todo.isCompleted;
    updateTodo(todo);
  };

  return (
    <div className="wrapper">
      <Modal />
      <div className="container">
        {FilteredTodos.length > 0 ? (
          FilteredTodos.map((todo, i) => (
            <div className="task-box" key={i}>
              <div className="task-wrap" onClick={() => toggleActive(i)}>
                <div className="task-head">
                  <div
                    className="task-title"
                    style={
                      todo.isCompleted ? { textDecoration: "line-through" } : {}
                    }
                  >
                    {todo.title}
                  </div>
                  <div className="task-drowdown">
                    <FontAwesomeIcon icon={faSortDown} size="lg" />
                  </div>
                </div>
                <div className="task-desc">
                  <div className="task-desc-text">{todo.desc}</div>
                  <div className="task-lastUpdated">{todo.lastUpdated}</div>
                </div>
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
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      onClick={() => handleComplete(todo)}
                    />
                  </div>
                  <div className="btn task-edit">
                    <EditModal todo={todo} />
                  </div>
                  <div
                    className="btn task-delete"
                    onClick={() => removeTodo(todo.id)}
                  >
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
