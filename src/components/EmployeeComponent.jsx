// EmployeeComponent.js
import React from 'react';

const EmployeeComponent = ({ employee }) => {
  return (
    <div>
      <h2>{employee.name}</h2>
      <p>Email: {employee.email}</p>
      <p>Address: {employee.address}</p>
    </div>
  );
};

export default EmployeeComponent;