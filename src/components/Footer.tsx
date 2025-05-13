
import { Link } from 'react-router-dom';
import { Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gym-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">HARD<span className="text-gym-red">WORX</span></h3>
            <p className="text-gray-300 mb-4">
              Join the Hardworx community today and transform your fitness journey with our state-of-the-art facilities and supportive environment.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61553431047525" target="_blank" rel="noopener noreferrer" 
                 className="hover:text-gym-red transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com/hardworxgym" target="_blank" rel="noopener noreferrer"
                 className="hover:text-gym-red transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-gym-red">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/membership" className="text-gray-300 hover:text-white transition-colors">Membership</Link></li>
              <li><Link to="/womens-facility" className="text-gray-300 hover:text-white transition-colors">Women's Facility</Link></li>
              <li><Link to="/workout-plans" className="text-gray-300 hover:text-white transition-colors">Workout Plans</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-gym-red">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="mr-3 mt-1 text-gym-red">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-gray-300">(586) 991-6554</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 text-gym-red">
                  <Mail size={18} />
                </div>
                <div>
                  <a href="mailto:Hardworxgym@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                    Hardworxgym@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 text-gym-red">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="text-gray-300">Open 24/7 for Members</p>
                  <p className="text-gray-300">Staff Hours: See About Page</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-gym-red">Location</h3>
            <p className="text-gray-300 mb-4">
              46663 Hayes Road<br />
              Shelby Township, Michigan 48315<br />
              United States
            </p>
            <p className="text-gray-300">
              Contact: (586) 262-4772
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Hardworx Gym. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
