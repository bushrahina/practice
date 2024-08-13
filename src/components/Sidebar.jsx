// Sidebar.js
import React from 'react';

const Sidebar = ({ components, onSelectComponent }) => {
  return (
    <aside className="w-48 bg-gray-400 w-48 h-screen p-4">
      <ul>
        {components.map((component) => (
          <li key={component.id} className="py-2">
            <button
              href="#"
              className="text-gray-700 hover:text-gray-900"
              onClick={() => onSelectComponent(component)}>
              {component.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;