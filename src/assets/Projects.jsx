const Projects = () => {
  return (
    <section id="projects" className="projects-section m-10">
      <h3 className="text-center text-xl font-bold mb-6">PROJECT LIST</h3>
      <section className="project-list grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mx-10">
        
        {/* Project 1 - Working */}
        <div className="relative shadow-inner shadow-yellow-100 rounded-full pl-3 py-2 w-[250px] bg-white">
          <span className="absolute top-0 right-0 bg-orange-500 text-white text-xs px-2 py-1 rounded-bl-md font-semibold">
            Working...
          </span>
          hospital
        </div>

        {/* Project 2 - Recent */}
        <div className="relative shadow-inner shadow-yellow-100 rounded-full pl-3 py-2 w-[250px] bg-white">
          <span className="absolute top-0 right-0 bg-green-500 text-white text-xs px-2 py-1 rounded-bl-md font-semibold">
            Recent
          </span>
          chat
        </div>

        {/* Project 3 - Recent */}
        <div className="relative shadow-inner shadow-yellow-100 rounded-full pl-3 py-2 w-[250px] bg-white">
          <span className="absolute top-0 right-0 bg-green-500 text-white text-xs px-2 py-1 rounded-bl-md font-semibold">
            Recent
          </span>
          first basic website
        </div>

        {/* Other Projects */}
        {["calculator", "portfolio", "portfolio", "portfolio", "portfolio", "portfolio", "portfolio", "portfolio", "portfolio"].map((project, index) => (
          <div key={index} className="shadow-inner shadow-yellow-100 rounded-full pl-3 py-2 w-[180px] bg-white">
            {project}
          </div>
        ))}
      </section>
    </section>
  );
};

export default Projects;