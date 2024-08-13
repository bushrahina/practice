// Content.js
import React from 'react';
import HomeComponent from './HomeComponent';
import EmployeeComponent from './EmployeeComponent';
import CompanyInfoComponent from './CompanyInfoComponent';

const Content = ({ selectedComponent }) => {
  if (!selectedComponent) return <div className=' flex-auto'>No component selected</div>;

  switch (selectedComponent.type) {
    case 'home':
      return <HomeComponent />;
    case 'employee':
      return <EmployeeComponent employee={selectedComponent.employee} />;
    case 'companyInfo':
      return <CompanyInfoComponent company={selectedComponent.company} />;
    default:
      return <div>Unknown component type</div>;
  }
};

export default Content;