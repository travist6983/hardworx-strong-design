
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import CallToAction from "@/components/CallToAction";
import { useEffect } from "react";

const WomensFacility = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = "Women's Facility - Hardworx Gym";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-20">
        {/* Hero Section */}
        <div className="relative bg-gym-black text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-40"></div>
          <div className="container mx-auto px-4 py-24 relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Welcome to <span className="text-gym-red">Hardworx Women's Only</span>
              </h1>
              <p className="text-xl mb-8">
                Where Strong Women Thrive
              </p>
              <Button className="bg-gym-red hover:bg-red-600 text-white px-8 py-6">
                Join Our Women's Community
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              A Space <span className="text-gym-red">Created For Women</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our women's facility provides a comfortable, supportive environment where you can focus on your fitness goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-lg overflow-hidden shadow-lg hover-lift">
              <img 
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Women's workout area" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Women-Only Environment</h3>
                <p className="text-gray-600">
                  Train in a comfortable space dedicated exclusively to women, with equipment selected to meet women's specific fitness needs.
                </p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg hover-lift">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Supportive community" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Supportive Community</h3>
                <p className="text-gray-600">
                  Connect with like-minded women in a supportive atmosphere where you can feel confident and motivated.
                </p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg hover-lift">
              <img 
                src="https://images.unsplash.com/photo-1434682881908-b43d0467b798?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80" 
                alt="Specialized equipment" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Specialized Equipment</h3>
                <p className="text-gray-600">
                  Access to equipment specifically chosen to support women's fitness goals and training needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-16 bg-gym-lightgray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Facility <span className="text-gym-red">Amenities</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Our women's facility offers everything you need for a comfortable and effective workout experience. From clean locker rooms to specialized equipment, we've designed our space with your needs in mind.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-gym-red mr-2 mt-1" />
                  <div>
                    <h4 className="font-semibold">Private Locker Rooms</h4>
                    <p className="text-sm text-gray-600">With secure storage for your belongings</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-gym-red mr-2 mt-1" />
                  <div>
                    <h4 className="font-semibold">Clean Showers</h4>
                    <p className="text-sm text-gray-600">Refresh after your workout</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-gym-red mr-2 mt-1" />
                  <div>
                    <h4 className="font-semibold">Cardio Equipment</h4>
                    <p className="text-sm text-gray-600">Modern machines for effective workouts</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-gym-red mr-2 mt-1" />
                  <div>
                    <h4 className="font-semibold">Strength Training Area</h4>
                    <p className="text-sm text-gray-600">With weights suitable for all levels</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-gym-red mr-2 mt-1" />
                  <div>
                    <h4 className="font-semibold">24/7 Access</h4>
                    <p className="text-sm text-gray-600">Train on your schedule</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-gym-red mr-2 mt-1" />
                  <div>
                    <h4 className="font-semibold">Secure Environment</h4>
                    <p className="text-sm text-gray-600">With security systems for your safety</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                alt="Women's facility amenities" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-5 -right-5 w-40 h-40 bg-gym-red rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Success <span className="text-gym-red">Stories</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from women who have transformed their fitness journey at our facility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <p className="italic text-gray-600 mb-6">
                "I was intimidated by gyms before finding Hardworx Women's facility. The supportive environment and women-only space has helped me gain confidence, and I've made amazing progress in my fitness journey."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gym-red rounded-full flex items-center justify-center text-white font-bold">
                  JM
                </div>
                <div className="ml-4">
                  <p className="font-semibold">Jennifer M.</p>
                  <p className="text-sm text-gray-500">Member for 8 months</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <p className="italic text-gray-600 mb-6">
                "The women's facility at Hardworx has been a game-changer for me. I love the specialized equipment and the community of supportive women. I've lost 15 pounds and gained so much strength!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gym-red rounded-full flex items-center justify-center text-white font-bold">
                  TS
                </div>
                <div className="ml-4">
                  <p className="font-semibold">Tara S.</p>
                  <p className="text-sm text-gray-500">Member for 1 year</p>
                </div>
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

export default WomensFacility;
