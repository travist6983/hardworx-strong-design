
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const MembershipSection = () => {
  const memberships = [
    {
      title: "Monthly Membership",
      price: "$79",
      period: "per month",
      features: [
        "24/7 Access to the Facility",
        "Access to the HardWorx App",
        "Track Workouts and Progress",
        "Recurring Membership"
      ],
      cta: "Sign Up Today",
      highlighted: false
    },
    {
      title: "12 Month Paid In Full",
      price: "$899",
      period: "save $49",
      features: [
        "24/7 Access to the Facility",
        "Access to the HardWorx App",
        "Track Workouts and Progress",
        "Best Value Annual Payment"
      ],
      cta: "Sign Up & Save",
      highlighted: true
    },
    {
      title: "4 Month Paid In Full",
      price: "$400",
      period: "4 months",
      features: [
        "24/7 Access to the Facility",
        "Access to the HardWorx App",
        "Track Workouts and Progress",
        "No Long-Term Commitment"
      ],
      cta: "Sign Up Today",
      highlighted: false
    }
  ];

  return (
    <section className="py-20 bg-gym-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Membership <span className="text-gym-red">Plans</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Choose the plan that fits your fitness journey and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {memberships.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2 ${
                plan.highlighted 
                  ? 'bg-gym-red text-white border-2 border-gym-red' 
                  : 'bg-gym-darkgray text-white'
              }`}
            >
              <div className="p-8">
                <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                <div className="flex items-end mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-sm ml-2 opacity-80">{plan.period}</span>
                </div>
                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-5 w-5 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild 
                  className={`w-full py-6 font-semibold ${
                    plan.highlighted 
                      ? 'bg-white text-gym-red hover:bg-gray-100' 
                      : 'bg-gym-red text-white hover:bg-red-600'
                  }`}
                >
                  <Link to="/membership">{plan.cta}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;
