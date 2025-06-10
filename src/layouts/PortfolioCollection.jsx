import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import MediaGrid from "../components/MediaGrid";
import MainLayout from "./MainLayout";

const PortfolioCollection = ({
  title,
  detail,
  media,
  onNext,
  onPrev,
  isNext,
  isPrev,
}) => {
  return (
    <MainLayout>
      {/* Detail Section */}
      <div className="bg-black flex flex-col md:flex-row items-center justify-center p-8">
        {/* Left Text */}
        <div className="md:w-1/2 w-full text-white px-10">
          <h1 className="text-3xl md:text-xl mb-8 leading-relaxed">{title}</h1>
        </div>

        {/* Right Text */}
        <div className="md:w-1/2 w-full text-white px-10">
          <p className="text-lg md:text-xl mb-8 leading-relaxed">{detail}</p>
        </div>
      </div>

      {/* Media Section */}
      <MediaGrid media={media} />

      {/* Navigation Button */}
      <div className="bg-black flex justify-between items-center px-8 py-4">
        {isPrev && (
          <button
            onClick={onPrev}
            className="flex items-center gap-2 bg-transparent text-white px-4 py-2 rounded hover:border border-gray-200 transition cursor-pointer"
          >
            <FaArrowLeft />
            Previous Project
          </button>
        )}
        {isNext && (
          <>
            <button className="flex items-center gap-2 bg-transparent text-white px-4 py-2 rounded hover:border border-gray-200 transition cursor-pointer"></button>
            <button
              onClick={onNext}
              className="flex items-center gap-2 bg-transparent text-white px-4 py-2 rounded hover:border border-gray-200 transition cursor-pointer"
            >
              Next Project
              <FaArrowRight />
            </button>
          </>
        )}
      </div>
    </MainLayout>
  );
};

export default PortfolioCollection;
