import React, { useState } from "react";


const servicesData = [
  {
    name: "Spatial Planning",
    description:
      "We provide spatial planning solutions for urban and rural development projects to optimize land use and infrastructure.",
    image: "https://source.unsplash.com/400x250/?urban,planning",
  },
  {
    name: "EIA & EA",
    description:
      "Environmental Impact Assessment (EIA) and Environmental Audits (EA) to ensure compliance with environmental regulations.",
    image: "https://source.unsplash.com/400x250/?environmental,impact",
  },
];

const ServiceCard = ({ service }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="service-card">
      <div className="service-header" onClick={() => setOpen(!open)}>
        <h3>{service.name}</h3>
        <span className="toggle">{open ? "−" : "+"}</span>
      </div>
      {open && (
        <div className="service-content">
          <img src={service.image} alt={service.name} />
          <p>{service.description}</p>
        </div>
      )}
    </div>
  );
};

const PlanningDevelopment = () => {
  return (
    <div className="planning-container">
      <header className="planning-header">
        <h1>Planning and Development</h1>
        <p>
          Discover our planning and development services designed for
          sustainable urban and rural growth.
        </p>
      </header>
      {servicesData.map((service) => (
        <ServiceCard key={service.name} service={service} />
      ))}
    </div>
  );
};

export default PlanningDevelopment;

