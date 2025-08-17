import React, { useState } from "react";


const servicesData = [
  {
    name: "GIS Consultancy",
    description:
      "We provide expert GIS consultancy services to help organizations manage, analyze, and visualize spatial data for better decision-making.",
    image: "https://source.unsplash.com/400x250/?gis,maps",
  },
  {
    name: "GIS Software Training",
    description:
      "Our training programs teach professionals to use GIS software efficiently, including QGIS, ArcGIS, and other mapping tools.",
    image: "https://source.unsplash.com/400x250/?computer,training",
  },
  {
    name: "Land Information Systems",
    description:
      "We design and implement Land Information Systems to manage property records, cadastral maps, and land ownership data.",
    image: "https://source.unsplash.com/400x250/?land,survey",
  },
  {
    name: "Environmental & Biodiversity Mapping",
    description:
      "We map habitats, biodiversity hotspots, and environmental assets for sustainable management and conservation planning.",
    image: "https://source.unsplash.com/400x250/?environment,biodiversity",
  },
  {
    name: "Natural Resource Mapping",
    description:
      "Our services include mapping and monitoring natural resources like water, forests, and minerals for sustainable utilization.",
    image: "https://source.unsplash.com/400x250/?natural,resources",
  },
  {
    name: "WebGIS Application Development",
    description:
      "We build interactive web-based GIS applications for visualizing spatial data and enabling user-driven exploration.",
    image: "https://source.unsplash.com/400x250/?web,development",
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

const GISMappingServices = () => {
  return (
    <div className="gis-container">
      <header className="gis-header">
        <h1>GIS & Mapping Services</h1>
        <p>
          Explore our comprehensive GIS & Mapping services that help
          organizations make better spatial decisions.
        </p>
      </header>
      {servicesData.map((service) => (
        <ServiceCard key={service.name} service={service} />
      ))}
    </div>
  );
};

export default GISMappingServices;

