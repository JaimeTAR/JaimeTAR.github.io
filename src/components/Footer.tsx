import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral-950 py-6 md:py-12 text-center">
      <div className="flex gap-8 text-neutral-100 w-full justify-center mb-8">
        <a
          href="https://github.com/JaimeTAR"
          target="blank"
          className="ring-neutral-100 hover:ring-1 p-2 rounded-md transition-all duration-150"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/jaimetar"
          target="blank"
          className="ring-neutral-100 hover:ring-1 p-2 rounded-md transition-all duration-150"
        >
          <FaLinkedin size={20} />
        </a>
      </div>
      <p className="text-xs">Copyright © Jaime Alfaro 2025</p>
    </footer>
  );
};

export default Footer;
