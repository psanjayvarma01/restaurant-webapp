import { Link } from "react-router";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-serif italic text-amber-500 mb-4">Kridhani's Kitchen</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Experience culinary excellence with dishes crafted from the finest ingredients,
              served in an elegant atmosphere.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-amber-500 text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-400 hover:text-amber-500 text-sm transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-amber-500 text-sm transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/reservations" className="text-gray-400 hover:text-amber-500 text-sm transition-colors">
                  Reservations
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>123 Culinary Street, Gourmet City, GC 12345</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Phone size={16} className="flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Mail size={16} className="flex-shrink-0" />
                <span>info@kridhanskitchen.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4">Hours</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex justify-between">
                <span>Monday - Thursday</span>
                <span>11am - 10pm</span>
              </li>
              <li className="flex justify-between">
                <span>Friday - Saturday</span>
                <span>11am - 11pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>10am - 9pm</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2026 Kridhani's Kitchen Restaurant. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}