import React from "react";
import EachPageHead from "../../Components/EachPageHead/EachPageHead";
import ServicesAndProjectsItem from "../../Components/ServicesItem/ServicesAndProjectsItem";
import BlogImg from "./Assets/pro-serv-img.png";
import BlogHeadBackImg from "./Assets/service-head-back-img.png";
import "./Blog.css";
import { Link } from "react-router-dom";

const Blog = () => {
  const BlogData = [
    {
      id: 1,
      title: "Electrical and Mechanical 1",
      image: BlogImg,
    },
    {
      id: 2,
      title: "Electrical and Mechanical 2",
      image: BlogImg,
    },
    {
      id: 3,
      title: "Electrical and Mechanical 3",
      image: BlogImg,
    },
    {
      id: 4,
      title: "Electrical and Mechanical 3",
      image: BlogImg,
    },
    {
      id: 5,
      title: "Electrical and Mechanical 3",
      image: BlogImg,
    },
    {
      id: 6,
      title: "Electrical and Mechanical 3",
      image: BlogImg,
    },

  ];

  return (
    <div>
      <section className="each__page__head">
        <EachPageHead backgroundImage={BlogHeadBackImg} heading="Blogs" />
      </section>

      <section className="blogs__sec">
        <div className="container">
          <div className="blogs__container">
            {BlogData.map((item) => (
              <Link to="/blog-detail:id" key={item.id}>
                <ServicesAndProjectsItem data={item} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;





