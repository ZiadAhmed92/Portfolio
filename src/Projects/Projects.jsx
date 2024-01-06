import React, { useState } from "react";
import img1 from "../Image/crud.png";
import img2 from "../Image/movies.png";
import img3 from "../Image/games.png";
import img4 from "../Image/fadl.png";
import img5 from "../Image/commerce.png";
import img6 from "../Image/protofolio-main.png";
import img7 from "../Image/dashboard.png";
import img8 from "../Image/quran.png";
import img9 from "../Image/amazon.png";
import img10 from "../Image/saraha.png";
import img11 from "../Image/crudNode.png";
const Projects = ({ color }) => {
  let projectAll = [
    {
      img: img2,
      category: "react",
      name: "MOVIES",
      desc: "A site that shows you the movies that topped the trend, find out every detail you want to know about the movie, know the directors, and many details, and I have used React ",
      url: "http://movie-ziad.vercel.app/",
      github: "https://github.com/ZiadAhmed92/movie",
    },
    {
      img: img5,
      category: "react",
      name: "Ecommerce",
      desc: "An easy-to-use online store and all products are available in it, such as clothes, shoes, and electrical appliances, and programming languages are used React & Material Ui",
      url: "https://ecommerce-ziad.vercel.app/",
      github: "https://github.com/ZiadAhmed92/ecommerce",
    }
    , {
      img: img9,
      category: "react",
      name: "Amazon",
      desc: "An easy-to-use online store and all products are available in it, such as clothes, shoes, and electrical appliances, and programming languages are used Next Js & Redux ",
      url: "https://e-amazon-31lu.vercel.app/",
      github: "https://github.com/ZiadAhmed92/E-amazon",
    }
    , {
      img: img7,
      category: "react",
      name: "Dashboard",
      desc: "A Dashboard that I created using the Matrial UI and ReactJS ",
      url: "https://dashboard-delta-olive.vercel.app/",
      github: "https://github.com/ZiadAhmed92/Dashboard",
    },
    ,
    {
      img: img8,
      category: "react",
      name: "Quran",
      desc: " The Holy Qur’an website contains the complete Qur’an with the voices of all sheikhs and many languages",
      url: "https://quran-two-sigma.vercel.app/",
      github: "https://github.com/ZiadAhmed92/quran",
    },
    ,
    {
      img: img10,
      category: "next",
      name: "Saraha",
      desc: " Sarahah website: You can create an account and send the link to your friends and send you secret messages",
      url: "https://sarahaa.vercel.app/",
      github: "https://github.com/ZiadAhmed92/sarahaa",
    },
    {
      img: img6,
      category: "react",
      name: "portfolio",
      desc: "A personal website that shows you a person's work and knowledge of his skills, and programming languages are used React",
      url: "https://ziad-peach.vercel.app/",
      github: "https://github.com/ZiadAhmed92/ziad",
    },
    {
      img: img3,
      category: "react",
      name: "Games",
      desc: "  A games website that gives you a speed of use that you can not find on any other site, as it enables you to download the latest games and try them with the lowest service.",
      url: "https://ziadahmed92.github.io/Games/",
      github: "https://github.com/ZiadAhmed92/Games",
    },
    {
      img: img1,
      category: "js",
      name: "CRUD",
      desc: "  The project is a system that allows the user to add, remove, and modify any products that I have used javascript and Html And css",
      url: "https://ziadahmed92.github.io/Crud/crud.html",
      github: "https://github.com/ZiadAhmed92/Crud",
    }
    ,
    {
      img: img4,
      category: "react",
      name: "Material",
      desc: " A site that helps you find summaries and the practical part inall academic subjects , It is assigned to the Korean College ofTechnology, Department of Mechatronics",
      url: "http://app2-v7ma.vercel.app/",
      github: "https://github.com/ZiadAhmed92/app2",
    },
    ,
    {
      img: img11,
      category: "node",
      name: "CRUD",
      desc: "The FullStack project is a system that allows the user to add, remove, and modify any products that I have used React Js and Node Js and Express Js and Database => Mongoose",
      url: "http://crud-mongoose-ten.vercel.app",
      github: "https://github.com/ZiadAhmed92/crudBackendMongoose",
    },

  ];
  
  const [projects, setProjects] = useState(projectAll);
  function filterProject(cate) {
    let newProject = projectAll.filter((item) => item.category === cate);
    setProjects(newProject);
  }
  return (
    <div className="py-3" id="projects">
      <h1 className="text-mobile text-center py-3">
        Best Projects / Live Productions
      </h1>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="p-btn3">
              <button
                className={`btn3  ${color[3] === "bg-white4"
                    ? color[3] + " text-white"
                    : color[3] + " text-white"
                  }`}
                onClick={() => setProjects(projectAll)}
              >
                All Projects
              </button>

              <button
                className={`btn3  ${color[3] === "bg-white4"
                    ? color[3] + " text-white"
                    : color[3] + " text-white"
                  }`}
                onClick={() => {
                  filterProject("react");
                }}
              >
                React
              </button>

              <button
                className={`btn3  ${color[3] === "bg-white4"
                    ? color[3] + " text-white"
                    : color[3] + " text-white"
                  }`}
                onClick={() => {
                  filterProject("node");
                }}
              >
                NodeJs
              </button>
            </div>
          </div>
          {projects.map((item, i) => {
            return (
              <div className="col-lg-4 col-md-6 project-me py-3" key={i}>
                <div className="project position-relative">
                  <img src={item.img} className="img-project w-100 " />
                  <div className="btn-projects">
                    <h6 className="fw-bold p-3 fs-5 text-black">{item.name}</h6>
                    <h6 className="fw-bold p-3 text-black fs-5">
                      <a
                        className="text-black p-2 btn-projects github "
                        href={item.github}
                        target="_blank"
                      >
                        Github <i className="px-2 fs-5 fa-brands fa-github"></i>{" "}
                      </a>
                    </h6>
                  </div>{" "}
                  <p className="text-project p-3 text-muted">{item.desc}</p>
                  <a target="_blank" href={item.url}>
                    {" "}
                    <button
                      className={`btn2 btn-project position-abs  ${color[3] === "bg-white4"
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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
