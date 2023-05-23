import { useEffect, useState } from "react";
import AutoType from "../components/AutoType";
import InfoCardSection from "../components/InfoCardSection";
import tailwindcss from "../images/tailwind-css.svg";
import mySql from "../images/mysql.svg";
import mongoDb from "../images/mongodb.svg";
import pwa from "../images/pwa.svg";
import Post from "../components/Post";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faJs,
  faReact,
  faPhp,
  faCss3Alt,
  faGithub,
  faFigma,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const randomPosts = posts.sort(() => 0.5 - Math.random()).slice(0, 3);
  const handleClick = () => {
    window.location.href = "/projects";
  };

  useEffect(() => {
    async function getPosts() {
      // Fetching data from Firebase database
      const response = await fetch(
        "https://react-portfolio-spa-default-rtdb.firebaseio.com/posts.json"
      );
      // Converting data to JSON
      const data = await response.json();
      // Creating an array of objects from the data
      const postsArray = Object.keys(data).map((key) => ({
        id: key, // Unique key for each object
        ...data[key],
      }));
      setPosts(postsArray); // Setting the state to the array of objects
    }
    getPosts();
  }, []);

  return (
    <>
      <div className="hero-img-div">
        <AutoType />
      </div>
      <div className="quote-section">
        <div className="quote-content">
          <div className="quote-mark">
            <FontAwesomeIcon style={{ color: "white" }} icon={faQuoteLeft} />
          </div>
          <div className="quote-text">
            <p>
              "Web development is like building a city. code of lines are
              building blocks, functions are cornerstones. With careful
              planning, it can be a digital masterpiece as the city grows with
              new features." <br /> <br />{" "}
              <span style={{ fontSize: "20px" }}>- Hamid Pardesyar</span>
            </p>
          </div>
        </div>
      </div>
      <section className="skills-cards-section">
        <h1>Skills</h1>
        <InfoCardSection />
      </section>
      <section className="webdev-section">
        <div className="webdev-container">
          <div className="webdev-text">
            <h1 style={{ color: "white", textDecoration: "none" }}>
              Web development
            </h1>
            <p>
              I am an aspiring Frontend Developer with focus on UI/UX Design to
              offer the best possible experience for clients and users.
              Currently finishing my Bachelor's degree in Web Development at the
              Business Academy Aarhus. I work with the following languages, web
              tools and technologies
            </p>
          </div>
          <div className="webdev-icons">
            <i>
              <img src={mySql} alt="mysqlimg" />
            </i>
            <i>{<FontAwesomeIcon icon={faJs} />}</i>
            <i>{<FontAwesomeIcon icon={faCss3Alt} />}</i>
            <i>{<FontAwesomeIcon icon={faPhp} />}</i>
            <i>{<FontAwesomeIcon icon={faReact} />}</i>
            <i>
              <img
                src={tailwindcss}
                className="tailwindcss-svg"
                alt="aboutimg"
              />
            </i>
            <i>{<FontAwesomeIcon icon={faHtml5} />}</i>
            <i>{<FontAwesomeIcon icon={faGithub} />}</i>
            <i>
              <img src={pwa} alt="pwa" />
            </i>
            <i>{<FontAwesomeIcon icon={faFigma} />}</i>
            <i>{<FontAwesomeIcon icon={faWordpress} />}</i>
            <i>
              <img src={mongoDb} alt="mongodb" />
            </i>
          </div>
        </div>
      </section>
      <section className="homepage-posts-section">
        <h1>Some of my work</h1>
        <div className="grid-container">
          {randomPosts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
        <button onClick={handleClick}>All projects</button>
      </section>
    </>
  );
}
