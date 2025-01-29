import { X, Coffee, FolderKanban, Video, User, Mail } from 'lucide-react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size for responsiveness
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const menuItems = [
    { icon: Coffee, text: 'Home', href: '/' },
    { icon: FolderKanban, text: 'Projects', href: '/projects' },
    { icon: Video, text: 'Videos', href: '/videos' },
    { icon: User, text: 'About', href: '/about' },
    { icon: Mail, text: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-black border-r border-gray-800 z-50 transform transition-transform duration-300 ease-in-out
          ${isMobile && !isOpen ? '-translate-x-full' : 'translate-x-0'}
          ${isMobile ? (isOpen ? 'w-64' : 'w-20') : 'w-64'}`}
      >
        <div className="flex flex-col h-full">
          {/* Close Button (Mobile Only) */}
          {isMobile && (
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
              onClick={toggleSidebar}
            >
              <X size={24} />
            </button>
          )}

          {/* Profile Section */}
          <div
            className={`flex items-center gap-3 mb-9 p-4 ${
              isMobile && !isOpen ? 'justify-center' : ''
            }`}
          >
            <img
              src="/img/DG.png"
              alt="Profile"
              className="w-12 h-12 rounded-full bg-purple-900 border-2 border-purple-900"
            />
            {(!isMobile || isOpen) && (
              <div>
                <h1 className="text-xl font-bold text-white">Debjit Goswami</h1>
                <p className="text-sm text-gray-400">Professional Partner</p>
              </div>
            )}
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {menuItems.map(({ icon: Icon, text, href }) => {
              const isActive = location.pathname === href; // Check if current path matches href
              return (
                <a
                  key={text}
                  href={href}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors
                    ${isActive
                      ? 'text-white bg-gray-800'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'}
                    ${isMobile && !isOpen ? 'justify-center' : ''}`}
                >
                  <Icon size={20} />
                  {(!isMobile || isOpen) && <span>{text}</span>}
                </a>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
