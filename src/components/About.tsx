import image from "../assets/logo.png";
import { FaBookOpen } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa6";
import { PiJoystickFill } from "react-icons/pi";
import { ReactNode } from "react";

interface TimelineEvent {
  title: string;
  description: string | null;
  date: string;
  icon: ReactNode;
}

const timelineEvents: TimelineEvent[] = [
  {
    title: "Started TecMilenio University",
    description: "Bachelor in Software Development Engineering",
    date: "2022",
    icon: <FaBookOpen />,
  },
  {
    title: "Cáritas de Guadalajara",
    description: "Project Manager in interactive webpage",
    date: "2023",
    icon: <MdOutlineWeb />,
  },
  {
    title: "Researcher Network App",
    description: "Personal project.",
    date: "2024",
    icon: <PiJoystickFill />,
  },
  {
    title: "Restaurant Management System",
    description: "Personal project.",
    date: "Present",
    icon: <PiJoystickFill />,
  },
  {
    title: "Graduating from TecMilenio University",
    description: null,
    date: "2026",
    icon: <FaGraduationCap />,
  },
];

const About = () => {
  return (
    <section className="bg-neutral-800">
      <div className="max-w-[1080px] mx-auto py-6 lg;py-12 md:flex md:gap-[2.5%] px-6">
        <img
          src={image}
          alt="Logo"
          className="hidden lg:block border-4 border-lime-600 rounded-full p-2 overflow-clip h-fit lg:max-w-[12.5%]"
        />
        <div className="lg:max-w-[60%] text-lg">
          <h1 className="text-3xl font-bold border-b-2 w-fit pr-1 mb-4">
            About me{" "}
          </h1>
          <p>
            I'm a Software Engineering student in my 6th semester, passionate
            about coding, especially in Java, teamwork, and continuous learning.{" "}
            <br />
            <br /> love building efficient and scalable solutions, whether it
            being a Mobile App with Kotlin or Swift, or a Web App with React &
            TailwindCSS for the frontend and Node.js & TypeScript for the
            backend!
          </p>
          <h1 className="text-3xl font-bold border-b-2 w-fit pr-1 mb-4 mt-8">
            What sets me apart?{" "}
          </h1>
          <p>
            I have hands-on experience building Mobile Apps, both with Swift and
            Kotlin+Java with Database integration in the cloud. <br />
            <br />
            I've also managed a team to develop an engaging educational website
            for children and adolescents, ensuring a user-friendly experience
            from design to deployment. I thrive in collaborative environments
            and enjoy tackling challenges that push my skills further.
          </p>
        </div>
        <div className="mt-8 ml-18 md:mt-0 md:max-w-[25%] md:ml-[10%] text-sm border-l-2 pl-4 flex flex-col justify-evenly">
          {timelineEvents.map((event) => (
            <div
              key={event.title}
              className="relative my-4 hover:scale-105 transform-all duration-300"
            >
              <div className="absolute -left-[120px] flex items-center gap-2 min-w-30 justify-end">
                {event.date}
                <span className="bg-lime-500 p-1 rounded-full text-white border-6 border-neutral-800">
                  {event.icon}
                </span>
              </div>
              <h2 className="font-bold text-lime-500 mb-2 mt-1">
                {event.title}
              </h2>
              {event.description && (
                <p className="text-xs">{event.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default About;
