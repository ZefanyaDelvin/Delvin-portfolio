import MainLayout from "../../layouts/MainLayout";
import DelvinImage from "../../assets/image/main/Vin2.jpg";
import { useNavigate } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { Icon } from "@iconify/react/dist/iconify.js";

const MainPage = () => {
  const navigate = useNavigate();

  const languages = [
    {
      text: "English",
      rating: 4,
      desc: "Advanced",
    },
    {
      text: "Indonesia",
      rating: 5,
      desc: "Proficient",
    },
  ];

  const iconList = [
    { icon: "material-icon-theme:figma", label: "Figma" },
    { icon: "logos:react", label: "ReactJS" },
    { icon: "material-icon-theme:kotlin", label: "Kotlin" },
    { icon: "vscode-icons:file-type-cpp3", label: "C++" },
    { icon: "file-icons:tortoisesvn", label: "SVN" },
    { icon: "material-icon-theme:git", label: "Git" },
    { icon: "logos:tableau-icon", label: "Tableau" },
    { icon: "logos:java", label: "Java" },
    { icon: "vscode-icons:file-type-c", label: "C" },
    { icon: "logos:nodejs", label: "NodeJS" },
    { icon: "logos:redux", label: "Redux" },
    { icon: "logos:javascript", label: "Javascript" },
    { icon: "vscode-icons:file-type-css", label: "CSS" },
    { icon: "simple-icons:express", label: "Express" },
  ];

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

        {/* My Skills */}
        <section className="w-full py-12 bg-black text-white text-center mt-5 mb-5">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">My Skills</h2>
          {/* Other Skills */}
          {/* Programming and Tools Icons */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center mb-12 px-6">
            {iconList.map(({ icon, label }, index) => (
              <div key={index} className="relative group">
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-700 shadow-md transition-transform hover:scale-105">
                  <Icon icon={icon} width="36" height="36" />
                </div>
                <div className="absolute bottom-[-25px] left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all bg-black text-white text-xs px-2 py-1 rounded shadow-md whitespace-nowrap">
                  {label}
                </div>
              </div>
            ))}
          </div>
          {/* Languages */}
          <div className="flex flex-col items-center gap-3">
            {languages.map(({ text, rating, desc }) => (
              <div className="flex flex-col sm:flex-row gap-2 items-center">
                <span className="font-semibold">{text}</span>
                <div className="flex text-yellow-400">
                  {[...Array(rating)].map((_, i) => (
                    <AiFillStar key={i} />
                  ))}
                </div>
                <span className="text-sm text-gray-400">{`${desc}`}</span>
              </div>
            ))}
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
              navigate("/portfolio");
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
