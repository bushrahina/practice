// Header.js
import React from 'react';

const Header = ({ employees, cartItems, onAddToCart, onAvatarClick }) => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAvatarClick = (employee) => {
    onAvatarClick(employee);
  };

  return (
    <header className="flex justify-between items-center py-4 px-6 bg-slate-500 ">
      <div className="flex items-center">
        <input
          type="search"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search"
          className="px-4 py-2 w-64 text-sm text-gray-700"
        />
      </div>
      <div className="flex items-center">
        <button
          className="bg-orange-500 hover:bg-amber-400 text-white font-bold py-2 px-4 rounded"
          onClick={() => onAddToCart()}
        >
          <i className="fas fa-shopping-cart"></i>
          <span className="ml-2">{cartItems.length}</span>
        </button>
        <div className="ml-4">
          {employees.map((employee) => (
            <img
              key={employee.id}
              src={employee.avatar}
              alt={employee.name}
              className="w-8 h-8 rounded-full cursor-pointer"
              onClick={() => handleAvatarClick(employee)}
            />
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;