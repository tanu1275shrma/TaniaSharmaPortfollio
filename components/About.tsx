import { profileImg } from "@/public/assets";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";

const About = () => {
  // Array of technologies
  const technologies = [
    "Javascript",
    "Next.js",
    "Node.js",
    "React.js",
    "Express.js",
    "MongoDB",
    "Supabase",
    "C++",
  ];

  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            Hi there! My name is
            <span className="text-textGreen"> Tania Sharma</span>, a passionate
            Full Stack Developer dedicated to turning ideas into high-quality,
            scalable applications. I specialize in building seamless frontend
            experiences and robust backend systems, combining creativity with
            technical precision. I thrive on crafting impactful solutions,
            optimizing performance, and delivering projects that make a real
            difference., and I&apos;ve been refining my skills ever since.
            Whether it&apos;s crafting elegant solutions or leading technical
            projects, I&apos;m always eager to create something impactful!
          </p>

          <p>Here are a few technologies I have been working with recently:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            {technologies.map((tech, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg ">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-top object-cover"
                src={profileImg}
                alt="profileImg"
                fill
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-80 h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
