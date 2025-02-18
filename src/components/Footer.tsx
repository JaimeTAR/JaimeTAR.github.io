import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-stone-900 py-12 text-center">
      <div className="flex gap-8 text-lime-500 w-full justify-center mb-12">
        <a href="https://github.com/JaimeTAR" target="blank">
          <FaGithub size={20} />
        </a>
        <a href="https://www.linkedin.com/in/jalfarodev/" target="blank">
          <FaLinkedin size={20} />
        </a>
      </div>
      <p className="text-xs">Copyright © Jaime Alfaro 2025</p>
    </footer>
  );
};

export default Footer;
