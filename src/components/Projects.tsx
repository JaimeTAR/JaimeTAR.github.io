import CaritasImg from "../assets/caritas.webp";
import PortfolioImg from "../assets/portfolio.webp";
import ResearcherImg from "../assets/researcher.webp";

const projects = [
  {
    title: "This Portfolio!",
    subtitle: "Static webpage",
    year: "2025",
    imgSrc: PortfolioImg,
  },
  {
    title: "Researcher Network App",
    subtitle: "Android App",
    year: "2024",
    imgSrc: ResearcherImg,
  },
  {
    title: "Cáritas de Guadalajara",
    subtitle: "Interactive webpage",
    year: "2023",
    imgSrc: CaritasImg,
  },
];

const Projects = () => {
  return (
    <section className="bg-neutral-700 py-8">
      <div className="max-w-[1080px] mx-auto text-center">
        <h1 className="relative mb-10 text-4xl font-bold text-center before:absolute before:top-1/2 before:left-12 before:w-1/4 before:h-[3px] before:bg-gray-400 after:absolute after:top-1/2 after:right-12 after:w-1/4 after:h-[3px] after:bg-gray-400">
          Most recent projects
        </h1>
        <div className="flex justify-evenly text-left mb-12">
          {projects.map((project) => (
            <div className="group p-2 min-h-64 w-3/10 bg-stone-900 rounded-md shadow-lg shadow-black cursor-pointer hover:scale-105 transition-all duration-500">
              <div className="flex justify-center mb-2 w-full aspect-15/9 bg-stone-700 rounded-md mx-auto p-2 group-hover:bg-lime-800 transition-all duration-500">
                <img
                  src={project.imgSrc}
                  alt="Cáritas Thumbnail"
                  className="max-h-full"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
