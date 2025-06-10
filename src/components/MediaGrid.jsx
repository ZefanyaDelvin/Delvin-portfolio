import { useState } from "react";

const MediaGrid = ({ media }) => {
  const [selectedMedia, setSelectedMedia] = useState(null);

  const handleClick = (item) => {
    setSelectedMedia(item);
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  return (
    <>
      {/* Grid */}
      <div className="bg-black py-8 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {media.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClick(item)}
            className="w-full overflow-hidden rounded-lg shadow-lg cursor-pointer"
          >
            {item.type === "image" ? (
              <div className="relative group">
                <img
                  src={item.src}
                  alt={`Media ${index}`}
                  className="w-full h-64 object-cover"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gray-400 bg-opacity-40 opacity-0 group-hover:opacity-50 transition duration-300" />
              </div>
            ) : (
              <video
                className="w-full h-64 object-cover"
                muted
                autoPlay
                controls
                loop
              >
                <source src={item.src} type="video/mp4" />
              </video>
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedMedia && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="text-white text-2xl absolute top-4 right-6 z-50"
              onClick={closeModal}
            >
              &times;
            </button>
            {selectedMedia.type === "image" ? (
              <img
                src={selectedMedia.src}
                alt="Selected Media"
                className="w-full h-auto rounded-lg"
              />
            ) : (
              <video controls autoPlay className="w-full h-auto rounded-lg">
                <source src={selectedMedia.src} type="video/mp4" />
              </video>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MediaGrid;
