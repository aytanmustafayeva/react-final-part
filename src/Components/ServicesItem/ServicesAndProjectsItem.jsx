import React from "react";
import { Link } from "react-router-dom";
import "./ServicesAndProjectsItem.css";
import ServiceImage from "./Assets/4053386bcf7eef3daa91311433a0bdd1.jpg";
import AngelRight from "./Assets/angle_right_icon.svg";

const ServicesAndProjectsItem = ({ data, button = "Book now" }) => {
  return (
    <>
      <div className="pro__serv__item">
        <div className="img__header">
          <img src={data?.image} alt="ServicesItem" />
          <h6> {data?.title} </h6>
        </div>
        <button className="btn__book__now">
          {button} <img src={AngelRight} alt="AngelRightIcon" />
        </button>
      </div>
      {/* <Link className="service__item" to="/service-detail">
          <div className="img__header">
            <img src={ServiceImage} alt="ServicesItem" />
            <h6>Electrical and Mechanical</h6>
          </div>
          <button className="btn__book__now">
            Book Now <img src={AngelRight} alt="AngelRightIcon" />
          </button>
        </Link> */}
      {/* <Link className="service__item" to="/service-detail">
          <div className="img__header">
            <img src={ServiceImage} alt="ServicesItem" />
            <h6>Electrical and Mechanical</h6>
          </div>
          <button className="btn__book__now">
            Book Now <img src={AngelRight} alt="AngelRightIcon" />
          </button>
        </Link> */}
    </>
  );
};

export default ServicesAndProjectsItem;
