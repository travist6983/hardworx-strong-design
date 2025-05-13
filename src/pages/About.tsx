
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = "About Us - Hardworx Gym";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-20">
        {/* Hero Section */}
        <div className="relative bg-gym-black text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-40"></div>
          <div className="container mx-auto px-4 py-24 relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                About <span className="text-gym-red">Hardworx</span>
              </h1>
              <p className="text-xl mb-6">
                Building a stronger, healthier community one member at a time
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Our <span className="text-gym-red">Story</span>
              </h2>
              <p className="text-gray-600 mb-4">
                Hardworx Gym was founded with a simple mission: to create a welcoming, high-quality fitness environment where people of all fitness levels could pursue their health and wellness goals.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a small local gym has grown into a comprehensive fitness facility that combines state-of-the-art equipment, 24/7 access, and a supportive community atmosphere that helps our members achieve remarkable transformations.
              </p>
              <p className="text-gray-600">
                Today, Hardworx continues to evolve and expand our offerings, including our dedicated women's facility, to meet the diverse needs of our growing membership base. Our commitment to quality, service, and member success remains at the heart of everything we do.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Inside Hardworx Gym" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-5 -right-5 w-40 h-40 bg-gym-red rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Equipment */}
      <section className="py-16 bg-gym-lightgray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Our <span className="text-gym-red">Equipment</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We partner with industry-leading fitness equipment manufacturers to provide you with the best workout experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover-lift">
              <h3 className="text-xl font-bold mb-2">True Fitness</h3>
              <p className="text-gray-600">
                Premium cardio equipment designed for performance and durability
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover-lift">
              <h3 className="text-xl font-bold mb-2">Cybex</h3>
              <p className="text-gray-600">
                Science-based strength equipment for efficient workouts
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover-lift">
              <h3 className="text-xl font-bold mb-2">Hammer Strength</h3>
              <p className="text-gray-600">
                Performance training equipment built for serious athletes
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover-lift">
              <h3 className="text-xl font-bold mb-2">Muscle D Fitness</h3>
              <p className="text-gray-600">
                High-quality strength equipment for all fitness levels
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Hours Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Staff <span className="text-gym-red">Hours</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our facility is open 24/7 for members, with staff available during the following hours:
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-gym-black text-white rounded-t-lg overflow-hidden">
              <div className="p-4 text-center bg-gym-red">
                <h3 className="text-xl font-bold">Hours of Operation</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="border-b border-gray-700 pb-3">
                    <p className="font-semibold">Monday - Friday</p>
                    <p>8:00 AM - 8:00 PM</p>
                  </div>
                  <div className="border-b border-gray-700 pb-3">
                    <p className="font-semibold">Saturday</p>
                    <p>9:00 AM - 5:00 PM</p>
                  </div>
                  <div>
                    <p className="font-semibold">Sunday</p>
                    <p>10:00 AM - 3:00 PM</p>
                  </div>
                  <div>
                    <p className="font-semibold">24/7 Member Access</p>
                    <p>Always Available</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-b-lg border border-gray-200">
              <p className="text-center text-gray-600">
                <span className="font-semibold">Note:</span> Staff hours may vary on holidays. Member key cards provide 24/7 access 365 days a year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-gym-lightgray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Get In <span className="text-gym-red">Touch</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We'd love to hear from you! Contact us with any questions about our facility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gym-red">Contact Information</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-600">(586) 991-6554</p>
                </div>
                
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600">Hardworxgym@gmail.com</p>
                </div>
                
                <div>
                  <p className="font-semibold">Front Desk</p>
                  <p className="text-gray-600">(586) 262-4772</p>
                </div>
                
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-gray-600">
                    46663 Hayes Road<br />
                    Shelby Township, Michigan 48315<br />
                    United States
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.6477211562748!2d-83.0388761!3d42.6396713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824e44435415fe1%3A0x89e7a4a87d3b91cd!2s46663%20Hayes%20Rd%2C%20Shelby%20Charter%20Township%2C%20MI%2048315%2C%20USA!5e0!3m2!1sen!2sca!4v1621283721045!5m2!1sen!2sca" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: "300px" }}
                allowFullScreen
                loading="lazy"
                title="Hardworx Gym Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
      <Footer />
    </div>
  );
};

export default About;
