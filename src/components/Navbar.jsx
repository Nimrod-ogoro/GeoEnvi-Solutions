import React, { useState } from 'react';
import { LiaAngleDownSolid } from 'react-icons/lia';
import { Link } from 'react-router';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      {/* Overlay when nav is open */}
      {navOpen && <div className="overlay" onClick={() => setNavOpen(false)}></div>}

      <section className={`navbar ${navOpen ? 'nav-open' : ''}`}>
        <div className="navbar-logo">
          <img src="logo-1.png" alt="logo" className={`logo ${navOpen ? 'logo-small' : ''}`} />
          <span className="text-xl font-bold text-white name">GeoEnvi Solutions</span>
        </div>

        <div className="hamburger" onClick={() => setNavOpen(!navOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="nav-items">
          <ul className="nav-list-items">
            {/* Who are we */}
            <li className="list-item dropdown1">
              Who are we
              <LiaAngleDownSolid className="down-icon" />
              <ul className="navbar-dropdown1">
                <li className="list-dropdown1">About GeoEnvi</li>
                <li className="list-dropdown1">Projects</li>
              </ul>
            </li>

            {/* What we do */}
            <li className="list-item dropdown1">
              What we do
              <LiaAngleDownSolid className="down-icon" />
              <ul className="navbar-dropdown2">
                <li className="list-dropdown2">
                  Sectors
                  <ul className="sectors-dropdown">
                    <li className="sectors-list-dropdown">
                      <Link to="/GIS">GIS & Mapping Services</Link>
                    </li>
                    <li className="sectors-list-dropdown">
                      <Link to="/Planning">Planning and Development</Link>
                    </li>
                    <li className="sectors-list-dropdown">
                      <Link to="/EnvironmentT">Environment and Climate Solutions</Link>
                    </li>
                  </ul>
                </li>
                <li className="list-dropdown2">
                  Services
                  <ul className="services-dropdown">
                  <li className="services-list-dropdown"><Link to="/services/gis-consultancy">GIS Consultancy</Link></li>
  <li className="services-list-dropdown"><Link to="/services/gis-software-training">GIS Software Training</Link></li>
  <li className="services-list-dropdown"><Link to="/services/land-information-systems">Land Information Systems</Link></li>
  <li className="services-list-dropdown"><Link to="/services/environmental-biodiversity-mapping">Environmental & Biodiversity Mapping</Link></li>
  <li className="services-list-dropdown"><Link to="/services/natural-resource-mapping">Natural Resource Mapping</Link></li>
  <li className="services-list-dropdown"><Link to="/services/webgis-development">WebGIS Application Development</Link></li>
  <li className="services-list-dropdown"><Link to="/services/spatial-planning">Spatial Planning</Link></li>
  <li className="services-list-dropdown"><Link to="/services/eia-ea">EIA & EA</Link></li>
  <li className="services-list-dropdown"><Link to="/services/climate-change">Climate Change</Link></li>
  <li className="services-list-dropdown"><Link to="/services/ghg-inventory">Greenhouse Gas Inventory</Link></li>
                  </ul>
                </li>
              </ul>
            </li>

            {/* Other menu items */}
            <li className="list-item">Work with us</li>
            <li className="list-item">News</li>
            <li className="list-item">Contact</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Navbar;


