
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-gym-black">
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1675&q=80')] 
        bg-cover bg-center"
        style={{ opacity: 0.6 }}
      ></div>
      
      <div className="container mx-auto px-4 z-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            PUSH YOUR <span className="text-gym-red">LIMITS</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            A state-of-the-art gym facility with 24/7 access and premium equipment for all your fitness needs.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button asChild size="lg" className="bg-gym-red hover:bg-red-600 text-white font-medium px-8 py-6">
              <Link to="/membership">Join Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gym-black transition-all px-8 py-6">
              <Link to="/membership">Get Free Day Pass</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
