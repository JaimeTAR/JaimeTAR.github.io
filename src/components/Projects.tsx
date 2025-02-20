import CaritasImg from "../assets/caritas.webp";
import PortfolioImg from "../assets/portfolio.webp";
import ResearcherImg from "../assets/researcher.webp";
import ConfidentialImg from "../assets/confidential.webp";
import PuperBotImg from "../assets/puperbot.webp";
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
      <p className="md:px-6">
        This project was made using React with Typescript for the content, and Tailwind for the styling. It took about 2
        days to deploy completely.
        <br />
        <br /> Right now, it is hosted on my personal GitHub page, and I'm using FormSubmit for the Contact section,
        which makes it easier for the page to be static and maintaining it backend-less.
      </p>
    ),
    githubLink: "https://github.com/JaimeTAR/JaimeTAR.github.io",
    pageLink: "#",
    year: "2025",
    imgSrc: PortfolioImg,
    tech: ["React", "Tailwind", "TypeScript"],
  },
  {
    title: "Restaurant Management System",
    subtitle: "CSR WebApp",
    description: (
      <p className="md:px-6">
        This is definetly my most ambitious project yet, it is about a RMS, but instead of being an App, it is going to
        be a WebApp, making it more accessible and easier to adapt into a restaurant.
        <br />
        <br /> Unfortunately i can't show you any code or screens because of an NDA, but I can tell you the technologies
        I'm using to make this project possible, which are listed in the left.
      </p>
    ),
    githubLink: null,
    pageLink: null,
    year: "2025",
    imgSrc: ConfidentialImg,
    tech: ["React", "Tailwind", "TypeScript", "Node.js", "Express", "PostgreSQL"],
  },
  {
    title: "Researcher Network App",
    subtitle: "Android App",
    description: (
      <p className="md:px-6">
        This was the final project for my college Mobile App Development course. This was my first approach to a
        real-life problem solving app, so I learned a lot about developing for Android with Java and Kotlin.
        <br />
        <br /> I had to create a REST API to connect my app with my PostgreSQL database, so I used Python with Flask for
        faster development. And for the connection with Android, I used Retrofit for simplicity purposes. Finally, for
        testing the endpoints, I used Postman.
      </p>
    ),
    githubLink: null,
    pageLink: null,
    year: "2024",
    imgSrc: ResearcherImg,
    tech: ["Kotlin", "Java", "PostgreSQL", "Python", "AWS"],
  },
  {
    title: "PuperBot",
    subtitle: "Discord Music Bot",
    description: (
      <p className="md:px-6">
        This was a project I did for fun back when I needed a music discord bot that let me put a song in the next spot
        in the queue. Obviously there are other bots in discord with this feature, but all of them required some sort of
        payment, so I did it myself!
        <br />
        <br /> This bot was made with Python and the library Discord.py, which is 100 times easier than with its
        JavaScript counterpart. It is capable of playing any song or video from YouTube and Spotify either from a link
        or a simple search.
      </p>
    ),
    githubLink: null,
    pageLink: null,
    year: "2024",
    imgSrc: PuperBotImg,
    tech: ["Python", "Discord.py"],
  },
  {
    title: "Cáritas de Guadalajara",
    subtitle: "Interactive webpage",
    description: (
      <p className="md:px-6">
        This was a my first project where I was Project Manager. I had a team of 5 software students, and since this was
        our very first web project, we decided to build it natively, using pure HTML, CSS and JavaScript.
        <br />
        <br /> With this project we fully learned all of the basics of web development, and since then I've loved
        frontend. I had a lot of fun styling some of the views with plain CSS.
      </p>
    ),
    githubLink: "https://github.com/JaimeTAR/PaginaWebCaritas",
    pageLink: "caritasgdl1975.github.io",
    year: "2023",
    imgSrc: CaritasImg,
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="bg-neutral-800 py-8">
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
                }}
              >
                <div className="flex justify-center items-center mb-2 w-full aspect-15/9 bg-stone-900 rounded-md mx-auto p-2 group-hover:bg-lime-800 transition-all duration-500">
                  <img src={project.imgSrc} alt="Cáritas Thumbnail" className="max-h-full h-full object-contain" />
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
                      <div key={project.title + "_" + language + "_card"} className="relative inline-block">
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
                  <div key={selectedProject.title + "_" + language + "_full"} className="relative inline-block ">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 rounded-md" />
                    <p className="text-sm md:text-lg relative bg-stone-950 text-blck px-2 py-1 rounded-md m-[1px]">
                      {language}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-6/10 flex flex-col justify-between">
              <h1 className="text-2xl font-bold mt-6">{selectedProject.title}</h1>
              <p className="py-6 md:py-0">{selectedProject.description}</p>
              <div className="flex self-center md:self-end gap-4">
                {selectedProject.pageLink && (
                  <button className="group flex items-center gap-2 border-2 px-2 py-1 rounded-md mt-2 w-fit hover:scale-105 transition-all cursor-pointer">
                    <FaShareAltSquare className="group-hover:text-emerald-500" />
                    <a href={selectedProject.pageLink} target={selectedProject.pageLink == "#" ? "" : "blank"}>
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
