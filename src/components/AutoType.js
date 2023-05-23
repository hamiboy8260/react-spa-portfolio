import { useState, useEffect, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import CV from "../pdf/CV.pdf";

function AutoType() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const phrases = useMemo(
    () => ["web developer", "webdesigner", "frontend enthusiast"],
    []
  ); // useMemo is used to prevent the phrases array from being recreated on every render

  // useEffect is used to run the auto typing effect
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentLetterIndex < phrases[currentPhraseIndex].length) {
        setCurrentText(
          (prevText) =>
            prevText + phrases[currentPhraseIndex].charAt(currentLetterIndex)
        );
        setCurrentLetterIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(intervalId);
        setTimeout(() => {
          setCurrentLetterIndex(0);
          setCurrentPhraseIndex(
            (prevIndex) => (prevIndex + 1) % phrases.length
          );
          setCurrentText("");
        }, 1000);
      }
    }, 100);
    return () => clearInterval(intervalId);
  }, [currentLetterIndex, currentPhraseIndex, phrases]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "CV.pdf";
    link.click();
  };

  return (
    <>
      <div className="hero-text-section">
        <div className="hero-text-div">
          <h1
            style={{
              margin: 0,
              marginBottom: "1rem",
              letterSpacing: "0.1em",
              color: "white",
              fontSize: "60px",
              marginLeft: "0",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            Hamid Pardesyar
          </h1>
          <hr />
          <div
            style={{
              display: "flex",
              marginBottom: "0.5rem",
            }}
          >
            <div className="auto-typing-text">
              <span id="autoType-span">I'm a </span>
              <span style={{ color: "#b28f63" }} id="autoType-span">
                {currentText}
              </span>
            </div>
          </div>
          <button className="hero-btn" onClick={handleDownload}>
            download cv <FontAwesomeIcon icon={faDownload} size="lg" />
          </button>
          <div className="social-links-hero">
            <a
              href="https://github.com/hamiboy8260"
              target="_blank"
              rel="noreferrer"
            >
              <i>
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </i>
            </a>
            <a
              href="https://www.linkedin.com/in/hamid-pardesyar-6700631a1/"
              target="_blank"
              rel="noreferrer"
            >
              <i>
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </i>
            </a>
            <a
              href="https://www.facebook.com/hamid.pardesyar/"
              target="_blank"
              rel="noreferrer"
            >
              <i>
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default AutoType;
