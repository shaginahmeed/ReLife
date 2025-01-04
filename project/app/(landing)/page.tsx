"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowRight, Dumbbell, Heart, Shield, Trophy } from "lucide-react";

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#1a1b1e]">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Transform Your Body,
            <span className="text-yellow-400"> Transform Your Life</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Your personal AI-powered fitness companion for a stronger, healthier you
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/muscle-builder")}
            className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 mx-auto"
          >
            Get Started <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Why Choose Our Platform?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Dumbbell,
                title: "Custom Workouts",
                description: "Personalized exercise plans tailored to your goals"
              },
              {
                icon: Shield,
                title: "Expert Guidance",
                description: "Professional training techniques and form guidance"
              },
              {
                icon: Heart,
                title: "Health Tracking",
                description: "Monitor your progress and vital health metrics"
              },
              {
                icon: Trophy,
                title: "Goal Achievement",
                description: "Set and track your fitness milestones"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#141517] p-6 rounded-lg text-center"
              >
                <feature.icon className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-20 px-4 bg-[#141517]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Transform Your Physique
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&h=600&fit=crop",
              "https://images.unsplash.com/photo-1605296867424-35fc25c9212a?w=800&h=600&fit=crop",
              "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&h=600&fit=crop"
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative aspect-[4/3] rounded-lg overflow-hidden"
              >
                <img
                  src={image}
                  alt={`Fitness transformation ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}