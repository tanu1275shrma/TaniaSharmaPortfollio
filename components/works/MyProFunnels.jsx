import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const MyProFunnels = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Full Stack Developer{" "}
        <span className="text-textGreen tracking-wide">
          @
          <a
            href="https://hopingminds.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            MyProFunnels
          </a>
        </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Sep 2025 - Current
      </p>

      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Developed high-converting landing pages for webinars and digital
          funnels using React, Vite, and Tailwind CSS, optimized for both
          desktop and mobile responsiveness.
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Handled real-time project challenges by debugging complex
          frontend-backend issues, identifying root causes quickly, and
          proposing practical, long-term solutions.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Demonstrated ownership in end-to-end funnel development while
          maintaining strong coordination with marketing and design teams.
        </li>
      </ul>
    </motion.div>
  );
};

export default MyProFunnels;
