import MainLayout from "../../layouts/MainLayout";
import LaptopImage from "../../assets/image/portfolio/Laptop.jpg";
import PortfoCard from "../../components/Card";
import ATSDashboard from "../../assets/image/portfolio/ATS/Dashboard.jpg";
import LIImage from "../../assets/image/portfolio/Market Intelligence/1.png";
import PayrollImage from "../../assets/image/portfolio/Payroll/Common Code.jpg";
import EmotionImage from "../../assets/image/portfolio/App Emotion Recog.jpg";
import BPJPHImage from "../../assets/image/portfolio/BPJPH/1.png";
import { useNavigate } from "react-router";

const Portfolio = () => {
  const navigate = useNavigate();
  const image = [
    {
      imageURL: ATSDashboard,
      handleClick: () => navigate("/portfolio/ats"),
      title: "Applicant Tracking System",
    },
    {
      imageURL: LIImage,
      handleClick: () => navigate("/portfolio/MI"),
      title: "Market Intelligence",
    },
    {
      imageURL: PayrollImage,
      handleClick: () => navigate("/portfolio/payroll"),
      title: "Payroll",
    },
    {
      imageURL: BPJPHImage,
      handleClick: () => navigate("/portfolio/certification"),
      title: "Certification Monitoring System",
    },
    {
      imageURL: EmotionImage,
      handleClick: () => navigate("/portfolio/recog-app"),
      title: "Music Emotion Recognition App",
    },
  ];

  return (
    <MainLayout>
      {/* Welcome Section */}
      <div className="bg-black min-h-screen flex flex-col md:flex-row items-center justify-center p-8">
        {/* Left Image */}
        <div className="md:w-1/2 w-full mb-8 md:mb-0">
          <img
            src={LaptopImage}
            alt="Portfolio Preview"
            className="rounded-xl shadow-lg w-full h-auto object-contain"
          />
        </div>

        {/* Right Text */}
        <div className="md:w-1/2 w-full text-white px-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Welcome To <br /> My Portfolio
          </h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            Welcome to my portfolio collection. Here, you can see some of the
            projects I’ve worked on. Each one shows what I can do and what I
            enjoy creating. I hope you enjoy looking through my work and
            learning more about me.
          </p>
          <button
            className="bg-white text-black px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-200 transition duration-300 cursor-pointer"
            onClick={() => {
              document
                .getElementById("portfolio-section")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Explore More
          </button>
        </div>
      </div>

      {/* Portfolio Section */}
      <div id="portfolio-section" className="bg-black py-16 px-6">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Portfolio
          </h1>
          <h2 className="text-lg md:text-xl text-white">
            Welcome to my portfolio. Here you’ll find a selection of my work.
            Explore my projects to learn more about what I do.
          </h2>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {image.map((img) => (
            <>
              <PortfoCard
                imageURL={img.imageURL}
                handleClick={img.handleClick}
                title={img.title}
              />
            </>
          ))}
          .
        </div>
      </div>
    </MainLayout>
  );
};

export default Portfolio;
