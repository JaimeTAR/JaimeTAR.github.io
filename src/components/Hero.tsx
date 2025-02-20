import { FaCity, FaNodeJs } from "react-icons/fa6";
import image from "../assets/logo.png";
import BgNoise from "./BgNoise";
import { FaLinkedin, FaGithub, FaCode, FaReact, FaAndroid, FaApple, FaJava } from "react-icons/fa";
import { useEffect, useState } from "react";

const items = [
  { text: "Aspiring Software Engineer", icon: <FaCode size={30} className="text-lime-500" /> },
  { text: "Java Fanatic", icon: <FaJava size={30} className="text-lime-500" /> },
  {
    text: "Android and iOS Developer",
    icon: (
      <>
        <FaAndroid size={30} className="text-lime-500" />
        <FaApple size={30} className="text-lime-500" />
      </>
    ),
  },
  { text: "React + Tailwind Enthusiast", icon: <FaReact size={30} className="text-lime-500" /> },
  { text: "Node.js + Express Advocate", icon: <FaNodeJs size={30} className="text-lime-500" /> },
  { text: "Based in Guadalajara, Jalisco", icon: <FaCity size={30} className="text-lime-500" /> },
];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        setIsAnimating(false);
      }, 300);
    }, 2500);

    return () => clearInterval(interval);
  }, []);
  return (
    <header>
      <section className="relative py-16 flex flex-col justify-center items-center bg-stone-950">
        <BgNoise />
        <img
          src={image}
          alt="Logo"
          className="border-4 border-lime-600 rounded-full p-2 overflow-clip h-auto max-w-96 z-10"
        />
        <div className="flex items-end gap-4 my-6 z-10">
          <ul className="flex items-center justify-center border-t-4 border-lime-600 h-fit">
            <li className="h-fit px-2 pt-2 pb-2 hover:text-lime-500 cursor-pointer transition-all duration-300 hover:pt-3 hover:px-3">
              <a href="https://github.com/JaimeTAR" target="blank">
                <FaGithub size={25} />
              </a>
            </li>
          </ul>
          <div>
            <h1 className="text-6xl font-extrabold bg-gradient-to-r from-lime-600 via-green-500 to-lime-600 bg-clip-text text-transparent">
              Jaime Alfaro
            </h1>
          </div>
          <ul className="flex items-center justify-center border-t-4 border-lime-600 h-fit">
            <li className="h-fit px-2 pt-2 pb-2 hover:text-lime-500 cursor-pointer transition-all duration-300 hover:pt-3 hover:px-3">
              <a href="https://www.linkedin.com/in/jaimetar/" target="blank">
                <FaLinkedin size={25} />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center mb-8 z-10">
          <div className="text-2xl relative overflow-hidden w-full">
            <div
              className={`flex items-center justify-center gap-2 transition-all duration-300 ${
                isAnimating ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"
              }`}
            >
              {items[currentIndex].text}
              {items[currentIndex].icon}
            </div>
          </div>
        </div>
        <button className="border-2 px-4 py-2 rounded-md hover:border-lime-500 hover:text-lime-500 transition-colors duration-300 cursor-pointer z-10">
          <a href="#contact">Contact me</a>
        </button>
      </section>
    </header>
  );
}

export default Hero;
