import React, { useContext, useEffect, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import "./sidebar.css";

const Sidebar = () => {
  const { tags, filteredTodos, hideCompletedTodos } = useContext(TodoContext);
  const [hideCompleted, setHideCompleted] = useState(false);

  const [selectedFilters, setSelectedFilters] = useState([]);

  let filters = tags;

  const handleFilter = (filter) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter((f) => f !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  const handleHideCompletedToggle = () => {
    setHideCompleted(!hideCompleted);
    hideCompletedTodos();
  };

  useEffect(() => {
    const elements = document.getElementsByClassName("text");

    const textContents = Array.from(elements).map(
      (element) => element.innerText
    );

    if (elements.length > 0 && textContents.length > 0) {
      for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener("mouseenter", function () {
          if (isElementOverflowing(elements[i])) {
            wrapContentsInMarquee(elements[i]);
          }
        });
        elements[i].addEventListener("mouseleave", function () {
          if (!isElementOverflowing(elements[i])) {
            resetMarquee(elements[i], textContents[i]);
          }
        });
      }
    }
  }, []);

  function isElementOverflowing(element) {
    var overflowX = element.offsetWidth < element.scrollWidth;
    return overflowX;
  }

  function wrapContentsInMarquee(element) {
    var marquee = document.createElement("marquee"),
      contents = element.innerText;

    marquee.innerText = contents;
    marquee.setAttribute("scrollamount", "10"); // Set the scroll speed here
    element.innerHTML = "";
    element.appendChild(marquee);
  }

  function resetMarquee(element, contents) {
    element.innerHTML = contents;
  }

  useEffect(() => {
    filteredTodos(selectedFilters);
  }, [filteredTodos, selectedFilters]);

  return (
    <div className="menu">
      <div className="title">
        <h1>todo</h1>
      </div>
      <div className="menu-list">
        <div className="tag">
          {filters.length > 0 ? (
            filters.map((tag, i) => (
              <div
                className="item"
                key={i}
                onClick={() => handleFilter(tag.name)}
                style={
                  selectedFilters?.includes(tag.name)
                    ? { background: tag.color }
                    : {}
                }
              >
                <span
                  className="color"
                  style={
                    selectedFilters?.includes(tag.name)
                      ? { background: "whitesmoke" }
                      : { background: tag.color }
                  }
                ></span>
                <span className="text">{tag.name}</span>
              </div>
            ))
          ) : (
            <div className="no-tags">No Tags available</div>
          )}
        </div>
        <div className="other">
          <div className="hide-task" onClick={handleHideCompletedToggle}>
            <input
              type="checkbox"
              style={{ zoom: "1.3" }}
              checked={hideCompleted}
              readOnly
            />
            <span>Hide Completed Task</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
