import React from "react";
import { Link } from "react-router-dom";
import "./ProjectDetail.css";
import EachPageHead from "../../Components/EachPageHead/EachPageHead";
import ProjectsImg from "./Assets/projects-detail-img.png";
import ProjectsHeadBackImg from "./Assets/service-head-back-img.png";

const ProjectDetail = () => {
  const DetailOfProjects = {
    date: "September 15, 2021",
    client: "Industrial Company",
    location: "New York, USA",
    category: "Home Protection",
  };

  return (
    <div>
      <section className="each__page__head">
        <EachPageHead
          backgroundImage={ProjectsHeadBackImg}
          heading="Projects"
        />
      </section>
      <section className="pro__detail__sec">
        <div className="container">
          <div className="pro__detail__up">
            <img src={ProjectsImg} alt="Projects-Img" />
            <div className="detail__date">
              <ul>
                <li>
                  <strong>Date:</strong> {DetailOfProjects.date}
                </li>
                <li>
                  <strong>Client:</strong> {DetailOfProjects.client}
                </li>
                <li>
                  <strong>Location:</strong> {DetailOfProjects.location}
                </li>
                <li>
                  <strong>Category:</strong> {DetailOfProjects.category}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="pro__detail__text">
        <div className="container">
          <h4>Project Detail</h4>
          <p>
            We were contracted to advise and improve the lighting in the main
            hall. <br /> <br />
            <br />
            The lighting that they were using was 500W halogen flood lights
            which meant they had very high energy bills and unnecessary
            maintenance issues. <br /> <br /> <br />
            Our lighting design team used an LED high power flood light with an
            energy saving of 450w per fitting, so not only a massive saving but
            a manufacturer's warranty of 5 years. <br /> <br /> <br />
            The church are very happy as the savings they have made have allowed
            them to invest in other areas.
          </p>
          <div className="prev__next">
            <Link>
              <button className="btn__prev__next">Previous</button>
              <h6>SG Petch - Mazda LED...</h6>
            </Link>
            <Link>
              <button className="btn__prev__next">Next</button>
              <h6>LED Lighting Project</h6>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
