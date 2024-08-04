import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faSortDown,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import "./content.css";

const Content = () => {
  useEffect(() => {
    const accord = document.querySelectorAll(".task-wrap");

    if (accord.length > 0) {
      accord.forEach((acc) => {
        acc.removeEventListener("click", toggleActive);
        acc.addEventListener("click", toggleActive);
      });
    }

    function toggleActive() {
      if (this.querySelector(".task-drowdown").classList.contains("active")) {
        this.querySelector(".task-drowdown").classList.remove("active");
        this.querySelector(".task-desc").style.maxHeight = null;
      } else {
        this.querySelector(".task-drowdown").classList.add("active");
        this.querySelector(".task-desc").style.maxHeight =
          this.querySelector(".task-desc").scrollHeight + "px";
      }
    }

    return () => {
      accord.forEach((acc) => {
        acc.removeEventListener("click", toggleActive);
      });
    };
  }, []);

  return (
    <div className="container">
      <div className="task-box">
        <div className="task-wrap">
          <div className="task-head">
            <div className="task-title">1 do something</div>
            <div className="task-drowdown">
              <FontAwesomeIcon icon={faSortDown} size="lg" />
            </div>
          </div>
          <div className="task-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
            eveniet aliquid error voluptatem est sequi excepturi quae nemo
            asperiores, fugiat architecto repellat nihil, quod eaque.
          </div>
        </div>
        <div className="task-foot">
          <div className="task-tags">
            <span>💻</span>
            <span>👨‍💻</span>
            <span>📝</span>
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

      <div className="task-box">
        <div className="task-wrap">
          <div className="task-head">
            <div className="task-title">2 do something else</div>
            <div className="task-drowdown">
              <FontAwesomeIcon icon={faSortDown} size="lg" />
            </div>
          </div>
          <div className="task-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
            eveniet aliquid error voluptatem est sequi excepturi quae nemo
            asperiores, fugiat architecto repellat nihil, quod eaque.
          </div>
        </div>
        <div className="task-foot">
          <div className="task-tags">
            <span>💻</span>
            <span>👨‍💻</span>
            <span>📝</span>
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

      <div className="task-box">
        <div className="task-wrap">
          <div className="task-head">
            <div className="task-title">3 do something different</div>
            <div className="task-drowdown">
              <FontAwesomeIcon icon={faSortDown} size="lg" />
            </div>
          </div>
          <div className="task-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
            eveniet aliquid error voluptatem est sequi excepturi quae nemo
            asperiores, fugiat architecto repellat nihil, quod eaque.
          </div>
        </div>
        <div className="task-foot">
          <div className="task-tags">
            <span>💻</span>
            <span>👨‍💻</span>
            <span>📝</span>
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
      <div className="task-box">
        <div className="task-wrap">
          <div className="task-head">
            <div className="task-title">4 do something new</div>
            <div className="task-drowdown">
              <FontAwesomeIcon icon={faSortDown} size="lg" />
            </div>
          </div>
          <div className="task-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
            eveniet aliquid error voluptatem est sequi excepturi quae nemo
            asperiores, fugiat architecto repellat nihil, quod eaque.
          </div>
        </div>
        <div className="task-foot">
          <div className="task-tags">
            <span>💻</span>
            <span>👨‍💻</span>
            <span>📝</span>
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
      <div className="task-box">
        <div className="task-wrap">
          <div className="task-head">
            <div className="task-title">5 do something amazing</div>
            <div className="task-drowdown">
              <FontAwesomeIcon icon={faSortDown} size="lg" />
            </div>
          </div>
          <div className="task-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
            eveniet aliquid error voluptatem est sequi excepturi quae nemo
            asperiores, fugiat architecto repellat nihil, quod eaque.
          </div>
        </div>
        <div className="task-foot">
          <div className="task-tags">
            <span>💻</span>
            <span>👨‍💻</span>
            <span>📝</span>
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
      <div className="task-box">
        <div className="task-wrap">
          <div className="task-head">
            <div className="task-title">6 do something fun</div>
            <div className="task-drowdown">
              <FontAwesomeIcon icon={faSortDown} size="lg" />
            </div>
          </div>
          <div className="task-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
            eveniet aliquid error voluptatem est sequi excepturi quae nemo
            asperiores, fugiat architecto repellat nihil, quod eaque.
          </div>
        </div>
        <div className="task-foot">
          <div className="task-tags">
            <span>💻</span>
            <span>👨‍💻</span>
            <span>📝</span>
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
      <div className="task-box">
        <div className="task-wrap">
          <div className="task-head">
            <div className="task-title">7 do something important</div>
            <div className="task-drowdown">
              <FontAwesomeIcon icon={faSortDown} size="lg" />
            </div>
          </div>
          <div className="task-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
            eveniet aliquid error voluptatem est sequi excepturi quae nemo
            asperiores, fugiat architecto repellat nihil, quod eaque.
          </div>
        </div>
        <div className="task-foot">
          <div className="task-tags">
            <span>💻</span>
            <span>👨‍💻</span>
            <span>📝</span>
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
      <div className="task-box">
        <div className="task-wrap">
          <div className="task-head">
            <div className="task-title">8 do something creative</div>
            <div className="task-drowdown">
              <FontAwesomeIcon icon={faSortDown} size="lg" />
            </div>
          </div>
          <div className="task-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
            eveniet aliquid error voluptatem est sequi excepturi quae nemo
            asperiores, fugiat architecto repellat nihil, quod eaque.
          </div>
        </div>
        <div className="task-foot">
          <div className="task-tags">
            <span>💻</span>
            <span>👨‍💻</span>
            <span>📝</span>
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
      <div className="task-box">
        <div className="task-wrap">
          <div className="task-head">
            <div className="task-title">9 do something challenging</div>
            <div className="task-drowdown">
              <FontAwesomeIcon icon={faSortDown} size="lg" />
            </div>
          </div>
          <div className="task-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
            eveniet aliquid error voluptatem est sequi excepturi quae nemo
            asperiores, fugiat architecto repellat nihil, quod eaque.
          </div>
        </div>
        <div className="task-foot">
          <div className="task-tags">
            <span>💻</span>
            <span>👨‍💻</span>
            <span>📝</span>
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
      <div className="task-box">
        <div className="task-wrap">
          <div className="task-head">
            <div className="task-title">10 do something interesting</div>
            <div className="task-drowdown">
              <FontAwesomeIcon icon={faSortDown} size="lg" />
            </div>
          </div>
          <div className="task-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
            eveniet aliquid error voluptatem est sequi excepturi quae nemo
            asperiores, fugiat architecto repellat nihil, quod eaque.
          </div>
        </div>
        <div className="task-foot">
          <div className="task-tags">
            <span>💻</span>
            <span>👨‍💻</span>
            <span>📝</span>
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
    </div>
  );
};

export default Content;
