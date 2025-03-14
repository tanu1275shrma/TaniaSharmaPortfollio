import { amazonImg, cyberImg, noorShop, pythonTutor } from "@/public/assets";
import Image from "next/image";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";

const projectsData = [
  {
    id: 1,
    title: "CGC Happenings",
    image: amazonImg,
    description:
      "A dynamic website for CGC Happenings, designed to showcase the latest events, activities, and announcements at CGC. Explore event details, connect with organizers, and stay updated with real-time notifications. A seamless platform for enhancing campus engagement and collaboration.",
    technologies: ["React.js", "Express.js", "Firebase", "Javascript", "MUi"],
    liveLink: "https://www.cgchappenings.tech/",
    githubLink: "",
    demoLink:
      "https://www.linkedin.com/posts/upenderlakhwan_cgchappenings-mernstack-eventmanagement-activity-7157810738806329345-ff5b?utm_source=share&utm_medium=member_desktoptarget=",
    isReversed: false,
  },
  {
    id: 2,
    title: "Task Hive",
    image: cyberImg,
    description:
      "A feature-rich task management platform, Task Hive, designed to go beyond a simple to-do list. Organize your tasks, set priorities, and collaborate with others seamlessly. Log in to experience smart scheduling, progress tracking, and a streamlined workflow for achieving your goals.",
    technologies: ["MUi", "SpringBoot", "JWT", "Java", "React.js"],
    liveLink: "",
    githubLink: "https://github.com/lakhwan/task-hive",
    demoLink:
      "https://www.linkedin.com/posts/upenderlakhwan_fullstackdevelopment-springboot-vitejs-activity-7224429060456595457-Uejg?utm_source=share&utm_medium=member_desktop",
    isReversed: true,
  },
  {
    id: 3,
    title: "AI Podcast Generation",
    image: noorShop,
    description:
      "An innovative Automation Podcast Solution that transforms articles into audio podcasts. Simply provide an article link in a Tkinter-based GUI, and the tool fetches the details. Utilizing the Gemini API for speech generation and PyHt for voice synthesis, it seamlessly converts text to audio and plays it automatically.",
    technologies: ["Python", "Selenium", "PyHT", "Gemini", "AI"],
    liveLink: "",
    githubLink: "https://github.com/LaKhWaN/Automation-Podcast-Solution",
    demoLink:
      "https://www.linkedin.com/posts/upenderlakhwan_python-automation-podcast-activity-7283826580605255680-4tGq?utm_source=share&utm_medium=member_desktop",
    isReversed: false,
  },
  {
    id: 4,
    title: "Python Tutor",
    image: pythonTutor,
    description:
      "Built a Python Tutor website for childrens to learn Python with integrated Gemini AI Chatbot",
    technologies: ["React.js", "Express.js", "Firebase", "Javascript", "MUi"],
    liveLink: "https://skc-upenderlakhwan.onrender.com/",
    githubLink: "https://github.com/LaKhWaN/Python-Tutor",
    demoLink: "",
    isReversed: true,
  },
];

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some Things I have Built" titleNo="03" />
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className={`flex flex-col ${
              project.isReversed ? "xl:flex-row-reverse" : "xl:flex-row"
            } gap-6`}
          >
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href={project.liveLink || project.githubLink}
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={project.image}
                  alt={project.title}
                />
                <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
              </div>
            </a>

            <div
              className={`w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right ${
                project.isReversed ? "xl:mr-0" : "xl:-ml-16"
              } z-10`}
            >
              <div>
                <p className="font-titleFont text-textGreen text-sm tracking-wide">
                  Featured Project
                </p>
                <h3 className="text-2xl font-bold">{project.title}</h3>
              </div>
              <p
                className={`text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md ${
                  project.isReversed ? "xl:-mr-16" : ""
                }`}
              >
                {project?.description}
              </p>

              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                {project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>

              <div className="text-2xl flex gap-4">
                {project.liveLink && (
                  <a
                    className="hover:text-textGreen duration-300"
                    href={project.liveLink}
                    target="_blank"
                  >
                    <RxOpenInNewWindow />
                  </a>
                )}
                {project.githubLink && (
                  <a
                    className="hover:text-textGreen duration-300"
                    href={project.githubLink}
                    target="_blank"
                  >
                    <TbBrandGithub />
                  </a>
                )}
                {project.demoLink && (
                  <a
                    className="hover:text-textGreen duration-300"
                    href={project.demoLink}
                    target="_blank"
                  >
                    <AiOutlineYoutube />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
