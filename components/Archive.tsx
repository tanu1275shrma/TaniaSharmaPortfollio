import ArchiveCard from "./ArchiveCard";

const Archive = () => {
  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Noteworthy Projects
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          view the archive
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchiveCard
          title="Bag it Up"
          des="A responsive packing list web app to create, organize, and track travel essentials with real-time progress for a hassle-free journey."
          listItem={["React.js"]}
          link="https://bag-it-up-bxok.vercel.app/"
        />
        <ArchiveCard
          title="The React Quiz"
          des="An interactive React-based quiz application with dynamic questions, instant feedback, score tracking, and a responsive UI for engaging learning."
          listItem={["React", "MongoDB"]}
          link="https://react-quiz-seven-peach.vercel.app/"
        />
        <ArchiveCard
          title="Natour"
          des="A tour booking web app built with Node.js, Express, and MongoDB, featuring secure authentication, Stripe payments, and a user-friendly booking dashboard."
          listItem={["HTML", "CSS", "JS"]}
          link="natour-phi.vercel.app"
        />
        <ArchiveCard
          title="WorldWise"
          des="A React-based travel tracker app that lets users mark places on an interactive map, save notes, and visualize journeys with a responsive, intuitive UI."
          listItem={["React.js"]}
          link="https://github.com/tanu1275shrma/worldwise"
        />
        <ArchiveCard
          title="BakeD'Nut"
          des="A React-based interactive slider component for showcasing products or images with smooth transitions, responsive design, and customizable controls."
          listItem={["React.js"]}
          link="bake-dnut.vercel.app"
        />
      </div>
    </div>
  );
};

export default Archive;
