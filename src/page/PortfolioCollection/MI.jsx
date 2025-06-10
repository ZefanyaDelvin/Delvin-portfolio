import { useNavigate } from "react-router";
import PortfolioCollection from "../../layouts/PortfolioCollection";

// Import Image
import img1 from "../../assets/image/portfolio/Market Intelligence/1.png";
import img2 from "../../assets/image/portfolio/Market Intelligence/2.png";
import img3 from "../../assets/image/portfolio/Market Intelligence/3.png";
import img4 from "../../assets/image/portfolio/Market Intelligence/4.png";
import img5 from "../../assets/image/portfolio/Market Intelligence/5.png";
import img6 from "../../assets/image/portfolio/Market Intelligence/6.png";
import img7 from "../../assets/image/portfolio/Market Intelligence/7.png";
import img8 from "../../assets/image/portfolio/Market Intelligence/8.png";
import img9 from "../../assets/image/portfolio/Market Intelligence/9.png";
import img10 from "../../assets/image/portfolio/Market Intelligence/10.png";

const MI = () => {
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
    { type: "image", src: img10 },
  ];

  return (
    <>
      <PortfolioCollection
        title={"Market Intelligence"}
        detail={
          "This web application uses SuperMap to turn location data into useful market insights. It helps users understand things like where customers are, where competitors are located, and what areas have high demand. Similar to a location intelligence tool, it makes it easier for businesses to make smart decisions about where to open new stores, target customers, or plan resources all by looking at maps and data."
        }
        media={mediaItems}
        isNext={true}
        isPrev={true}
        onNext={() => navigate("/portfolio/payroll")}
        onPrev={() => navigate("/portfolio/ats")}
      />
    </>
  );
};

export default MI;
