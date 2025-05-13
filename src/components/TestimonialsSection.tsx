
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Member since 2021',
    content: 'Since joining Hardworx, I've lost 30 pounds and gained so much confidence. The 24/7 access fits perfectly with my busy schedule, and the staff is always supportive!',
    rating: 5
  },
  {
    name: 'Mike Thompson',
    role: 'Member since 2020',
    content: 'The equipment quality at Hardworx is unmatched in the area. I\'ve been able to make consistent progress in my strength training thanks to their premium machines and free weights.',
    rating: 5
  },
  {
    name: 'Jennifer Lee',
    role: 'Member since 2022',
    content: 'As a woman, I appreciate the dedicated women\'s facility. It\'s such a comfortable environment to work out in, and I\'ve made great progress with my fitness goals.',
    rating: 5
  },
  {
    name: 'David Rodriguez',
    role: 'Member since 2019',
    content: 'The tracking app has been a game-changer for my fitness journey. Being able to monitor my progress keeps me motivated, and the 24/7 access means I can work out when it fits my schedule.',
    rating: 5
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 bg-gym-lightgray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-gym-red">Members</span> Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Read about the experiences of our community members at Hardworx Gym.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-lift">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-gym-red text-gym-red" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gym-black">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
