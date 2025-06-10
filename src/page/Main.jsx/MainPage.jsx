import MainLayout from "../../layouts/MainLayout";
import DelvinImage from "../../assets/image/main/Vin2.jpg";

const MainPage = () => {
  return (
    <MainLayout>
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-20 mt-5">
        {/* About Me Section */}
        <section className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-black text-white py-10 gap-8">
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={DelvinImage}
              alt="Delvin"
              className="max-h-[450px] w-full max-w-md object-contain rounded-lg shadow-lg"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 px-4 md:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center md:text-left">
              Hello,
            </h1>
            <p className="text-base md:text-lg leading-relaxed text-justify">
              My name's Delvin. I am a student majoring in Computer Science at
              Bina Nusantara University. I am a diligent and cooperative person
              with experience in both organizations and international
              activities. I’m skilled in planning and communicating with others,
              and I enjoy working in teams to solve problems and achieve goals.
              Throughout my studies, I’ve worked on various projects that have
              helped me grow both technically and personally. I’m passionate
              about technology, always eager to learn new things, and committed
              to continuous improvement through meaningful experiences.
            </p>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="w-full py-12 bg-black text-white text-center mt-5 mb-5">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">My Portfolio</h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto mb-8 px-2 sm:px-4">
            Here, you’ll find a collection of my projects, experiences, and
            skills that reflect my passion for technology and problem-solving.
            Feel free to explore and learn more about the work I’ve done.
          </p>
          <button
            className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition duration-300"
            type="button"
            onClick={() => {
              window.location.href = "/portfolio";
            }}
          >
            Explore
          </button>
        </section>
      </div>
    </MainLayout>
  );
};

export default MainPage;
