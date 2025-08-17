import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section">
          <h3>GeoEnvi Solutions</h3>
          <p>
            Providing innovative GIS, environmental, and spatial solutions to
            support decision-making and sustainable development.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h4>Our Services</h4>
          <ul>
            <li><a href="/services/gis-consultancy">GIS Consultancy</a></li>
            <li><a href="/services/environmental-mapping">Environmental Mapping</a></li>
            <li><a href="/services/webgis">WebGIS Development</a></li>
            <li><a href="/services/spatial-planning">Spatial Planning</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} GeoEnvi Solutions. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
