import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const HopingMinds = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Full Stack Intern{" "}
        <span className="text-textGreen tracking-wide">
          @
          <a
            href="https://hopingminds.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Hoping Minds
          </a>
        </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jan 2025 - Jun 2025
      </p>

      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Developed high-performance, responsive web applications using React
          and Tailwind CSS, enhancing user experience.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Implemented full CRUD functionality and seamless frontend-backend
          integration with Axios, reducing data retrieval time.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Implemented authentication and authorization mechanisms to secure the
          application.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Implemented RESTful APIs to ensure seamless communication between
          services.
        </li>
      </ul>
    </motion.div>
  );
};

export default HopingMinds;
