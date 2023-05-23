import React from "react";
import contactImg from "../images/contact-img-portfolio.webp";
import {
  faEnvelope,
  faPhone,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactPage() {
  // Function to open the default email client and populate the email address
  const handleEmail = () => {
    window.location.href = "mailto:hamidpardesyar@live.dk";
  };
  return (
    <section className="contact-page">
      <div className="contact-section">
        <div className="contact-text">
          <h1>lets talk</h1>
          <br />
          <span
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#4c5253",
              textTransform: "uppercase",
            }}
          >
            I'm always open to new opportunities
          </span>
          <p>
            Thank you for your interest in my portfolio. I appreciate your time
            and consideration. If you have any questions, collaboration ideas,
            or would like to discuss potential opportunities, please feel free
            to reach out to me. I look forward to hearing from you and will
            respond as soon as possible.
          </p>
          <button onClick={handleEmail} className="contact-button">
            <FontAwesomeIcon
              style={{ marginRight: "10px" }}
              icon={faPaperPlane}
            />
            Send Email
          </button>
        </div>
        <div className="card-container">
          <div className="contact-card">
            <div className="contact-details">
              <div className="contact-image">
                <img src={contactImg} alt="Contact" />
              </div>
              <div className="contact-details">
                <h2>Contact informations</h2>
                <p>
                  <FontAwesomeIcon icon={faEnvelope} /> hamidpardesyar@live.dk
                </p>
                <p>
                  <FontAwesomeIcon icon={faPhone} /> (+45) 50 43 04 56
                </p>

                <div className="contact-social">
                  <h3>Follow me on</h3>
                  <a
                    href="https://github.com/hamiboy8260"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="github">
                      {<FontAwesomeIcon icon={faGithub} />}
                    </i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/hamid-pardesyar-6700631a1/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="linkedIn">
                      {<FontAwesomeIcon icon={faLinkedin} />}{" "}
                    </i>
                  </a>
                  <a
                    href="https://www.facebook.com/hamid.pardesyar/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="facebook">
                      {<FontAwesomeIcon icon={faFacebook} />}{" "}
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
