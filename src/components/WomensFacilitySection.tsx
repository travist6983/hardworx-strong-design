
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const WomensFacilitySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Women's Only <span className="text-gym-red">Facility</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Welcome to Hardworx Women's Only: Where Strong Women Thrive
              </p>
              <p className="text-gray-600 mb-6">
                Our dedicated women's only facility provides a comfortable, supportive environment where women can focus on their fitness goals without distractions. With specialized equipment and programs designed specifically for women, we're committed to helping you achieve your fitness aspirations.
              </p>
              <Button asChild className="bg-gym-red hover:bg-red-600 text-white">
                <Link to="/womens-facility">Explore Women's Facility</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Women's Facility at Hardworx Gym" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 w-40 h-40 bg-gym-red rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WomensFacilitySection;
