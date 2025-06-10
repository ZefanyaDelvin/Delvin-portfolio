import { useNavigate } from "react-router";
import PortfolioCollection from "../../layouts/PortfolioCollection";

// Import Image
import img1 from "../../assets/image/portfolio/BPJPH/1.png";
import img2 from "../../assets/image/portfolio/BPJPH/2.png";
import img3 from "../../assets/image/portfolio/BPJPH/3.png";
import img4 from "../../assets/image/portfolio/BPJPH/4.png";
import vid1 from "../../assets/image/portfolio/BPJPH/Certification Monitoring System.mp4";

const Certification = () => {
  const navigate = useNavigate();

  const mediaItems = [
    { type: "image", src: img1 },
    { type: "image", src: img2 },
    { type: "image", src: img3 },
    { type: "image", src: img4 },
    { type: "video", src: vid1 },
  ];

  return (
    <>
      <PortfolioCollection
        title={"Certification Monitoring System"}
        detail={
          ""
        }
        media={mediaItems}
        isNext={true}
        isPrev={true}
        onPrev={() => navigate("/portfolio/payroll")}
        onNext={() => navigate("/portfolio/recog-app")}
      />
    </>
  );
};

export default Certification;
