import React, { useEffect, useState } from "react";
import "./sidebar.css";

const Sidebar = () => {
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
          <div className="item">
            <span className="icon">📝</span>
            <span className="text">All</span>
          </div>
          <div className="item">
            <span className="icon">🌟</span>
            <span className="text">Important</span>
          </div>
          <div className="item">
            <span className="icon">📅</span>
            <span className="text">Planned</span>
          </div>
          <div className="item">
            <span className="icon">👀</span>
            <span className="text">
              Completed CompletedCompletedCompletedCompleted
            </span>
          </div>
          <div className="item">
            <span className="icon">🗑️</span>
            <span className="text">Deleted</span>
          </div>
        </div>
        <div className="other">
          <div className="hide-task" onClick={handleHideCompletedToggle}>
            <input
              type="checkbox"
              style={{ zoom: "1.3" }}
              checked={hideCompleted}
            />
            <span>Hide Completed Task</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
