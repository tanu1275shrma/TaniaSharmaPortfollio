import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const DacoidDigital = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        SDE Intern
        <span className="text-textGreen tracking-wide">@Dacoid Digital</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">Remote, IN</p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Developed a scalable backend server using Nest.js with pagination
          support.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Optimized database queries to handle large-scale data efficiently.
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
          services
        </li>
      </ul>
    </motion.div>
  );
};

export default DacoidDigital;
