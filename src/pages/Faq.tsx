
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CallToAction from "@/components/CallToAction";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Faq = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = "Frequently Asked Questions - Hardworx Gym";
  }, []);

  const faqs = [
    {
      category: "Membership",
      questions: [
        {
          question: "What types of memberships do you offer?",
          answer: "We offer monthly recurring memberships for $79/month, 12-month paid in full memberships for $899 (save $49), and 4-month paid in full memberships for $400. All memberships include 24/7 access and use of the HardWorx app."
        },
        {
          question: "Is there a signup fee?",
          answer: "There may be a one-time signup fee for new members. We frequently run promotions that waive this fee. Contact our staff for current offers."
        },
        {
          question: "Can I cancel my membership at any time?",
          answer: "Monthly memberships require a 30-day written notice for cancellation. Paid-in-full memberships run for their full term and are non-refundable."
        },
        {
          question: "Do you offer a free trial?",
          answer: "Yes, we offer free day passes for potential members. Visit our facility during staffed hours or contact us to arrange your free day pass."
        }
      ]
    },
    {
      category: "Facility",
      questions: [
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
      ]
    },
    {
      category: "Services",
      questions: [
        {
          question: "Do you offer personal training?",
          answer: "Yes, we offer personal training services with certified trainers. Rates vary depending on the package and trainer. Please inquire at the front desk for more information."
        },
        {
          question: "What is the HardWorx App?",
          answer: "The HardWorx App is our fitness tracking application available to all members. You can track workouts, monitor progress, access exercise libraries, and schedule sessions."
        },
        {
          question: "Do you provide nutrition guidance?",
          answer: "Yes, we offer basic nutrition guidance as part of our personal training packages. For more specialized nutrition plans, we can recommend registered dietitians in the area."
        },
        {
          question: "Is there a women's only area?",
          answer: "Yes, we have a dedicated women's only facility. Please see our Women's Facility page for more information about this specialized space."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-20">
        {/* Hero Section */}
        <div className="bg-gym-black text-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Frequently Asked <span className="text-gym-red">Questions</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Find answers to common questions about our facilities, memberships, and services.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <p className="text-gray-600 text-center">
                Can't find the answer you're looking for? Contact us at{" "}
                <a href="mailto:Hardworxgym@gmail.com" className="text-gym-red hover:underline">
                  Hardworxgym@gmail.com
                </a>
                {" "}or call us at{" "}
                <a href="tel:+15869916554" className="text-gym-red hover:underline">
                  (586) 991-6554
                </a>
              </p>
            </div>

            {faqs.map((category, idx) => (
              <div key={idx} className="mb-12">
                <h2 className="text-2xl font-bold mb-6 border-b-2 border-gym-red pb-2">
                  {category.category}
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, index) => (
                    <AccordionItem key={index} value={`${category.category}-item-${index}`}>
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
            ))}

            <div className="mt-12 text-center">
              <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
              <p className="text-gray-600 mb-6">
                We're happy to help! Reach out to us or visit our facility during staff hours.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button asChild className="bg-gym-red hover:bg-red-600 text-white">
                  <Link to="/about">Contact Us</Link>
                </Button>
                <Button asChild variant="outline" className="border-gym-red text-gym-red hover:bg-gym-red hover:text-white">
                  <Link to="/membership">View Memberships</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
      <Footer />
    </div>
  );
};

export default Faq;
