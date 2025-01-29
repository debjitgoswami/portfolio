import { Menu } from "lucide-react";
import PropTypes from "prop-types";

function Header({ toggleSidebar }) {
  return (
    <header className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-black border-b border-gray-800 px-4 flex items-center z-30">
      <button
        className="text-gray-400 hover:text-white"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        <Menu size={24} />
      </button>
    </header>
  );
}

// PropTypes for Validation
Header.propTypes = {
  toggleSidebar: PropTypes.func.isRequired, // Ensure the function is passed
};

export default Header;
