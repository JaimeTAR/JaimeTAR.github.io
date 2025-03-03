import CaritasImg from "../assets/caritas.webp";
import PortfolioImg from "../assets/portfolio.webp";
import ResearcherImg from "../assets/researcher.webp";
import ConfidentialImg from "../assets/confidential.webp";
import PuperBotImg from "../assets/discord_bot.webp";
import PlayBookGif from "../assets/playbook.gif";
import { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { FaGithub, FaShareAltSquare } from "react-icons/fa";

interface Project {
  title: string;
  subtitle: string;
  description: React.ReactNode;
  githubLink: string | null;
  pageLink: string | null;
  year: string;
  imgSrc: string;
  tech: string[];
}

const projects: Project[] = [
  {
    title: "This Portfolio!",
    subtitle: "Static webpage",
    description: (
      <>
        This project was built using React with TypeScript for the content and
        Tailwind CSS for styling. It took about two days to fully deploy.
        <br />
        <br /> Currently, it's hosted on my personal GitHub page, and I
        integrated FormSubmit for the Contact section, allowing the site to
        remain fully static and backend-free for easy maintenance.
      </>
    ),
    githubLink:
      "https://github.com/JaimeTAR/JaimeTAR.github.io?tab=readme-ov-file#jaime-alfaros-web-portfolio",
    pageLink: "#",
    year: "2025",
    imgSrc: PortfolioImg,
    tech: ["React", "Tailwind", "TypeScript", "FormSubmitAPI", "GitHub Pages"],
  },
  {
    title: "Restaurant Management System",
    subtitle: "CSR WebApp",
    description: (
      <>
        This is definetly my most ambitious project yet, it is about a RMS, but
        instead of being an App, it is going to be a WebApp, making it more
        accessible and easier to adapt into a restaurant.
        <br />
        <br /> Unfortunately i can't show you any code or screens because of an
        NDA, but I can tell you the technologies I'm using to make this project
        possible, which are listed in the left.
      </>
    ),
    githubLink: null,
    pageLink: null,
    year: "2025",
    imgSrc: ConfidentialImg,
    tech: [
      "React",
      "Tailwind",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
    ],
  },
  {
    title: "Researcher Network App",
    subtitle: "Android App",
    description: (
      <>
        This was my final project for my college Mobile App Development course
        and my first experience building a real-world problem-solving
        application. Through this project, I gained valuable experience in
        Android development using both Java and Kotlin.
        <br />
        <br /> To integrate the app with a PostgreSQL database, I developed a
        REST API using Python with Flask for rapid development. I hosted the
        backend on Render for easy deployment and scalability. For seamless
        communication between the app and the API, I used Retrofit, and I tested
        the endpoints with Postman to ensure reliability.
      </>
    ),
    githubLink: null,
    pageLink: null,
    year: "2024",
    imgSrc: ResearcherImg,
    tech: [
      "Kotlin",
      "Java",
      "PostgreSQL",
      "Python",
      "Flask",
      "AWS DynamoDB",
      "Postman",
      "Render",
    ],
  },
  {
    title: "PuperBot",
    subtitle: "Discord Music Bot",
    description: (
      <>
        I built this project for fun when I needed a Discord music bot that
        allowed me to queue songs in a specific order. While other bots offered
        this feature, they all required payment, so I decided to create my own!
        <br />
        <br /> The bot was developed using Python and Pycord, which I found much
        easier to work with compared to its JavaScript counterpart. It can play
        any song or video from YouTube and Spotify, whether from a direct link
        or a simple search.
      </>
    ),
    githubLink:
      "https://github.com/JaimeTAR/PuperBot?tab=readme-ov-file#puperbot",
    pageLink: null,
    year: "2024",
    imgSrc: PuperBotImg,
    tech: ["Python", "Pycord"],
  },
  {
    title: "PlayBook",
    subtitle: "iOS App",
    description: (
      <>
        This was my first iOS project, focused on frontend development with mock
        data. Despite its simplicity, building it natively allowed me to gain
        valuable insights into iOS development.
        <br />
        <br /> Working on this project with my team helped us understand the
        fundamentals of native app development, and I was surprised by how
        quickly I picked up the basics. In the end, we created a clean,
        well-designed app that exceeded our initial expectations.
      </>
    ),
    githubLink:
      "https://github.com/JaimeTAR/PlayBook?tab=readme-ov-file#playbook",
    pageLink: null,
    year: "2024",
    imgSrc: PlayBookGif,
    tech: ["SwiftUI"],
  },
  {
    title: "Cáritas de Guadalajara",
    subtitle: "Interactive webpage",
    description: (
      <>
        This was my first experience as a Project Manager, leading a team of
        five software students. Since it was our first web development project,
        we decided to build it natively using pure HTML, CSS, and JavaScript.
        <br />
        <br /> Through this project, we gained a solid foundation in web
        development, and it sparked my passion for frontend. I especially
        enjoyed styling the views with plain CSS, which made the process both
        challenging and fun.
      </>
    ),
    githubLink: "https://github.com/JaimeTAR/PaginaWebCaritas",
    pageLink: "https://caritasgdl1975.github.io",
    year: "2023",
    imgSrc: CaritasImg,
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="bg-neutral-800 py-8" id="projects">
      <div className="max-w-[1080px] mx-auto text-center">
        <h1 className="relative mb-10 text-2xl md:text-4xl font-bold text-center md:before:absolute md:before:top-1/2 md:before:left-12 md:before:w-1/5 md:before:h-[3px] md:before:bg-neutral-200 md:after:absolute md:after:top-1/2 md:after:right-12 md:after:w-1/5 md:after:h-[3px] md:after:bg-neutral-200">
          Most recent projects
        </h1>

        {!selectedProject ? (
          <div className="flex justify-evenly text-left mb-4 flex-wrap px-4">
            {projects.map((project) => (
              <div
                key={"project_" + project.title}
                className={
                  "group p-2 min-h-64 h-fit w-80 mb-8 bg-stone-950 rounded-md shadow-lg shadow-black cursor-pointer hover:scale-105 transition-all duration-500"
                }
                onClick={() => {
                  setSelectedProject(project);
                  window.location.href = "#projects";
                }}
              >
                <div className="flex justify-center items-center mb-2 w-full aspect-15/9 bg-stone-900 rounded-md mx-auto p-2 group-hover:bg-lime-800 transition-all duration-500">
                  <img
                    src={project.imgSrc}
                    alt="Cáritas Thumbnail"
                    className="max-h-full h-full object-contain"
                  />
                </div>
                <div className="flex justify-between">
                  <h1 className="pl-1 text-lg font-semibold group-hover:text-lime-500 transition-all duration-500">
                    {project.title}
                  </h1>
                  <p className="pr-1 text-white/25 font-bold group-hover:text-lime-800 transition-all duration-500">
                    {project.year}
                  </p>
                </div>

                <p className="pl-1 text-md font-light group-hover:text-lime-200 transition-all duration-500 ">
                  {project.subtitle}
                </p>
                <div>
                  <div className="flex gap-1 text-center mt-2 ml-1 flex-wrap">
                    {project.tech.map((language) => (
                      <div
                        key={project.title + "_" + language + "_card"}
                        className="relative inline-block"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 rounded-md" />
                        <p className="text-xs relative bg-stone-950 text-blck px-2 py-1 rounded-md m-[1px]">
                          {language}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-6 h-fit w-full max-w-[90%] mx-auto mb-8 bg-stone-950 rounded-md shadow-lg shadow-black md:flex gap-4">
            <div className="text-start md:w-4/10">
              <button
                className="cursor-pointer hover:ring-1 rounded-md transition-all w-fit"
                onClick={() => {
                  setSelectedProject(null);
                }}
              >
                <IoArrowBack size={30} />
              </button>
              <div
                className="max-w-full mx-auto bg-center bg-contain bg-no-repeat rounded-4xl h-50 md:h-80 "
                style={{ backgroundImage: `url(${selectedProject.imgSrc})` }}
              ></div>

              <div className="flex justify-center gap-3 text-center mt-6 flex-wrap">
                {selectedProject.tech.map((language) => (
                  <div
                    key={selectedProject.title + "_" + language + "_full"}
                    className="relative inline-block "
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 rounded-md" />
                    <p className="text-sm md:text-lg relative bg-stone-950 text-blck px-2 py-1 rounded-md m-[1px]">
                      {language}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-6/10 flex flex-col justify-between">
              <h1 className="text-2xl font-bold mt-6">
                {selectedProject.title}
              </h1>
              <p className="py-6 md:py-0">{selectedProject.description}</p>
              <div className="flex self-center md:self-end gap-4">
                {selectedProject.pageLink && (
                  <button className="group flex items-center gap-2 border-2 px-2 py-1 rounded-md mt-2 w-fit hover:scale-105 transition-all cursor-pointer">
                    <FaShareAltSquare className="group-hover:text-emerald-500" />
                    <a
                      href={selectedProject.pageLink}
                      target={selectedProject.pageLink == "#" ? "" : "blank"}
                    >
                      Visit
                    </a>
                  </button>
                )}
                {selectedProject.githubLink && (
                  <button className="group flex items-center gap-2 border-2 px-2 py-1 rounded-md mt-2 w-fit hover:scale-105 transition-all cursor-pointer">
                    <FaGithub className="group-hover:text-emerald-500" />
                    <a href={selectedProject.githubLink} target="blank">
                      View on GitHub
                    </a>
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
