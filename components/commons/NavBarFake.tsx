'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiHome } from 'react-icons/fi';

export default function NavBar() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('home');
  
  const navItems = [
    { id: 'home', label: 'Home', path: '/', icon: <FiHome size={18} /> },
    { id: 'products', label: 'Products', path: '/products' },
    { id: 'blog', label: 'Blog', path: '/blog' },
    { id: 'about', label: 'About', path: '/about' },
  ];
  
  const handleNavigation = (itemId: string, path: string) => {
    setActiveTab(itemId);
    router.push(path);
  };
  
  return (
    <div className="flex justify-center items-center py-8 px-4">
      <nav className="bg-white rounded-full shadow-lg px-4 py-2 flex items-center justify-around min-w-[500px] sm:min-w-[600px] max-w-3xl">
        {navItems.map((item) => (
          <div key={item.id} className="relative flex-1 flex justify-center">
            {activeTab === item.id && (
              <div className="absolute inset-0 bg-green-200 rounded-full z-0 shadow-sm"></div>
            )}
            <button
              onClick={() => handleNavigation(item.id, item.path)}
              className={`flex items-center justify-center gap-2 px-6 py-3 font-medium text-base relative z-10 w-full ${
                activeTab === item.id ? 'text-black' : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              {activeTab === item.id && item.icon ? item.icon : null}
              {item.label}
            </button>
          </div>
        ))}
      </nav>
    </div>
  );
}