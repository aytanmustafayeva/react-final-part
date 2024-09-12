import React from "react";
import { Link } from "react-router-dom";
import "./ProjectsItem.css";
import ProjectImage from "./Assets/4053386bcf7eef3daa91311433a0bdd1.jpg";
import AngelRight from "./Assets/angle_right_icon.svg";

const ProjectsItem = () => {
  return (
    <div className="container">
      <div className="projects__container">
        <Link className="project__item" to="/project-detail">
          <div className="img__header">
            <img src={ProjectImage} alt="ProjectItem" />
            <h6>Electrical and Mechanical</h6>
          </div>
          <button className="btn__book__now">
            Book Now <img src={AngelRight} alt="AngelRightIcon" />
          </button>
        </Link>
        <Link className="project__item" to="/project-detail">
          <div className="img__header">
            <img src={ProjectImage} alt="ProjectItem" />
            <h6>Electrical and Mechanical</h6>
          </div>
          <button className="btn__book__now">
            Book Now <img src={AngelRight} alt="AngelRightIcon" />
          </button>
        </Link>
        <Link className="project__item" to="/project-detail">
          <div className="img__header">
            <img src={ProjectImage} alt="ProjectItem" />
            <h6>Electrical and Mechanical</h6>
          </div>
          <button className="btn__book__now">
            Book Now <img src={AngelRight} alt="AngelRightIcon" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectsItem;
