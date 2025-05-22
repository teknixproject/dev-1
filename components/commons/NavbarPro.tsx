import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Menu items
  const menuItems = [
    { id: 1, name: 'Home', path: '/', notifications: 4 },
    { id: 2, name: 'Products', path: '/products', notifications: 0 },
    { id: 3, name: 'Blog', path: '/blog', notifications: 0 },
    { id: 4, name: 'About', path: '/about', notifications: 0 },
  ];

  // Navigate to page
  const navigateTo = (path: string) => {
    navigate(path);
  };

  // Check if route is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="flex justify-center items-center h-16 px-4 w-full">
      <nav className="bg-white rounded-full shadow-lg px-4 py-3 w-full max-w-3xl">
        <ul className="flex justify-between items-center">
          {menuItems.map((item) => (
            <li key={item.id} className="relative">
              <button
                onClick={() => navigateTo(item.path)}
                className={`px-6 py-2 rounded-full flex items-center font-medium transition-colors ${
                  isActive(item.path)
                    ? 'bg-green-200 text-black'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.name}
                {item.notifications > 0 && (
                  <span className="ml-1 w-5 h-5 flex items-center justify-center rounded-full bg-black text-white text-xs">
                    {item.notifications}
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;