import InfoCard from "./InfoCard";
// import { BiCodeAlt } from "react-icons/bi";
// import { CgIfDesign } from "react-icons/cg";
// import { MdDesignServices } from "react-icons/md";
// import { faCoffee, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faPalette,
  faBorderStyle,
} from "@fortawesome/free-solid-svg-icons";

const InfoCardSection = () => {
  return (
    <div className="info-card-section">
      <InfoCard
        icon={<FontAwesomeIcon icon={faLaptopCode} />}
        heading="Web Development"
        text="As a frontend developer, I'm passionate about exploring functionalities and interfaces using HTML, CSS, and JavaScript. I enjoy experimenting with various JavaScript libraries and frameworks, including React.js."
      />
      <InfoCard
        icon={<FontAwesomeIcon icon={faBorderStyle} />}
        heading="Ux/Ui"
        text="I see UX and UI as important elements in frontend development, as they contribute to providing a valuable user experience. When I develop websites, I focus on UX and UI, striving to deliver the best possible result for the user."
      />
      <InfoCard
        icon={<FontAwesomeIcon icon={faPalette} />}
        heading="Design"
        text="I have a passion for design and making things look presentable. In addition to functionality, I believe design plays an important role, as it helps to strengthen a company's visual identity and communication."
      />
    </div>
  );
};
export default InfoCardSection;
