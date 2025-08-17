import React from "react";

import { FaChalkboardTeacher } from "react-icons/fa";

const GISSoftwareTraining = () => {
  return (
    <div className="service-page">
      <div className="service-header">
        <FaChalkboardTeacher className="icon" />
        <h1>GIS Software Training</h1>
      </div>

      <p className="service-description">
        We provide hands-on training in leading GIS software such as ArcGIS,
        QGIS, and open-source mapping tools. Our programs are designed for
        beginners, professionals, and organizations looking to upskill.
      </p>

      <div className="highlight-box">
        <strong>Training Includes:</strong>
        <ul className="service-list">
          <li>Fundamentals of GIS and cartography</li>
          <li>Data collection and database management</li>
          <li>Spatial analysis and modeling</li>
          <li>Developing WebGIS and interactive dashboards</li>
        </ul>
      </div>
    </div>
  );
};

export default GISSoftwareTraining;
