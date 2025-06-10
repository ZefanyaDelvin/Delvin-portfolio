import { useNavigate } from "react-router";
import PortfolioCollection from "../../layouts/PortfolioCollection";

// Import Image
import img1 from "../../assets/image/portfolio/Payroll/Kode Lokasi.jpg";
import img2 from "../../assets/image/portfolio/Payroll/Common code.jpg";
import img3 from "../../assets/image/portfolio/Payroll/Kode akun.jpg";
import img4 from "../../assets/image/portfolio/Payroll/Norek bank pt.jpg";

const Payroll = () => {
  const navigate = useNavigate();

  const mediaItems = [
    { type: "image", src: img1 },
    { type: "image", src: img2 },
    { type: "image", src: img3 },
    { type: "image", src: img4 },
  ];

  return (
    <>
      <PortfolioCollection
        title={"Payroll"}
        detail={
          "A web-based application using ReactJS as it’s frontend and Java programming languages as it’s backend program. This application is used for payroll system in KORINDO Group."
        }
        media={mediaItems}
        isNext={true}
        isPrev={true}
        onNext={() => navigate("/portfolio/certification")}
        onPrev={() => navigate("/portfolio/MI")}
      />
    </>
  );
};

export default Payroll;
