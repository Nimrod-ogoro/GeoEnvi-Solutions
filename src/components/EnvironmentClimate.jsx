import React, { useState } from "react";


const servicesData = [
  {
    name: "Climate Change",
    description:
      "Our climate change services include vulnerability assessments, mitigation strategies, and adaptation planning.",
    image: "https://source.unsplash.com/400x250/?climate,change",
  },
  {
    name: "Greenhouse Gas Inventory",
    description:
      "We assist organizations in measuring and managing greenhouse gas emissions for sustainability and compliance.",
    image: "https://source.unsplash.com/400x250/?carbon,emissions",
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

const EnvironmentClimate = () => {
  return (
    <div className="environment-container">
      <header className="environment-header">
        <h1>Environment and Climate Solutions</h1>
        <p>
          Explore our environment and climate solutions designed to mitigate
          environmental impact and promote sustainability.
        </p>
      </header>
      {servicesData.map((service) => (
        <ServiceCard key={service.name} service={service} />
      ))}
    </div>
  );
};

export default EnvironmentClimate;

