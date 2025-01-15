import { amazonImg, cyberImg, noorShop } from "@/public/assets";
import Image from "next/image";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some Things I have Built" titleNo="03" />
      {/* ============ project One Start here ================ */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://www.cgchappenings.tech/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={amazonImg}
                alt="amazonImg"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">CGC Happenings</h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              A dynamic website for <span className="text-textGreen">CGC Happenings</span>
              , designed to showcase the latest events, activities, and announcements at CGC. 
              Explore event details, connect with organizers, and stay updated with real-time notifications. 
              A seamless platform for enhancing campus engagement and collaboration.
              </p>

            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>React.js</li>
              <li>Express.js</li>
              <li>Firebase</li>
              <li>Javascript</li>
              <li>MUi</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://cgchappenings.tech/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://www.linkedin.com/posts/upenderlakhwan_cgchappenings-mernstack-eventmanagement-activity-7157810738806329345-ff5b?utm_source=share&utm_medium=member_desktoptarget="
                target="_blank"
              >
                <AiOutlineYoutube />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project One End here ================== */}
        {/* ============ project Two Start here ================ */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://github.com/LaKhWaN/taks-hive"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={cyberImg}
                alt="cyberImg"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Task Hive</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-16">
              A feature-rich task management platform, <span className="text-textGreen">Task Hive</span>, designed to go beyond a simple to-do list. Organize your tasks, set priorities, and collaborate with others seamlessly. Log in to experience smart scheduling, progress tracking, and a streamlined workflow for achieving your goals.
              </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>MUi</li>
              <li>SpringBoot</li>
              <li>JWT</li>
              <li>Java</li>
              <li>React.js</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/lakhwan/task-hive"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://www.linkedin.com/posts/upenderlakhwan_fullstackdevelopment-springboot-vitejs-activity-7224429060456595457-Uejg?utm_source=share&utm_medium=member_desktop"
              >
                <AiOutlineYoutube />
              </a>
              
            </div>
          </div>
        </div>
        {/* ============ project Two End here ================== */}
        {/* ============ project Three Start here ============== */}
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://github.com/LaKhWaN/Automation-Podcast-Solution"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={noorShop}
                alt="AutomationPodcast"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">AI Podcast Generation</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-16">
              An innovative <span className="text-textGreen">Automation Podcast Solution</span> that transforms articles into audio podcasts. Simply provide an article link in a Tkinter-based GUI, and the tool fetches the details. Utilizing the <span className="text-textGreen">Gemini API</span> for speech generation and <span className="text-textGreen">PyHt</span> for voice synthesis, it seamlessly converts text to audio and plays it automatically.
              </p>

            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Python</li>
              <li>Selenium</li>
              <li>PyHT</li>
              <li>Gemini</li>
              <li>AI</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/LaKhWaN/Automation-Podcast-Solution"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://www.linkedin.com/posts/upenderlakhwan_python-automation-podcast-activity-7283826580605255680-4tGq?utm_source=share&utm_medium=member_desktop"
                target="_blank"
              >
                <AiOutlineYoutube />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Three End here ================== */}
      </div>
    </section>
  );
};

export default Projects;
