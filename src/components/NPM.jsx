import React from "react";

import { FaTree, FaWater } from "react-icons/fa";

const NPM = () => {
  return (
    <div className="service-page">
      <div className="service-header">
        <FaTree className="icon" />
        <h1>Natural Resource Mapping</h1>
      </div>

      <p className="service-description">
        We support sustainable resource management by mapping forests, water,
        soils, minerals, wildlife, and rangelands. Our workflows combine
        satellite imagery, field data, and GIS analytics for monitoring and
        decision-support.
      </p>

      <div className="highlight-box">
        <strong>Capabilities</strong>
        <ul className="service-list">
          <li>Land cover/land use classification & time-series change</li>
          <li>Forest inventory, biomass, and degradation analysis</li>
          <li>Watershed delineation, aquifer & catchment assessments</li>
          <li>Soil/erosion risk, rangeland condition & carrying capacity</li>
          <li>Resource governance dashboards for stakeholders</li>
        </ul>
      </div>

      <div className="highlight-box">
        <strong><FaWater style={{ verticalAlign: "middle" }} /> Outcomes</strong>
        <ul className="service-list">
          <li>Evidence-based plans for sustainable use</li>
          <li>Early warning for degradation/encroachment</li>
          <li>Maps and dashboards for policy & community engagement</li>
        </ul>
      </div>
    </div>
  );
};

export default NPM;