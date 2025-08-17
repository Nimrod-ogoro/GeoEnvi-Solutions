import React from "react";

import { FaLeaf } from "react-icons/fa";
import { GiHummingbird } from "react-icons/gi";

const EnvironmentalMapping = () => {
  return (
    <div className="service-page">
      <div className="service-header">
        <FaLeaf className="icon" />
        <h1>Environmental & Biodiversity Mapping</h1>
      </div>

      <p className="service-description">
        We map habitats, species distribution, ecosystem services, and
        environmental sensitivities to support conservation, planning, and
        compliance. Using GIS and remote sensing, we turn raw environmental
        data into actionable insights and high-quality maps.
      </p>

      <div className="highlight-box">
        <strong>What We Deliver</strong>
        <ul className="service-list">
          <li>Habitat suitability & species distribution models</li>
          <li>Protected areas, key biodiversity areas (KBA) mapping</li>
          <li>Wetlands, watersheds & ecological corridors analysis</li>
          <li>Change detection (NDVI, land cover, deforestation)</li>
          <li>Field survey data capture & QA/QC workflows</li>
        </ul>
      </div>

      <div className="highlight-box">
        <strong><GiHummingbird style={{ verticalAlign: "middle" }} /> Use Cases</strong>
        <ul className="service-list">
          <li>Conservation planning & impact avoidance</li>
          <li>Restoration planning and monitoring</li>
          <li>EIA baselines & biodiversity action plans</li>
          <li>Nature-based solutions prioritization</li>
        </ul>
      </div>
    </div>
  );
};

export default EnvironmentalMapping;
