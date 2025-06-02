import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X} from 'lucide-react';
// import { BarChart2 } from 'lucide-react';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'News', href: '/news' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            {/* <BarChart2 className="h-8 w-8 text-blue-600" /> */}
            <img src="/Asset/logodraft.svg" alt="Logo" width="48" height="48" />
            <span className="ml-2 text-xl font-bold text-gray-800">The Big4 Consultancy</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block py-2 text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;