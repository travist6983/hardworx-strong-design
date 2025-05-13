
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gym-black shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-white">
              HARD<span className="text-gym-red">WORX</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-white hover:text-gym-red transition-colors">Home</Link>
            <Link to="/membership" className="text-white hover:text-gym-red transition-colors">Membership</Link>
            <Link to="/womens-facility" className="text-white hover:text-gym-red transition-colors">All Women's Facility</Link>
            <Link to="/workout-plans" className="text-white hover:text-gym-red transition-colors">Workout Plans</Link>
            <Link to="/about" className="text-white hover:text-gym-red transition-colors">About</Link>
            <Link to="/faq" className="text-white hover:text-gym-red transition-colors">FAQ</Link>
            <Button variant="default" className="bg-gym-red hover:bg-red-600 text-white ml-4">
              Join Now
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-white hover:text-gym-red transition-colors py-2" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/membership" className="text-white hover:text-gym-red transition-colors py-2" onClick={() => setIsOpen(false)}>Membership</Link>
              <Link to="/womens-facility" className="text-white hover:text-gym-red transition-colors py-2" onClick={() => setIsOpen(false)}>All Women's Facility</Link>
              <Link to="/workout-plans" className="text-white hover:text-gym-red transition-colors py-2" onClick={() => setIsOpen(false)}>Workout Plans</Link>
              <Link to="/about" className="text-white hover:text-gym-red transition-colors py-2" onClick={() => setIsOpen(false)}>About</Link>
              <Link to="/faq" className="text-white hover:text-gym-red transition-colors py-2" onClick={() => setIsOpen(false)}>FAQ</Link>
              <Button variant="default" className="bg-gym-red hover:bg-red-600 text-white w-full">
                Join Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
