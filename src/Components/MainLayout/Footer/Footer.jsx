import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Footer.css";
import { NavLink, Link } from "react-router-dom";
import Facebook from "./Assets/facebook-svgrepo-com.svg";
import Twitter from "./Assets/twitter-round-svgrepo-com.svg";
import Instagram from "./Assets/instagram-167-svgrepo-com.svg";
import Youtube from "./Assets/youtube-168-svgrepo-com.svg";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  const isDarkMode = location.pathname !== "/";

  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/services")
      .then((response) => {
        setServices(response.data);
      })
      .catch((error) => {
        console.error("Error 404", error);
      });
  }, []);

  return (
    <div>
      <div className={`footer__up ${isDarkMode ? "dark" : ""}`}>
        <div className="container">
          <ul className="footer__emscontracting">
            <h5>EMS Contracting</h5>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "active footer__navlink" : "footer__navlink"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "active footer__navlink" : "footer__navlink"
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "active footer__navlink" : "footer__navlink"
                }
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Blogs"
                className={({ isActive }) =>
                  isActive ? "active footer__navlink" : "footer__navlink"
                }
              >
                Blogs
              </NavLink>
            </li>
          </ul>

          <ul className="footer__services">
            <h5>Services</h5>

            {services.slice(0, 5).map((service) => (
              <li key={service.id}>
                <NavLink
                  to={`/service-detail/${service.id}`}
                  className={({ isActive }) =>
                    isActive ? "active footer__navlink" : "footer__navlink"
                  }
                >
                  {service.title}
                </NavLink>
              </li>
            ))}
          </ul>

          <ul className="footer__contact">
            <h5>Contact Us</h5>
            <li>
              <Link className="location">
                EMS, Unit 19, City Road, Inner man Street, Switzerland, SR5 2BN
              </Link>
            </li>
            <li>
              <Link className="footer__phone">+91 8630 816230</Link>
            </li>
            <li>
              <Link className="footer__email">parashard641@gmail.com</Link>
            </li>
          </ul>

          <ul className="footer__socialmedia">
            <h5>Follow Us</h5>
            <ul className="socialmedia__list">
              <li>
                <Link to="/">
                  <img src={Facebook} alt="facebook-icon" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src={Twitter} alt="twitter-icon" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src={Instagram} alt="instagram-icon" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src={Youtube} alt="youtube-icon" />
                </Link>
              </li>
            </ul>
          </ul>
        </div>
      </div>
      <div className="footer__down">
        <p>
          @ 2024, Made with ❤️ by <span>Deepak</span> &
          <span>Creative Tweaks </span> for a better web
        </p>
      </div>
    </div>
  );
};

export default Footer;
