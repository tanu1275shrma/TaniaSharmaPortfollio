import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const SkillDevelopment = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Skill Development{" "}
        <span className="text-textGreen tracking-wide">
          @Self-Driven Learning
        </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jun 2025 - Sept 2025
      </p>

      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          React Mastery - Developed several personal projects with React,
          focusing on component reusability, state management, and performance
          optimization.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Full-Stack Projects: Designed and built full-stack applications using
          React, Node.js, Express, and MongoDB, focusing on developing robust
          and scalable applications with user authentication, CRUD operations,
          and RESTful API integrations.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Continuous Learning: Worked on enhancing backend skills, integrating
          third-party services, and learning DevOps tools to deploy and maintain
          applications more efficiently.
        </li>
      </ul>
    </motion.div>
  );
};

export default SkillDevelopment;
