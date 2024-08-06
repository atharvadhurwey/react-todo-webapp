import React, { useContext, useEffect, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import "./sidebar.css";

const Sidebar = () => {
  const { tags } = useContext(TodoContext);
  const [hideCompleted, setHideCompleted] = useState(false);

  const handleHideCompletedToggle = () => {
    setHideCompleted(!hideCompleted);
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

  return (
    <div className="menu">
      <div className="title">
        <h1>todo</h1>
      </div>
      <div className="menu-list">
        <div className="tag">
          {tags.length > 0 ? (
            tags.map((tag, i) => (
              <div className="item" key={i}>
                <span
                  className="color"
                  style={{ background: tag.color }}
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
