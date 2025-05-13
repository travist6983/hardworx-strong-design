
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Membership = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = "Membership Plans - Hardworx Gym";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-20 bg-gym-black text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Membership <span className="text-gym-red">Plans</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the membership option that fits your fitness journey and goals.
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Find the Perfect <span className="text-gym-red">Plan</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              All memberships include 24/7 facility access and our fitness tracking app.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Monthly Plan */}
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 transition-transform duration-300 hover:-translate-y-2">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">Monthly Membership</h3>
                <div className="flex items-end mb-6">
                  <span className="text-4xl font-bold text-gym-red">$79</span>
                  <span className="text-sm ml-2 opacity-80">per month</span>
                </div>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-gym-red mr-2 flex-shrink-0" />
                    <span>24/7 Access to the Facility</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-gym-red mr-2 flex-shrink-0" />
                    <span>Access to the HardWorx App</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-gym-red mr-2 flex-shrink-0" />
                    <span>Track Workouts and Progress</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-gym-red mr-2 flex-shrink-0" />
                    <span>Recurring Monthly Payment</span>
                  </li>
                </ul>
                <Button className="w-full py-6 font-semibold bg-gym-red hover:bg-red-600 text-white">
                  Sign Up Today
                </Button>
              </div>
            </div>

            {/* Annual Plan */}
            <div className="rounded-xl overflow-hidden shadow-lg border-2 border-gym-red transition-transform duration-300 hover:-translate-y-2 relative">
              <div className="absolute top-0 right-0 bg-gym-red text-white py-1 px-4 text-sm font-semibold">
                BEST VALUE
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">12 Month Paid In Full</h3>
                <div className="flex items-end mb-6">
                  <span className="text-4xl font-bold text-gym-red">$899</span>
                  <span className="text-sm ml-2 opacity-80">save $49</span>
                </div>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-gym-red mr-2 flex-shrink-0" />
                    <span>24/7 Access to the Facility</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-gym-red mr-2 flex-shrink-0" />
                    <span>Access to the HardWorx App</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-gym-red mr-2 flex-shrink-0" />
                    <span>Track Workouts and Progress</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-gym-red mr-2 flex-shrink-0" />
                    <span>Best Value Annual Payment</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-gym-red mr-2 flex-shrink-0" />
                    <span className="font-semibold">Save $49 Compared to Monthly</span>
                  </li>
                </ul>
                <Button className="w-full py-6 font-semibold bg-gym-black hover:bg-gray-800 text-white">
                  Sign Up & Save
                </Button>
              </div>
            </div>

            {/* 4 Month Plan */}
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 transition-transform duration-300 hover:-translate-y-2">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">4 Month Paid In Full</h3>
                <div className="flex items-end mb-6">
                  <span className="text-4xl font-bold text-gym-red">$400</span>
                  <span className="text-sm ml-2 opacity-80">for 4 months</span>
                </div>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-gym-red mr-2 flex-shrink-0" />
                    <span>24/7 Access to the Facility</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-gym-red mr-2 flex-shrink-0" />
                    <span>Access to the HardWorx App</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-gym-red mr-2 flex-shrink-0" />
                    <span>Track Workouts and Progress</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-gym-red mr-2 flex-shrink-0" />
                    <span>No Long-Term Commitment</span>
                  </li>
                </ul>
                <Button className="w-full py-6 font-semibold bg-gym-red hover:bg-red-600 text-white">
                  Sign Up Today
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gym-lightgray">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Try Before You <span className="text-gym-red">Commit</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Not sure which plan is right for you? Get a free day pass to experience our facility.
            </p>
            <Button size="lg" className="bg-gym-red hover:bg-red-600 text-white">
              Get Your Free Day Pass
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Membership <span className="text-gym-red">FAQs</span>
            </h2>
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold mb-2">Is there a signup fee?</h3>
                <p className="text-gray-600">
                  There may be a one-time signup fee for new members. Please contact us or visit during staffed hours for current promotions that may waive this fee.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold mb-2">Can I freeze my membership?</h3>
                <p className="text-gray-600">
                  Yes, memberships can be frozen for medical reasons or extended travel. Please contact our staff to discuss your specific situation.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold mb-2">What is your cancellation policy?</h3>
                <p className="text-gray-600">
                  Monthly memberships require a 30-day written notice for cancellation. Paid-in-full memberships run for their full term and are non-refundable.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold mb-2">Do you offer personal training?</h3>
                <p className="text-gray-600">
                  Yes, we offer personal training services at additional costs. Please inquire at the front desk during staffed hours for rates and availability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gym-red text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Fitness Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join Hardworx Gym today and transform your health and fitness.
          </p>
          <Button size="lg" className="bg-white text-gym-red hover:bg-gray-100">
            Sign Up Now
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Membership;
