// CompanyInfoComponent.js
import React from 'react';

const CompanyInfoComponent = ({ company }) => {
  return (
    <div>
      <h2>{company.name}</h2>
      <p>ID: {company.id}</p>
    </div>
  );
};

export default CompanyInfoComponent;