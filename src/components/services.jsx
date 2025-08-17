import React, { useState } from "react";

const services = [
  {
    title: "Environmental Impact Assessment",
    description:
      "Comprehensive EIAs to evaluate potential effects of projects on the environment and provide sustainable solutions."
  },
  {
    title: "Geospatial Mapping",
    description:
      "High-precision GIS and remote sensing services for environmental monitoring and land use planning."
  },
  {
    title: "Water Resource Management",
    description:
      "Hydrological studies and solutions for efficient and sustainable water resource use."
  },
  {
    title: "Climate Change & Sustainability",
    description:
      "Data-driven strategies for climate adaptation, carbon footprint reduction, and sustainable development."
  },
  {
    title: "Waste Management",
    description:
      "Innovative waste reduction, recycling, and sustainable disposal techniques."
  },
  {
    title: "Soil & Land Rehabilitation",
    description:
      "Restoring degraded lands for agricultural, ecological, and community use."
  },
  {
    title: "Biodiversity Conservation",
    description:
      "Protecting ecosystems, wildlife habitats, and endangered species."
  },
  {
    title: "Environmental Audits",
    description:
      "Detailed audits to ensure compliance with environmental regulations and standards."
  }
];

const Services = () => {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <div className="services-container">
      {/* Left Circle */}
      <div className="services-circle">
        <h2>{activeService.title}</h2>
        <p>{activeService.description}</p>
      </div>

      {/* Right Curved Rectangle */}
      <div className="services-rectangle">
        {services.map((service, index) => (
          <div
            key={index}
            className={`service-item ${
              activeService.title === service.title ? "active" : ""
            }`}
            onClick={() => setActiveService(service)}
          >
            {service.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;






