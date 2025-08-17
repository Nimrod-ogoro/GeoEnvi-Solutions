import React from "react";


const projects = [
  {
    id: 1,
    title:
      "Geo-Envi Solutions International Supports Puntland to prepare GHG Inventories",
    description:
      "Helping Puntland develop green growth strategies and meet UNFCCC obligations.",
    img: "/img1.jpg",
  },
  {
    id: 2,
    title:
      "Geo-Envi Solutions International supports Uganda with national climate zoning",
    description:
      "Developing national climate zoning data and refining soil data required for GHG inventory development.",
    img: "/img2.jpg",
  },
  {
    id: 3,
    title:
      "Geo-Envi Solutions International supports Kenya on institutional and legal arrangements",
    description:
      "Reviewed and redesigned institutional, legal and communication arrangements for national communications and GHG Inventories at Great Rift Valley Lodge, Naivasha.",
    img: "/img3.jpg",
  },
  {
    id: 4,
    title: "Geo-Envi Solutions International project at Jinja Source of the Nile",
    description:
      "Supporting climate and environmental initiatives at the Jinja Source of the Nile.",
    img: "/img4.jpg",
  },
  {
    id: 5,
    title:
      "Geo-Envi Solutions International Supports Somaliland with GHG Inventories",
    description:
      "Assisting Somaliland in preparing GHG Inventories for green growth strategies and UNFCCC obligations.",
    img: "/img8.jpg",
  },
  {
    id: 6,
    title:
      "Geo-Envi Solutions International supports Somalia on First National Communication",
    description:
      "Worked with Somalia’s Climate Change and Environmental experts to review the First National Communication to the UNFCCC in Mogadishu.",
    img: "/img7.jpg",
  },
  {
    id: 7,
    title:
      "Geo-Envi Solutions International training Ethiopia GHG Inventory Team",
    description:
      "Experts trained the Ethiopia GHG Inventory Team to calculate Emissions from the LULCF Sector using MODIS land cover maps.",
    img: "/img6.jpg",
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2 className="projects-title">Our Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${index % 2 !== 0 ? "reverse" : ""}`}
            >
              <img
                src={project.img}
                alt={project.title}
                className="project-img"
              />
              <div className="project-content">
                <h3 className="project-heading">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
