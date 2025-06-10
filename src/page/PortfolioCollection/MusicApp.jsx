import { useNavigate } from "react-router-dom";
import PortfolioCollection from "../../layouts/PortfolioCollection";

// Import Image
import img1 from "../../assets/image/portfolio/App Emotion Recog.jpg";
import img2 from "../../assets/image/portfolio/Paper.png";

const MusicApp = () => {
  const navigate = useNavigate();

  const mediaItems = [
    { type: "image", src: img1 },
    { type: "image", src: img2 },
  ];

  return (
    <PortfolioCollection
      title={"Music Emotion Recognition App"}
      detail={
        <>
          This project focuses on emotion recognition from music lyrics using a
          hybrid deep learning model combining LSTM (Long Short-Term Memory) and
          GRU (Gated Recurrent Unit) networks. By analyzing the textual features
          of song lyrics, the model aims to accurately identify the emotions
          conveyed in the music. The hybrid approach leverages the strengths of
          both LSTM and GRU to improve performance in understanding sequential
          data. This work has been published in a research paper, showcasing the
          effectiveness of the method and contributing to advancements in music
          emotion analysis. <br />
          <strong>Publication: </strong>
          <a
            href="https://doi.org/10.1016/j.procs.2023.10.606"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            https://doi.org/10.1016/j.procs.2023.10.606
          </a>
        </>
      }
      media={mediaItems}
      isPrev={true}
      onPrev={() => navigate("/portfolio/certification")}
    />
  );
};

export default MusicApp;
