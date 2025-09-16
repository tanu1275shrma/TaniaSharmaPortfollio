import Image from "next/image";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";

const projectsData = [
  {
    id: 1,
    title: "The Wild Oasis",
    image: "/assets/images/wildoasis.jpeg",
    description:
      "The Wild Oasis is a full-stack hotel management platform that delivers a seamless booking experience and streamlined operations. It enables users to browse rooms, book stays, and manage reservations effortlessly, while providing administrators with real-time dashboards, automated check-ins/outs, and occupancy analytics. Built with a secure authentication, the platform ensures high performance, user engagement, and operational efficiency",
    technologies: [
      "React.js",
      "React Query",
      "Supabase",
      "JWT",
      "Styled Components",
    ],
    liveLink: "https://wild-oasis-delta-ruby.vercel.app/",
    githubLink: "https://github.com/tanu1275shrma/WildOasis",
    isReversed: false,
  },
  {
    id: 2,
    title: "Natour-main",
    image: "/assets/images/natourmain.jpeg",
    description:
      "Built a tour booking web application using Node.js, Express, and MongoDB. Added secure login/signup with JWT, tour management with CRUD operations, Stripe payments, and a user dashboard for profile updates and bookings. Designed with MVC pattern, responsive frontend, and cloud deployment with security features like Helmet and rate limiting.",
    technologies: ["JavaScript", "React.js", "MERN", "MongoDB", "JWT"],
    liveLink: "https://github.com/tanu1275shrma/Natour-Main",
    githubLink: "https://github.com/tanu1275shrma/Natour-Main",
    isReversed: true,
  },
  {
    id: 3,
    title: "Fast Pizza Co.",
    image: "/assets/images/FastReactPizza.jpeg",
    description:
      "Developed a pizza ordering web application where users can browse menus, customize pizzas, add items to cart, and place orders online. Implemented user authentication, order tracking, and real-time updates using React (frontend) and Node.js/Express with MongoDB (backend). Integrated secure payments, responsive design, and cloud deployment for a smooth user experience",
    technologies: ["React.js", "Redux", "Tailwind CSS"],
    liveLink: "https://fast-react-pizza-psi-one.vercel.app/",
    githubLink: "https://github.com/tanu1275shrma/FastReactPizza",
    isReversed: false,
  },
  {
    id: 4,
    title: "Interno",
    image: "/assets/images/interno.jpeg",
    description:
      "Developed a responsive website for an interior design company showcasing services, portfolio, and client testimonials. Designed a modern, user-friendly UI with HTML, CSS, JavaScript, and Tailwind CSS/React for smooth navigation. Focused on clean layouts, responsive design, and performance optimization to provide a professional brand presence",
    technologies: ["React.js", "TailwindCSS", "Javascript"],
    liveLink: "https://interno05.netlify.app/",
    githubLink: "https://github.com/tanu1275shrma/Interno",
    isReversed: true,
  },
  {
    id: 5,
    title: "Cinefy",
    image: "/assets/images/cinefy.jpeg",
    description:
      "Developed a movie rating and watchlist application where users can search movies, rate them, and add to their personal watchlist. Implemented user authentication, real-time updates, and responsive design using React, Node.js, Express, and MongoDB. Focused on seamless user experience, interactive UI, and efficient data handling for personalized recommendations",
    technologies: ["React.js", "TailwindCSS"],
    liveLink: "https://cinefy-sandy.vercel.app/",
    githubLink: "https://github.com/tanu1275shrma/Cinefy",
    isReversed: false,
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
                  width={500}
                  height={300}
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
