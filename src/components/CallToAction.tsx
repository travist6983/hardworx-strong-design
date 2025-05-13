
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gym-red">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Start Your Fitness Journey?
        </h2>
        <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
          Join Hardworx Gym today and get access to premium equipment, 24/7 facility access, and a supportive community.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button asChild size="lg" className="bg-white text-gym-red hover:bg-gray-100">
            <Link to="/membership">Become a Member</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gym-red">
            <Link to="/membership">Get a Day Pass</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
