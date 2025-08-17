import React from "react";

import { FaGlobe, FaLaptopCode } from "react-icons/fa";

const WebGIS = () => {
  return (
    <div className="service-page">
      <div className="service-header">
        <FaGlobe className="icon" />
        <h1>WebGIS Application Development</h1>
      </div>

      <p className="service-description">
        We build interactive web map applications and dashboards so your teams
        and clients can explore, analyze, and share geospatial data securely in
        a browser—no desktop installs required.
      </p>

      <div className="highlight-box">
        <strong>Stack & Features</strong>
        <ul className="service-list">
          <li>Map frameworks: Leaflet, MapLibre/Mapbox GL, ArcGIS API</li>
          <li>Backends & tiles: GeoServer, PostGIS, vector tiles</li>
          <li>Dashboards: charts, filters, spatial queries, exports</li>
          <li>Auth, roles, & data governance best practices</li>
          <li>Responsive UI, offline modes & mobile-first design</li>
        </ul>
      </div>

      <div className="highlight-box">
        <strong><FaLaptopCode style={{ verticalAlign: "middle" }} /> Deliverables</strong>
        <ul className="service-list">
          <li>Custom WebGIS portals & admin consoles</li>
          <li>API integrations & automation workflows</li>
          <li>Documentation, training & knowledge transfer</li>
        </ul>
      </div>
    </div>
  );
};

export default WebGIS;
