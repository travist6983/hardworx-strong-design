
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What are your hours of operation?",
    answer: "We are open 24/7 for HardWorx Members. If you would like to see our Staff Hours, please click the \"About Us\" Tab."
  },
  {
    question: "What type of equipment do you offer?",
    answer: "We offer cardio equipment, pin, and plate loaded machines. We also offer a variety of Free Weights. We offer Equipment from 4 Different Companies: True Fitness, Cybex, Hammer Strength, Arsenal, & Muscle D Fitness Equipment."
  },
  {
    question: "Do you have locker rooms and showers?",
    answer: "We have a large space of lockers for all members. We have 3 restrooms with a shower in each restroom. We have 1 changing room as well."
  },
  {
    question: "What is the guest policy?",
    answer: "Members may bring Guests for Visits and Trials during STAFFED HOURS ONLY. There are NO Guests allowed in the Facility under any circumstances during Non-Staffed Hours."
  }
];

const FaqSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="text-gym-red">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our facility and services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
