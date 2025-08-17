import React from "react";

import { FaMap } from "react-icons/fa";

const LandInformationSystems = () => {
  return (
    <div className="service-page">
      <div className="service-header">
        <FaMap className="icon" />
        <h1>Land Information Systems</h1>
      </div>

      <p className="service-description">
        A Land Information System (LIS) manages cadastral, land-use, and
        property-related data. We design and implement systems that streamline
        land registration, tenure security, and planning processes.
      </p>

      <div className="highlight-box">
        <strong>Applications:</strong>
        <ul className="service-list">
          <li>Cadastral mapping & land ownership records</li>
          <li>Land-use and zoning management</li>
          <li>Integration with government registries</li>
          <li>Property valuation and taxation support</li>
        </ul>
      </div>
    </div>
  );
};

export default LandInformationSystems;
