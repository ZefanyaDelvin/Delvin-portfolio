import { useNavigate } from "react-router";
import PortfolioCollection from "../../layouts/PortfolioCollection";

// Import Image
import img5 from "../../assets/image/portfolio/ATS/Add Information Detail.jpg";
import img6 from "../../assets/image/portfolio/ATS/Add Member.jpg";
import img3 from "../../assets/image/portfolio/ATS/Add Menu.jpg";
import img7 from "../../assets/image/portfolio/ATS/Applicant Dashboard.jpg";
import img2 from "../../assets/image/portfolio/ATS/Create Task 2.jpg";
import img8 from "../../assets/image/portfolio/ATS/Create Task.jpg";
import img1 from "../../assets/image/portfolio/ATS/Dashboard.jpg";
import img9 from "../../assets/image/portfolio/ATS/Master Member.jpg";
import img4 from "../../assets/image/portfolio/ATS/Menu Master.jpg";

const ATS = () => {
  const navigate = useNavigate();

  const mediaItems = [
    { type: "image", src: img1 },
    { type: "image", src: img2 },
    { type: "image", src: img3 },
    { type: "image", src: img4 },
    { type: "image", src: img5 },
    { type: "image", src: img6 },
    { type: "image", src: img7 },
    { type: "image", src: img8 },
    { type: "image", src: img9 },
  ];

  return (
    <>
      <PortfolioCollection
        title={"Applicant Tracking System"}
        detail={
          "A web-based application using ReactJS as it’s frontend and Java programming languages as it’s backend program. This application is used for tracking applicant applications for KORINDO Group"
        }
        media={mediaItems}
        isNext={true}
        onNext={() => navigate("/portfolio/MI")}
      />
    </>
  );
};

export default ATS;
