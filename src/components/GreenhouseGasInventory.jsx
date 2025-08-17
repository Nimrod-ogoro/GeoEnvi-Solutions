import React from "react";

import { FaIndustry, FaChartBar } from "react-icons/fa";

const GreenhouseGasInventory = () => {
  return (
    <div className="service-page">
      <div className="service-header">
        <FaIndustry className="icon" />
        <h1>Greenhouse Gas (GHG) Inventory</h1>
      </div>

      <p className="service-description">
        We design and implement GHG inventories aligned to best-practice
        standards. Our team builds robust data pipelines, emission factors,
        uncertainty analysis, and dashboards for transparent reporting.
      </p>

      <div className="highlight-box">
        <strong>Inventory Support</strong>
        <ul className="service-list">
          <li>Scope 1, 2 & 3 emission accounting frameworks</li>
          <li>Activity data management & emission factor selection</li>
          <li>Geospatial allocation of emissions (grids, assets, routes)</li>
          <li>QA/QC, uncertainty analysis & reproducible workflows</li>
          <li>Reporting dashboards & audit-ready documentation</li>
        </ul>
      </div>

      <div className="highlight-box">
        <strong><FaChartBar style={{ verticalAlign: "middle" }} /> Outcomes</strong>
        <ul className="service-list">
          <li>Consistent year-on-year inventories</li>
          <li>KPIs for reduction strategies & tracking</li>
          <li>Inputs for disclosures and climate finance</li>
        </ul>
      </div>
    </div>
  );
};

export default GreenhouseGasInventory;
