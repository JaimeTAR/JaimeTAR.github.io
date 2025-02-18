import Marquee from "react-fast-marquee";

const languages = ["Python", "Java", "C#", "C++", "SQL", "HTML", "CSS", "JavaScript", "TypeScript", "Kotlin", "Swift"];

const ProgrammingCarousel = () => {
  return (
    <section className="bg-stone-900 py-8">
      <div className="max-w-[1080px] mx-auto text-center">
        <h2 className="text-2xl mb-4 font-bold">Programming Languages</h2>
        <Marquee speed={10} gradient gradientColor="#1c1919" gradientWidth={50}>
          {languages.map((item) => (
            <div className="py-10 mx-5">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 rounded-md shadow-[0px_0px_25px_0px_rgba(124,207,0,1)]" />
                <p className="relative bg-stone-900 text-blck px-4 py-1 rounded-md m-[1px]">{item}</p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default ProgrammingCarousel;
