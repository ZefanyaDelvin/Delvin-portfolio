import { FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";
import FooterImage from "../assets/image/main/Footer.jpg";

const Footer = () => {
  return (
    <footer
      className="bg-cover bg-center bg-no-repeat text-white py-10 px-4"
      style={{ backgroundImage: `url(${FooterImage})` }}
    >
      <div className="text-center space-y-3">
        <h2 className="text-3xl font-bold">Contact Me</h2>
        <p className="text-lg">(+62) 87771579344</p>
        <p className="text-lg">zefanyadelvin@gmail.com</p>
        <p className="text-lg">Tangerang, Banten, Indonesia</p>

        <div className="flex justify-center gap-6 text-2xl mt-4">
          <a
            href="https://www.linkedin.com/in/zefanya-delvin-sulistiya-b295ba292"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/6287771579344"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://github.com/ZefanyaDelvin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>

        <p className="mt-6 text-sm text-white/80">
          © by Zefanya Delvin Sulistiya
        </p>
      </div>
    </footer>
  );
};

export default Footer;
