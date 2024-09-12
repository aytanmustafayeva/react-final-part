import React from "react";
import "./BlogDetail.css";
import { Link, useParams } from "react-router-dom";
import EachPageHead from "../../Components/EachPageHead/EachPageHead";
import BlogHeadBackImg from "./Assets/service-head-back-img.png";
import BlogItemImg from "./Assets/pro-serv-img.png";
import AngelRight from "./Assets/angle_right_icon.svg";
import Hammers from "./Assets/hammer.png";

const BlogDetail = () => {
  return (
    <div>
      <section className="each__page__head">
        <EachPageHead backgroundImage={BlogHeadBackImg} heading="Blog Detail" />
      </section>
      <div className="blog__detail">
        <div className="container">
          <aside className="blog__detail__left">
            <h2>Others Blogs</h2>
            <ul className="list__of__blog__detail">
              <li>
                <Link className="links__of__blog1__detail">
                  <img src={BlogItemImg} alt="" />
                 Electrical and Mechanical   <img src={AngelRight} alt="AngelRight" />
                </Link>
              </li>
              <li>
                <Link className="links__of__blog1__detail">
                  <img src={BlogItemImg} alt="" />
                  Electrical and Mechanical  <img src={AngelRight} alt="AngelRight"/>
                </Link>
              </li>{" "}
              <li>
                <Link className="links__of__blog1__detail">
                  <img src={BlogItemImg} alt="" />
                  Electrical and Mechanical  <img src={AngelRight} alt="AngelRight" />
                </Link>
              </li>
            </ul>

            <div className="enquiry__sec">
              <img src={Hammers} alt="hammers" className="hammers" />
              <div className="enquiry">
                <h6>Need Help?</h6>
                <p>Find a Handyman In DC For Your Next Task</p>
                <Link to="/">
                  <button className="btn__detail__enquiry">
                    Make An Enquiry <img src={AngelRight} alt="AngelRight" />
                  </button>
                </Link>
              </div>
            </div>
          </aside>
          <section className="blog__detail__sec">
            <div className="detail__img">
              <img src={BlogItemImg} alt="" />
            </div>
            <div className="detail__text">
              <h2>Electrical and Mechanical Services</h2>
              <p>We provide a comprehensive service that offers:</p>
              <h5>Electrical</h5>
              <ul>
                <li>Domestic installations and maintenance</li>
                <li>Commercial installations and maintenance </li>
                <li>Industrial installations and maintenance</li>
                <li>Bespoke lighting designs</li>
                <li>LED energy saving schemes</li>
                <li>Fixed wiring inspection and testing</li>
                <li>Fault finding and diagnostic</li>
                <li>Portable appliance testing</li>
                <li>Portable appliance testing</li>
                <li>PAT testing and other safety testing and inspection</li>
              </ul>
              <h5>Mechanical</h5>
              <ul>
                <li>
                  Our Mechanical Services Team offer a first class service from
                  high velocity lip extraction systems to to full Gas safety
                  interlock supply and extract systems
                </li>
                <li>
                  We have our own workshop facilities where we can design,
                  install and maintain all works.
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
