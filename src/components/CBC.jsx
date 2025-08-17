import React from "react";

import { FaCloudSun, FaThermometerHalf } from "react-icons/fa";

const CBC = () => {
  return (
    <div className="service-page">
      <div className="service-header">
        <FaCloudSun className="icon" />
        <h1>Climate Change Services</h1>
      </div>

      <p className="service-description">
        We support climate risk assessment, adaptation planning, and mitigation
        strategy development by combining climate datasets with geospatial
        analysis. We help institutions build resilience and meet reporting
        commitments.
      </p>

      <div className="highlight-box">
        <strong>Capabilities</strong>
        <ul className="service-list">
          <li>Climate hazard mapping (flood, drought, heat)</li>
          <li>Exposure & vulnerability assessments</li>
          <li>Adaptation options appraisal & prioritization</li>
          <li>MRV frameworks linking to GHG inventories</li>
          <li>Climate dashboards for monitoring progress</li>
        </ul>
      </div>

      <div className="highlight-box">
        <strong><FaThermometerHalf style={{ verticalAlign: "middle" }} /> Outcomes</strong>
        <ul className="service-list">
          <li>Risk profiles & sector-specific action plans</li>
          <li>Evidence for climate finance proposals</li>
          <li>Progress tracking for resilience targets</li>
        </ul>
      </div>
    </div>
  );
};

export default CBC;
