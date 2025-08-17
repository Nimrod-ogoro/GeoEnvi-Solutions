import React from "react";

import { FaMapMarkedAlt } from "react-icons/fa";

const GISConsultancy = () => {
  return (
    <div className="service-page">
      <div className="service-header">
        <FaMapMarkedAlt className="icon" />
        <h1>GIS Consultancy</h1>
      </div>

      <p className="service-description">
        Our GIS consultancy services provide expert advice, solutions, and
        applications tailored to industries such as environment, transport,
        urban planning, and natural resources. We help organizations harness
        the power of spatial data for informed decision-making.
      </p>

      <div className="highlight-box">
        <strong>What We Offer:</strong>
        <ul className="service-list">
          <li>Spatial data collection, analysis, and visualization</li>
          <li>Custom GIS application and workflow development</li>
          <li>Integration of GIS with enterprise systems</li>
          <li>Decision support through geospatial intelligence</li>
        </ul>
      </div>
    </div>
  );
};

export default GISConsultancy;
