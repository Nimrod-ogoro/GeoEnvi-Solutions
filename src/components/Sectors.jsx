import React from "react";
import { Link } from "react-router";


const Sectors = () => {
  return (
    <section className="sectors-section">
      <div className="sectors-container">
        <h2 className="sectors-title">Our Sectors</h2>
        <div className="sectors-grid">
          <div className="sector-card">
            <h3 className="sector-heading">GIS & Mapping Services</h3>
            <p>
              Comprehensive GIS solutions including spatial data analysis, web
              mapping, land information systems, and environmental mapping.
            </p>
            <button className="btn-learn"><Link to="/GIS" className="redirect">Learn More</Link></button>
          </div>
          <div className="sector-card">
            <h3 className="sector-heading">Planning and Development</h3>
            <p>
              Guiding urban and rural projects, spatial planning, and
              environmental impact assessments for sustainable growth.
            </p>
              <button className="btn-learn"><Link  to="/Planning" className="redirect" >Learn More</Link></button>
          </div>
          <div className="sector-card">
            <h3 className="sector-heading">Environment and Climate Solutions</h3>
            <p>
              Climate change adaptation strategies, greenhouse gas inventories,
              and environmental monitoring for sustainable impact.
            </p>
              <button className="btn-learn"><Link to="/EnvironmentT" className="redirect">Learn More</Link></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sectors;

