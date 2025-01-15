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
          title="Trending Scraper with Python & Selenium"
          des="Scrapes top 5 latest Twitter news using Python, Selenium, and ProxyMesh."
          listItem={["Python", "Selenium", "ProxyMesh"]}
          link="https://github.com/LaKhWaN/trending-scrapper-selenium"
        />
        <ArchiveCard
          title="Employee Management System (EMS)"
          des="Comprehensive EMS built with React (Vite) frontend and Spring Boot backend, featuring CRUD operations and SQL database."
          listItem={["React", "Spring Boot", "SQL"]}
          link="https://github.com/LaKhWaN/EMS-springboot-reactjs"
        />
        <ArchiveCard
          title="Blackjack Game"
          des="Web-based Blackjack game built using basic components like HTML, CSS, and JS. Demonstrates mathematical logic and game design."
          listItem={["HTML", "CSS", "JS"]}
          link="https://github.com/LaKhWaN/Blackjack"
        />
        <ArchiveCard
          title="Wikipedia Search with Voice"
          des="GUI-based Wikipedia search with voice recognition using Python and Tkinter."
          listItem={["Python", "Tkinter", "Voice Recognition"]}
          link="https://github.com/LaKhWaN/WikipediaGuiVoice"
        />
        <ArchiveCard
          title="Toddle Social Media Backend"
          des="A scalable backend solution for a social media app, using GraphQL for flexible data fetching and manipulation."
          listItem={["GraphQL", "Backend", "Social Media"]}
          link="https://github.com/LaKhWaN/Toddle-Social-Backend"
        />
      </div>
    </div>
  );
};

export default Archive;
