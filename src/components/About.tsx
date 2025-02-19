import image from "../assets/logo.png";
import { FaBookOpen } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa6";
import { PiJoystickFill } from "react-icons/pi";

const About = () => {
  return (
    <section className="bg-neutral-800">
      <div className="max-w-[1080px] mx-auto py-12 flex gap-[2.5%]">
        <img
          src={image}
          alt="Logo"
          className="border-4 border-lime-600 rounded-full p-2 overflow-clip h-fit max-w-[12.5%]"
        />
        <div className="max-w-[60%] text-lg">
          <h1 className="text-3xl font-bold border-b-2 w-fit pr-1 mb-4">About me </h1>
          <p>
            I'm a Software Engineering student in my 6th semester, passionate about coding, teamwork, and continuous
            learning. I love building efficient and scalable solutions, whether in the frontend with React & TailwindCSS
            or the backend with Node.js & TypeScript.
          </p>
          <h1 className="text-3xl font-bold border-b-2 w-fit pr-1 mb-4 mt-8">What sets me apart? </h1>
          <p>
            I have hands-on experience leading a team to develop an engaging educational website for children and
            adolescents, ensuring a user-friendly experience from design to deployment. I thrive in collaborative
            environments and enjoy tackling challenges that push my skills further.
          </p>
        </div>
        <div className="max-w-[25%] ml-[5.5%] text-sm border-l-2 pl-4 flex flex-col justify-evenly">
          <div className="relative my-4 hover:scale-105 transform-all duration-300">
            <div className="absolute -left-[74px] flex items-center gap-2">
              2022
              <span className="bg-lime-500 p-1 rounded-full text-white border-6 border-neutral-800">
                <FaBookOpen />
              </span>
            </div>
            <h2 className="font-bold text-lime-500 mb-2 mt-1">Started TecMilenio University</h2>
            <p className="text-xs">Bachelor in Software Development Engineering</p>
          </div>

          <div className="relative my-4 hover:scale-105 transform-all duration-300">
            <div className="absolute -left-[74px] flex items-center gap-2">
              2023
              <span className="bg-lime-500 p-1 rounded-full text-white border-6 border-neutral-800">
                <MdOutlineWeb />
              </span>
            </div>
            <h2 className="font-bold text-lime-500 mb-2 mt-1">Cáritas de Guadalajara</h2>
            <p className="text-xs">Project Manager in interactive webpage </p>
          </div>

          <div className="relative my-4 hover:scale-105 transform-all duration-300">
            <div className="absolute -left-[74px] flex items-center gap-2">
              2024
              <span className="bg-lime-500 p-1 rounded-full text-white border-6 border-neutral-800">
                <PiJoystickFill />
              </span>
            </div>
            <h2 className="font-bold text-lime-500 mb-2 mt-1">Researcher Network App</h2>
            <p className="text-xs">Personal project.</p>
          </div>

          <div className="relative my-4 hover:scale-105 transform-all duration-300">
            <div className="absolute -left-[89px] flex items-center gap-2">
              Present
              <span className="bg-lime-500 p-1 rounded-full text-white border-6 border-neutral-800">
                <PiJoystickFill />
              </span>
            </div>
            <h2 className="font-bold text-lime-500 mb-2 mt-1">Restaurant Management System</h2>
            <p className="text-xs">Personal project.</p>
          </div>

          <div className="relative my-4 hover:scale-105 transform-all duration-300">
            <div className="absolute -left-[74px] flex items-center gap-2">
              2026
              <span className="bg-lime-500 p-1 rounded-full text-white border-6 border-neutral-800">
                <FaGraduationCap />
              </span>
            </div>
            <h2 className="font-bold text-lime-500 mb-2 mt-1">Graduating from TecMilenio University</h2>
            <p className="text-xs">Personal project.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
