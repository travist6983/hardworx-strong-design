
import { Activity, Dumbbell, Users, Calendar } from 'lucide-react';

const features = [
  {
    icon: <Dumbbell className="h-10 w-10 text-gym-red" />,
    title: 'Premium Equipment',
    description: 'State-of-the-art equipment from True Fitness, Cybex, Hammer Strength, Arsenal, & Muscle D Fitness.'
  },
  {
    icon: <Activity className="h-10 w-10 text-gym-red" />,
    title: '24/7 Access',
    description: 'Train on your schedule with round-the-clock access for all members.'
  },
  {
    icon: <Users className="h-10 w-10 text-gym-red" />,
    title: "Women's Only Facility",
    description: 'A dedicated space where women can train comfortably and confidently.'
  },
  {
    icon: <Calendar className="h-10 w-10 text-gym-red" />,
    title: 'Fitness Tracking',
    description: 'Access the HardWorx App to track workouts and monitor your progress.'
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-gym-red">HARDWORX</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide everything you need to achieve your fitness goals in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover-lift"
            >
              <div className="mb-5">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
