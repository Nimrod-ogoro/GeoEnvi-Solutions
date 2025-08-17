import React from "react";

import { FaClipboardCheck } from "react-icons/fa";

const EIA_EA = () => {
  return (
    <div className="service-page">
      <div className="service-header">
        <FaClipboardCheck className="icon" />
        <h1>EIA & EA (Environmental Impact Assessment & Audit)</h1>
      </div>

      <p className="service-description">
        We conduct EIAs and Environmental Audits to assess project risks,
        propose mitigation, and ensure compliance with national regulations and
        international standards. Our approach integrates GIS for baseline,
        impact zoning, and monitoring.
      </p>

      <div className="highlight-box">
        <strong>Scope</strong>
        <ul className="service-list">
          <li>Screening, scoping & terms of reference</li>
          <li>Baseline surveys & GIS mapping</li>
          <li>Impact identification, significance & mitigation</li>
          <li>Environmental & Social Management Plans (ESMP)</li>
          <li>Stakeholder engagement & disclosure</li>
          <li>Compliance audits & monitoring frameworks</li>
        </ul>
      </div>

      <div className="highlight-box">
        <strong>Deliverables</strong>
        <ul className="service-list">
          <li>Regulator-ready reports & map atlases</li>
          <li>Monitoring indicators & data collection tools</li>
          <li>Capacity building for ongoing compliance</li>
        </ul>
      </div>
    </div>
  );
};

export default EIA_EA;
