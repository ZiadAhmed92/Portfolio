import React from "react";
import img1 from "../Image/crud.png";
import img2 from "../Image/movies.png";
import img3 from "../Image/games.png";
import img4 from "../Image/fadl.png";
import img5 from "../Image/commerce.png";
import img6 from "../Image/protofolio-main.png";
const Projects = ({ color }) => {
  let projects = [
    {
      img: img2,
      name: "MOVIES",
      desc: "A site that shows you the movies that topped the trend, find out every detail you want to know about the movie, know the directors, and many details, and I have used React ",
      url: "http://movie-ziad.vercel.app/",
    },
    {
      img: img5,
      name: "Ecommerce",
      desc: "An easy-to-use online store and all products are available in it, such as clothes, shoes, and electrical appliances, and programming languages are used React & Material Ui",
      url: "https://ecommerce-ziad.vercel.app/",
    },
    {
      img: img6,
      name: "portfolio",
      desc: "A personal website that shows you a person's work and knowledge of his skills, and programming languages are used React",
      url: "https://ziad-peach.vercel.app/",
    },
    {
      img: img3,
      name: "Games",
      desc: "  A games website that gives you a speed of use that you cannotfind on any other site, as it enables you to download the latestgames and try them with the lowest service.",
      url: "https://ziadahmed92.github.io/Games/",
    },
    {
      img: img1,
      name: "CRUD",
      desc: "  The project is a system that allows the user to add, remove, and modify any products that I have used javascript and Html And css",
      url: "https://ziadahmed92.github.io/Crud/crud.html",
    },
    {
      img: img4,
      name: "Material",
      desc: " A site that helps you find summaries and the practical part inall academic subjects , It is assigned to the Korean College ofTechnology, Department of Mechatronics",
      url: "http://app2-v7ma.vercel.app/",
    },
  ];
  return (
    <div className="py-3" id="projects">
      <h1 className="text-mobile text-center py-3">
        Best Projects / Live Productions
      </h1>
      <div className="container">
        <div className="row">
          {projects.map((item, i) => {
            return (
              <div className="col-md-6 py-3" key={i}>
                <div className="project">
                  <img src={item.img} className="img-project w-100 " />
                  <h6 className="fw-bold p-3 text-black">{item.name}</h6>
                  <div className="btn-projects">
                    {" "}
                    <p className="text-project p-3 text-muted">{item.desc}</p>
                    <a target="_blank" href={item.url}>
                      {" "}
                      <button
                        className={`btn2  ${
                          color[3] === "bg-white4"
                            ? color[3] + " text-white"
                            : color[3] + " text-white"
                        }`}
                      >
                        {" "}
                        Live Preview
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
