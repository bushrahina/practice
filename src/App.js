import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import HomeComponent from './components/HomeComponent';
import EmployeeComponent from './components/EmployeeComponent';
import CompanyInfoComponent from './components/CompanyInfoComponent';

const employees = [
  { id: 1, name: 'Ahmed', email: 'Ahmed@example.com', address: '123 Main St', avatar: '' },
  { id: 2, name: 'Jannat', email: 'Jannat@example.com', address: '456 Elm St', avatar: '' }, // removed avatar URL
  { id: 3, name: 'Hina', email: 'Hina@example.com', address: '456 El St', avatar: '' }, // removed avatar URL
];

const companies = [
  { id: 1, name: 'Acme Inc.' },
  { id: 2, name: 'Best Corp.' },
];

const components = [
  { id: 1, name: 'Home', type: 'home' },
  { id: 2, name: 'Employees', type: 'employee', employees },
  { id: 3, name: 'Company Info', type: 'companyInfo', companies },
];
const getDefaultAvatarUrl = (name) => {
  const initials = name.split(' ').map((word) => word[0].toUpperCase()).join('');
  return `https://ui-avatars.com/api/?name=${initials}&background=random&color=white&size=128`;
};


const App = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [avatarClickedEmployee, setAvatarClickedEmployee] = useState(null);

  const handleSelectComponent = (component) => {
    setSelectedComponent(component);
  };

  const handleAddToCart = (employee) => {
    setCartItems([...cartItems, employee]);
  };

  const handleAvatarClick = (employee) => {
    setAvatarClickedEmployee(employee);
  };

  return (
    <div className="h-screen flex flex-col md:flex-row bg-slate-200">
      <Sidebar
        className="w-48 bg-gray-100 h-screen p-4 md:w-64"
        components={components}
        onSelectComponent={handleSelectComponent}
      />
      <div className="flex-1 p-4 md:p-6">
        <Header
          className="flex justify-between items-center py-4 px-6 bg-gray-100"
          employees={employees.map((employee) => ({
            ...employee,
            avatar: employee.avatar || getDefaultAvatarUrl(employee.name),
          }))}
          cartItems={cartItems}
          onAddToCart={handleAddToCart}
          onAvatarClick={handleAvatarClick}
        />
        <Content
          className="p-4 md:p-6"
          selectedComponent={selectedComponent}
        />
        {avatarClickedEmployee && (
          <div
            className="fixed top-0 right-0 p-4 bg-lime-300 rounded-circle shadow-md w-64 md:w-96"
            style={{ zIndex: 1 }}
          >
            <h2>{avatarClickedEmployee.name}</h2>
            <p>Email: {avatarClickedEmployee.email}</p>
            <p>Address: {avatarClickedEmployee.address}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;