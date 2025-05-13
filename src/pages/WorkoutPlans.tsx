
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import CallToAction from "@/components/CallToAction";
import { Dumbbell, Activity, Calendar } from "lucide-react";
import { useEffect } from "react";

const WorkoutPlans = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = "Workout Plans & Programs - Hardworx Gym";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-20">
        {/* Hero Section */}
        <div className="relative bg-gym-black text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-40"></div>
          <div className="container mx-auto px-4 py-24 relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Workout <span className="text-gym-red">Plans & Programs</span>
              </h1>
              <p className="text-xl mb-8">
                Customized training programs to help you achieve your fitness goals
              </p>
              <Button className="bg-gym-red hover:bg-red-600 text-white px-8 py-6">
                Explore Our Programs
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* App Tracking Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-4">
                Track Your <span className="text-gym-red">Progress</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                With the HardWorx App, you can track your workouts and monitor your progress over time.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-gym-red p-2 rounded-full mr-4">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Workout Scheduling</h3>
                    <p className="text-gray-600">Plan and schedule your workouts in advance</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gym-red p-2 rounded-full mr-4">
                    <Activity className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Progress Tracking</h3>
                    <p className="text-gray-600">Monitor your improvements and celebrate milestones</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gym-red p-2 rounded-full mr-4">
                    <Dumbbell className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Exercise Library</h3>
                    <p className="text-gray-600">Access a comprehensive database of exercises</p>
                  </div>
                </div>
              </div>
              
              <Button className="mt-8 bg-gym-red hover:bg-red-600 text-white">
                Download the App
              </Button>
            </div>
            
            <div className="order-1 md:order-2 relative">
              <img 
                src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Mobile app tracking workout progress" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-5 -left-5 w-40 h-40 bg-gym-red rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Workout Plans Section */}
      <section className="py-16 bg-gym-lightgray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Our <span className="text-gym-red">Workout Plans</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our variety of workout plans designed for different fitness goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover-lift">
              <div className="h-48 bg-gym-red flex items-center justify-center">
                <Dumbbell className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Strength Building</h3>
                <p className="text-gray-600 mb-4">
                  Focus on building muscle mass and increasing overall strength with our comprehensive strength training program.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-gym-red rounded-full mr-2"></span>
                    <span>Progressive resistance training</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-gym-red rounded-full mr-2"></span>
                    <span>Compound movement focus</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-gym-red rounded-full mr-2"></span>
                    <span>Nutrition guidance included</span>
                  </li>
                </ul>
                <Button className="w-full bg-gym-red hover:bg-red-600 text-white">
                  Learn More
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover-lift">
              <div className="h-48 bg-gym-black flex items-center justify-center">
                <Activity className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Weight Loss</h3>
                <p className="text-gray-600 mb-4">
                  Designed to help you burn calories, increase metabolism, and achieve sustainable weight loss results.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-gym-red rounded-full mr-2"></span>
                    <span>Cardio and HIIT training</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-gym-red rounded-full mr-2"></span>
                    <span>Circuit-based workouts</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-gym-red rounded-full mr-2"></span>
                    <span>Calorie-deficit guidance</span>
                  </li>
                </ul>
                <Button className="w-full bg-gym-red hover:bg-red-600 text-white">
                  Learn More
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover-lift">
              <div className="h-48 bg-gym-red flex items-center justify-center">
                <Calendar className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">General Fitness</h3>
                <p className="text-gray-600 mb-4">
                  A balanced approach to fitness that improves cardiovascular health, strength, and flexibility.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-gym-red rounded-full mr-2"></span>
                    <span>Balanced workout routine</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-gym-red rounded-full mr-2"></span>
                    <span>Cardio and strength combined</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-gym-red rounded-full mr-2"></span>
                    <span>Flexibility and mobility work</span>
                  </li>
                </ul>
                <Button className="w-full bg-gym-red hover:bg-red-600 text-white">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Training Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1579758629938-03607ccdbaba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Personal trainer working with client" 
                className="rounded-lg shadow-lg"
              />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Personal <span className="text-gym-red">Training</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Take your fitness to the next level with personalized guidance from our certified personal trainers.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="p-4 border-l-4 border-gym-red bg-gray-50">
                  <h3 className="font-semibold">Customized Programming</h3>
                  <p className="text-gray-600">Workouts designed specifically for your goals and fitness level</p>
                </div>
                
                <div className="p-4 border-l-4 border-gym-red bg-gray-50">
                  <h3 className="font-semibold">Form Correction</h3>
                  <p className="text-gray-600">Ensure proper technique to prevent injuries and maximize results</p>
                </div>
                
                <div className="p-4 border-l-4 border-gym-red bg-gray-50">
                  <h3 className="font-semibold">Accountability</h3>
                  <p className="text-gray-600">Stay motivated with scheduled sessions and progress tracking</p>
                </div>
              </div>
              
              <Button className="bg-gym-red hover:bg-red-600 text-white">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
      <Footer />
    </div>
  );
};

export default WorkoutPlans;
