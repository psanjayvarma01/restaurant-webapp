import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/menu", label: "Menu" },
    { path: "/about", label: "About" },
    { path: "/reservations", label: "Reservations" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-serif italic text-amber-700">Kridhani's Kitchen</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm uppercase tracking-wider transition-colors ${
                  isActive(link.path)
                    ? "text-amber-700"
                    : "text-gray-700 hover:text-amber-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-amber-700"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-3 text-sm uppercase tracking-wider transition-colors ${
                  isActive(link.path)
                    ? "text-amber-700"
                    : "text-gray-700 hover:text-amber-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
