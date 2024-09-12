import React from "react";
import "./Home.css";
import AngelRight from "./Assets/angle_right_icon.svg";
import { Link } from "react-router-dom";
import ServiceImg from "./Assets/b5a586314e33996f0406889eea26a0d6.png";
import ItemImg from "./Assets/4053386bcf7eef3daa91311433a0bdd1.jpg";
import GetInTouch from "../../Components/GetInTouch/GetInTouch";
import ServicesAndProjectsItem from "../../Components/ServicesItem/ServicesAndProjectsItem";
import PartnersLogo from "./Assets/710f06b7be7c86841477d36b0a51c066.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Home = () => {
  const servicesData = [
    {
      id: 1,
      title: "Electrical and Mechanical 1",
      image: ItemImg,
    },
    {
      id: 2,
      title: "Electrical and Mechanical 2",
      image: ItemImg,
    },
    {
      id: 3,
      title: "Electrical and Mechanical 3",
      image: ItemImg,
    },
    {
      id: 4,
      title: "Electrical and Mechanical 2",
      image: ItemImg,
    },
    {
      id: 5,
      title: "Electrical and Mechanical 3",
      image: ItemImg,
    },
  ];

  const projectsData = [
    {
      id: 1,
      title: "Electrical and Mechanical 1",
      image: ItemImg,
    },
    {
      id: 6,
      title: "Electrical and Mechanical 7",
      image: ItemImg,
    },
    {
      id: 2,
      title: "Electrical and Mechanical 2",
      image: ItemImg,
    },
    {
      id: 3,
      title: "Electrical and Mechanical 3",
      image: ItemImg,
    },
    {
      id: 4,
      title: "Electrical and Mechanical 4",
      image: ItemImg,
    },
    {
      id: 5,
      title: "Electrical and Mechanical ",
      image: ItemImg,
    },
  ];
  return (
    <div className="Home__Page">
      <section className="section1">
        <div className="section1__left">
          <div className="container">
            <p>EMS Contracting</p>
            <h2>
              Delivering first-class commercial maintenance nation wide 24/7
            </h2>
            <button className="btn__enquiry">Make An Enquiry</button>
          </div>
        </div>
      </section>

      <section className="about__sec1 container">
        <div className="about__sec1__img">
          <img
            src="https://s3-alpha-sig.figma.com/img/e567/1821/ec71098de423976dacb7f436dd41ac98?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=elgbXgDKK1ddr0zyGuSMvcZu0MvmRLISR9EYrnsS4mi9UoJHvkgWqMnLOoJRJ5e04gQpFtjrWaM8giEONFg7AZLnnnHlSgZgJf4pCKiJJ8gCWbs0S6pdJmLViD~oDzQf-Enwtyjh0ggYhWZFFxRXzHletAWautfakNDkrvsOg~Acra86qCgrCheG-Avm9RIvz6f7saPjVx~Cpp3X6di8ndSmVOdNZ1LiRuRsmFyTlWb2aEctVXBTrTapkwC9Rpii9aL~4YChIYl2AkNIKfZxViM4x20Ni-b5ngBi4tg5~-9wV6LwL4Vubi89irhGLzkq0PI7SL90lM2GlPA1iGARnw__"
            alt=""
          />
        </div>

        <div className="about__sec1__text">
          <h6>About Us</h6>
          <h3>Welcome to EMS Contracting</h3>
          <p>
            EMS Contracting, founded in 2013 by Mick Donkin and Kris Armstrong
            then later joined by key director Daryl Shepherd, incorporates 3
            divisions - Metering, Renewables and Recycling.
          </p>
          <div className="img4__icon">
            <img
              src="https://s3-alpha-sig.figma.com/img/681c/0d38/710f06b7be7c86841477d36b0a51c066?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ADMNsZktlZWm-TXx5TGr-Mzf2-ZUMiWg55DxuBWGtUoyCGpAJwLQXO-bzcwGJwnrIOaWCjay7xco6GJSbXTH~YMhafl1WxQKPtR9idzt~D0Z17UPnIrVFlz~PxkdZuXcOVSoMhRONXSzZIJa6XaCGCYgQmfhw5SzCqlUWz3Bbb~CYVrfnI7~B~Am3qEEXtiqCDwR6W~-ozbhc8-bqMhBryqZNuB~GhMf8OxhLi4M3REOnV5iUVOHcQaXyR8oXyXpJtUz34MDfcCA04FcD4nrLtfGQ2wnCse4MwRlx4cEWOp7SazxLzivuIWb7kmeE2iB6UxkHFfce0brJe6KhCQelA__"
              alt=""
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/681c/0d38/710f06b7be7c86841477d36b0a51c066?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ADMNsZktlZWm-TXx5TGr-Mzf2-ZUMiWg55DxuBWGtUoyCGpAJwLQXO-bzcwGJwnrIOaWCjay7xco6GJSbXTH~YMhafl1WxQKPtR9idzt~D0Z17UPnIrVFlz~PxkdZuXcOVSoMhRONXSzZIJa6XaCGCYgQmfhw5SzCqlUWz3Bbb~CYVrfnI7~B~Am3qEEXtiqCDwR6W~-ozbhc8-bqMhBryqZNuB~GhMf8OxhLi4M3REOnV5iUVOHcQaXyR8oXyXpJtUz34MDfcCA04FcD4nrLtfGQ2wnCse4MwRlx4cEWOp7SazxLzivuIWb7kmeE2iB6UxkHFfce0brJe6KhCQelA__"
              alt=""
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/681c/0d38/710f06b7be7c86841477d36b0a51c066?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ADMNsZktlZWm-TXx5TGr-Mzf2-ZUMiWg55DxuBWGtUoyCGpAJwLQXO-bzcwGJwnrIOaWCjay7xco6GJSbXTH~YMhafl1WxQKPtR9idzt~D0Z17UPnIrVFlz~PxkdZuXcOVSoMhRONXSzZIJa6XaCGCYgQmfhw5SzCqlUWz3Bbb~CYVrfnI7~B~Am3qEEXtiqCDwR6W~-ozbhc8-bqMhBryqZNuB~GhMf8OxhLi4M3REOnV5iUVOHcQaXyR8oXyXpJtUz34MDfcCA04FcD4nrLtfGQ2wnCse4MwRlx4cEWOp7SazxLzivuIWb7kmeE2iB6UxkHFfce0brJe6KhCQelA__"
              alt=""
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/681c/0d38/710f06b7be7c86841477d36b0a51c066?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ADMNsZktlZWm-TXx5TGr-Mzf2-ZUMiWg55DxuBWGtUoyCGpAJwLQXO-bzcwGJwnrIOaWCjay7xco6GJSbXTH~YMhafl1WxQKPtR9idzt~D0Z17UPnIrVFlz~PxkdZuXcOVSoMhRONXSzZIJa6XaCGCYgQmfhw5SzCqlUWz3Bbb~CYVrfnI7~B~Am3qEEXtiqCDwR6W~-ozbhc8-bqMhBryqZNuB~GhMf8OxhLi4M3REOnV5iUVOHcQaXyR8oXyXpJtUz34MDfcCA04FcD4nrLtfGQ2wnCse4MwRlx4cEWOp7SazxLzivuIWb7kmeE2iB6UxkHFfce0brJe6KhCQelA__"
              alt=""
            />
          </div>
          <Link to="/about">
            <button className="btn__see__more">
              See More <img src={AngelRight} alt="AngelRightIcon" />
            </button>
          </Link>
        </div>
      </section>

      <section className="projects__sec3">
        <h2>Projects</h2>
        <div className="container">
          <Swiper
            spaceBetween={16}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            breakpoints={{
              768: {
                spaceBetween: 20,
                slidesPerView: 2,
              },
              992: {
                spaceBetween: 24,
                slidesPerView: 3,
              },
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {projectsData.map((item) => (
              <SwiperSlide key={item.id}>
                <Link to={`/project-detail:${item.id}`}>
                  <ServicesAndProjectsItem data={item} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <section className="services__sec4">
        <h2>Services</h2>
        <div className="container">
          <div className="home__services">
            <Swiper
              spaceBetween={16}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              slidesPerView={1}
              breakpoints={{
                768: {
                  spaceBetween: 20,
                  slidesPerView: 2,
                },
                992: {
                  spaceBetween: 24,
                  slidesPerView: 3,
                },
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {servicesData.map((item) => (
                <SwiperSlide key={item.id}>
                  <Link to={`/service-detail:${item.id}`}>
                    <ServicesAndProjectsItem data={item} />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <section className="service__blue">
        <div className="container">
          <img src={ServiceImg} alt="ServiceImg" />
          <p>
            You will be satisfy with our work contact us today & help is on the
            way
          </p>
          <Link>
            <button className="btn__schedule__service">
              Schedule a Service <br /> <img src={AngelRight} alt="" />
            </button>
          </Link>
        </div>
      </section>

      <section className="our__partner__sec6">
        <h2>Our Partner</h2>
        <div className="partners">
          
          <Link>
            <img src={PartnersLogo} alt="" />
          </Link>
          <Link>
            <img src={PartnersLogo} alt="" />
          </Link>
          <Link>
            <img src={PartnersLogo} alt="" />
          </Link>
          <Link>
            <img src={PartnersLogo} alt="" />
          </Link>
          <Link>
            <img src={PartnersLogo} alt="" />
          </Link>
          <Link>
            <img src={PartnersLogo} alt="" />
          </Link>
          <Link>
            <img src={PartnersLogo} alt="" />
          </Link>
          <Link>
            <img src={PartnersLogo} alt="" />
          </Link>
          <Link>
            <img src={PartnersLogo} alt="" />
          </Link>
          <Link>
            <img src={PartnersLogo} alt="" />
          </Link>
        </div>
      </section>

      <section className="contact__sec5">
        <GetInTouch />
      </section>
    </div>
  );
};

export default Home;
