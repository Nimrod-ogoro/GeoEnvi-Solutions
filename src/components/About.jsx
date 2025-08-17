import React from "react";


const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-title">Who We Are</h2>
        <p className="about-intro">
          GeoEnvi Solutions is a leading provider of GIS, environmental, and planning services.
          We leverage cutting-edge spatial data analysis and climate solutions to help
          organizations and governments make informed, sustainable decisions.
        </p>

        <div className="about-cards">
          <div className="about-card">
            <h3 className="about-card-title">Our Mission</h3>
            <p className="about-card-text">
              To transform complex spatial and environmental data into actionable insights for
              sustainable development.
            </p>
          </div>

          <div className="about-card">
            <h3 className="about-card-title">Our Vision</h3>
            <p className="about-card-text">
              To be the leading GIS and environmental solutions provider recognized for innovation
              and excellence.
            </p>
          </div>

          <div className="about-card">
            <h3 className="about-card-title">Our Values</h3>
            <p className="about-card-text">
              Integrity, Innovation, Sustainability, and Client-Focused Solutions guide everything
              we do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

