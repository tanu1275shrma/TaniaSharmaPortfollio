import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-titleFont tracking-wide text-textGreen"
      >
        Hi, my name is
      </motion.h3>

      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
      >
        Tania Sharma
        <span className="text-textDark mt-2 lgl:mt-4">
          Passionate Full Stack Developer
        </span>
      </motion.h1>

      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-textDark font-medium"
      >
        I am a software engineer with a{" "}
        <span className="text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
          &quot;Never Give Up&quot;
          <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
        </span>{" "}
        attitude and a passion for creating impactful applications. I excel in
        both frontend and backend technologies, specializing in building
        scalable, responsive web applications using{" "}
        <span className="text-textGreen">React.js</span>,{" "}
        <span className="text-textGreen">Next.js</span>,{" "}
        <span className="text-textGreen">Tailwind CSS</span>,{" "}
        <span className="text-textGreen">HTML/CSS</span> for the frontend, and
        designing robust backend systems with{" "}
        <span className="text-textGreen">Node.js</span>,{" "}
        <span className="text-textGreen">Express.js</span>,{" "}
        <span className="text-textGreen">RESTful APIs</span>, and{" "}
        <span className="text-textGreen">MongoDB</span>. I am proficient in
        programming languages like{" "}
        <span className="text-textGreen">JavaScript</span> and{" "}
        <span className="text-textGreen">C++</span>, with hands-on experience
        building real-world projects and hosting technical events. I am driven
        to create impactful solutions and continuously grow in my field.
      </motion.p>
    </section>
  );
};

export default Banner;
