import aboutImg from "../images/Programming-amico.svg";
import pbbillede from "../images/pbbillede.jpeg";
import { useEffect } from "react";
import AOS from "aos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import SchoolIcon from "../icons/school.svg";
import timelineElements from "../components/TimelineElements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function AboutPage() {
  useEffect(() => {
    AOS.init({ once: true }); // "animate on scroll" only once
  }, []);

  return (
    <section className="aboutPage">
      <div className="about-section-top">
        <div className="about-text-top">
          <h1>Who Am I?</h1>
          <br />
          <span
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#4c5253",
              textTransform: "uppercase",
            }}
          >
            Learn more about me, myself and I
          </span>
          <p>
            My name is Hamid Pardesyar, and I was born in 1996. During my spare
            time, I enjoy activities such as playing football, taking walks, and
            spending quality time with my friends and family. I actively seek
            opportunities for personal and professional growth, and I accomplish
            my goals with dedication and enthusiasm. I have a big interest in
            web development and have a strong curiosity that drives me to
            explore various technologies and web design concepts. I am deeply
            motivated to continuously enhance my skills and knowledge in this
            field. Striving for excellence, I am committed to ongoing
            self-improvement both personally and professionally. I am always
            prepared to embrace new challenges as I believe that consistent
            growth and development are fundamental to achieving success.
          </p>
        </div>
        <div className="about-image">
          <img src={aboutImg} alt="aboutimg" />
        </div>
      </div>

      <div className="about-section" data-aos="fade-up">
        <div className="skills-img">
          <img src={pbbillede} alt="aboutimg" />
        </div>
        <div className="about-text">
          <h1>Soft Skills</h1>
          <div className="container">
            <div className="left-container">
              <p>
                <FontAwesomeIcon
                  icon={faCheck}
                  style={{
                    color: "green",
                    fontSize: "30px",
                  }}
                />{" "}
                Engaged and ambitious
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faCheck}
                  style={{ color: "green", fontSize: "30px" }}
                />{" "}
                Adaptable
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faCheck}
                  style={{ color: "green", fontSize: "30px" }}
                />{" "}
                Team player and flexible
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faCheck}
                  style={{ color: "green", fontSize: "30px" }}
                />{" "}
                Curious and brave
              </p>
            </div>
            <div className="right-container">
              <span>
                <p>
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "green", fontSize: "30px" }}
                  />{" "}
                  Good communicator and collaborator
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "green", fontSize: "30px" }}
                  />{" "}
                  Motivated
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "green", fontSize: "30px" }}
                  />{" "}
                  Helpful and friendly
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "green", fontSize: "30px" }}
                  />{" "}
                  Like to play football
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center" data-aos="fade-up">
        <div class="about-wave">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
        <h1>Education</h1>
      </div>

      <VerticalTimeline lineColor="#593030">
        {timelineElements.map((element) => {
          return (
            <VerticalTimelineElement
              contentStyle={{
                background: "white",
                boxShadow: "0px 0px 25px 10px rgba(0, 0, 0, 0.07)",
                borderRadius: "5px",
              }}
              contentArrowStyle={{
                borderRight: "10px solid white",
              }}
              key={element.id}
              date={element.date}
              dateClassName="date"
              iconStyle={{
                background: "#b28f63",
                fill: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              icon={
                <img
                  src={SchoolIcon}
                  alt="school"
                  style={{ height: "30px", width: "30px", fill: "white" }}
                />
              }
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {element.location}
              </h4>
              <p>{element.description}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>

      {/* <div className="timeline">
        <div className="timeline-item left" data-aos="fade-up">
          <div className="timeline-content">
            <h2>Primary school</h2>
            <p>I graduated from Tranbjerg School.</p>
            <span className="date">June, 2015</span>
          </div>
        </div>

        <div className="timeline-item right" data-aos="fade-up">
          <div className="timeline-content">
            <h2>High school (gymnasium)</h2>
            <p>
              I graduated from Viby Gymnasium, where I had the social science
              track, and with five A subjects.
            </p>
            <span className="date">June 25, 2018</span>
          </div>
        </div>
        <div className="timeline-item left" data-aos="fade-up">
          <div className="timeline-content">
            <h2>Multimedia design degree</h2>
            <p>
              I have completed the datamatiker education at the business academy
              Aarhus.
            </p>
            <span className="date">January, 2022</span>
          </div>
        </div>
        <div className="timeline-item right" data-aos="fade-up">
          <div className="timeline-content">
            <h2>Webdevelopment</h2>
            <p>
              Currently finishing my Bachelor's degree in Web Development at the
              Business Academy Aarhus
            </p>
            <span className="date">currently</span>
          </div>
        </div>
      </div> */}
    </section>
  );
}
