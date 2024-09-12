import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./ServiceDetail.css";
import EachPageHead from "../../Components/EachPageHead/EachPageHead";
import ServiceHeadBackImg from "./Assets/service-head-back-img.png";
import ServiceDetailImg from "./Assets/service-detail-img.png";
import AngelRight from "./Assets/angle_right_icon.svg";
import Hammers from "./Assets/hammer.png";

const ServiceDetail = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [servicesList, setServicesList] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/services`)
      .then((response) => {
        setServicesList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching services list", error);
      });
  }, []);

  if (!service) {
    return <div>not data </div>;
  }

  useEffect(() => {
    axios
      .get(`http://localhost:5000/services/${id}`)
      .then((response) => {
        setService(response.data);
      })
      .catch((error) => {
        console.error("Error fetching service", error);
      });
  }, [id]);

  return (
    <div>
      <section className="each__page__head">
        <EachPageHead backgroundImage={ServiceHeadBackImg} heading="Services" />
      </section>
      <div className="serv__detail">
        <div className="container">
          <aside className="serv__detail__left">
            {/* <ul className="list__of__service__detail">
              <li>
                <Link className="links__of__serv__detail">
                  Electrical and Mechanical
                </Link>
              </li>
              <li>
                <Link className="links__of__serv__detail">
                  Air Conditioning and Ventilation
                </Link>
              </li>
              <li>
                <Link className="links__of__serv__detail"> Refrigeration</Link>
              </li>
              <li>
                <Link className="links__of__serv__detail">
                  Renewable Energy and Heating
                </Link>
              </li>
              <li>
                <Link className="links__of__serv__detail">
                  Electrical and Mechanical
                </Link>
              </li>
              <li>
                <Link className="links__of__serv__detail">
                  Air Conditioning and Ventilation
                </Link>
              </li>
              <li>
                <Link className="links__of__serv__detail"> Refrigeration</Link>
              </li>
            </ul> */}

            <ul className="list__of__service__detail">
              {servicesList.slice(0, 6).map((serv) => (
                <li key={serv.id}>
                  <Link
                    to={`/services/${serv.id}`}
                    className="links__of__serv__detail"
                  >
                    {serv.title}
                  </Link>
                </li>
              ))}
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
          <section className="service__detail__sec">
            <div className="detail__img">
              <img src={ServiceDetailImg} alt="" />
            </div>
            <div className="detail__text">
              <h2>{service.name}</h2>
              <p>{service.description}</p>
              <h5>Details</h5>
              <ul>
                {service.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
              {/* <h2>Electrical and Mechanical Services</h2>
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
              </ul> */}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
