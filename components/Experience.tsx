import { useState } from "react";
import SectionTitle from "./SectionTitle";

import HopingMinds from "./works/HopingMinds";
import SkillDevelopment from "./works/SkillDevelopment";

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState("hopingMinds");

  // Set the active experience
  const handleExperienceChange = (experience: string) => {
    setActiveExperience(experience);
  };

  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="My experience" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={() => handleExperienceChange("hopingMinds")}
            className={`${
              activeExperience === "hopingMinds"
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Hoping Minds
          </li>
          <li
            onClick={() => handleExperienceChange("skillDevelopment")}
            className={`${
              activeExperience === "skillDevelopment"
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Skill Development
          </li>
        </ul>

        <div className="w-full">
          {activeExperience === "hopingMinds" && <HopingMinds />}
          {activeExperience === "skillDevelopment" && <SkillDevelopment />}
        </div>
      </div>
    </section>
  );
};

export default Experience;
