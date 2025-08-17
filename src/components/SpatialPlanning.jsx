import React from "react";

import { FaCity } from "react-icons/fa";

const SpatialPlanning = () => {
  return (
    <div className="service-page">
      <div className="service-header">
        <FaCity className="icon" />
        <h1>Spatial Planning</h1>
      </div>

      <p className="service-description">
        We support county and city planning with spatial analytics for land use,
        infrastructure, transport, utilities, disaster risk reduction, and urban
        growth management—aligned to policy and regulatory frameworks.
      </p>

      <div className="highlight-box">
        <strong>Planning Services</strong>
        <ul className="service-list">
          <li>Baseline studies & settlement pattern analysis</li>
          <li>Scenario modeling & suitability analysis (MCDA)</li>
          <li>Infrastructure & service accessibility (network analysis)</li>
          <li>Zoning, land-use allocation & development control maps</li>
          <li>Public participation maps & planning dashboards</li>
        </ul>
      </div>

      <div className="highlight-box">
        <strong>Outcomes</strong>
        <ul className="service-list">
          <li>Evidence-based local physical & regional plans</li>
          <li>Investment prioritization & resilient growth paths</li>
          <li>Clear, publishable maps & implementation roadmaps</li>
        </ul>
      </div>
    </div>
  );
};

export default SpatialPlanning;
