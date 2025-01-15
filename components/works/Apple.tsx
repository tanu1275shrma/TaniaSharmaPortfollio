import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Apple = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Passionate Teacher
        <a href="https://www.youtube.com/@lakhwanscoding7003" target="_blank"><span className="text-textGreen tracking-wide">@Lakhwan&apos;s Coding</span></a>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Remote, IN
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Uploaded engaging videos on game development and C++ basics on Lakhwan&apos;s Coding, receiving an excellent response from viewers.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Passionate about teaching and making complex topics accessible to learners.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Thrives on sharing knowledge and inspiring others through educational content.
          </li>
      </ul>
    </motion.div>
  );
};

export default Apple;
