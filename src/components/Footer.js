import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import logo from "../images/logo.png";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="logo-container">
          <img src={logo} alt="Logo" />
        </div>
        <div className="contact-container">
          <span>
            <p>Contact me</p>
          </span>

          <p>
            <i>
              <FontAwesomeIcon icon={faPhone} />
            </i>
            50430356
          </p>
          <p>
            <i>
              <FontAwesomeIcon icon={faEnvelope} />
            </i>
            Hamidpardesyar@live.dk
          </p>
        </div>
        <div className="address-container">
          <span>
            <p>Based in</p>
          </span>
          <p>Tilst 8381</p>
          <p>Aarhus, Denmark</p>
        </div>
        <div className="social-media-container">
          <span>
            <p>Social media</p>
          </span>
          <a
            href="https://github.com/hamiboy8260"
            target="_blank"
            rel="noreferrer"
          >
            <i className="github">{<FontAwesomeIcon icon={faGithub} />}</i>
          </a>
          <a
            href="https://www.linkedin.com/in/hamid-pardesyar-6700631a1/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="linkedIn">{<FontAwesomeIcon icon={faLinkedin} />} </i>
          </a>
          <a
            href="https://www.facebook.com/hamid.pardesyar/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="facebook">{<FontAwesomeIcon icon={faFacebook} />} </i>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright &copy; 2023 Hamid Pardesyar</p>{" "}
      </div>
    </footer>
  );
}
