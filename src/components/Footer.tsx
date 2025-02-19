import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-stone-900 py-12 text-center">
      <div className="flex gap-8 text-lime-500 w-full justify-center mb-8">
        <a
          href="https://github.com/JaimeTAR"
          target="blank"
          className="ring-lime-500 hover:ring-1 p-2 rounded-md transition-all duration-150"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/jalfarodev/"
          target="blank"
          className="ring-lime-500 hover:ring-1 p-2 rounded-md transition-all duration-150"
        >
          <FaLinkedin size={20} />
        </a>
      </div>
      <p className="text-xs">Copyright © Jaime Alfaro 2025</p>
    </footer>
  );
};

export default Footer;
