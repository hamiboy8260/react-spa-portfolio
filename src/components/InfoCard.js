import { useEffect } from "react";
import AOS from "aos";

const InfoCard = ({ icon, heading, text }) => {
  useEffect(() => {
    AOS.init({ once: true }); // "animate on scroll" only once
  }, []);
  return (
    <div className="info-card" data-aos="fade-up">
      <div className="card-icon">
        <i>{icon}</i>
      </div>
      <h2>{heading}</h2>
      <p>{text}</p>
    </div>
  );
};

export default InfoCard;
