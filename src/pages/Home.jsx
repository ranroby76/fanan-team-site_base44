import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import HeroSection from "../components/home/HeroSection";
import FeaturedProducts from "../components/home/FeaturedProducts";
import PacksShowcase from "../components/home/PacksShowcase";
import { motion } from "framer-motion";
import { Headphones, Cpu, Wand2, Clock } from "lucide-react";

export default function Home() {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products-featured"],
    queryFn: () => base44.entities.Product.filter({ is_active: true }, "-display_order", 8),
    initialData: [],
  });

  const features = [
    {
      icon: Headphones,
      title: "Professional Quality",
      description: "All instruments are meticulously crafted with pristine audio quality"
    },
    {
      icon: Cpu,
      title: "Easy Integration",
      description: "Works seamlessly with Kontakt and all major DAWs"
    },
    {
      icon: Wand2,
      title: "Creative Tools",
      description: "Unique MIDI generators to spark your creativity"
    },
    {
      icon: Clock,
      title: "Instant Delivery",
      description: "Download your purchases immediately after payment"
    }
  ];

  return (
    <div className="relative">
      {/* Colorful Background Bubbles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600 rounded-full blur-[150px] opacity-20" />
        <div className="absolute top-40 right-20 w-80 h-80 bg-green-500 rounded-full blur-[150px] opacity-20" />
        <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-orange-500 rounded-full blur-[150px] opacity-20" />
        <div className="absolute bottom-40 right-1/4 w-80 h-80 bg-red-500 rounded-full blur-[150px] opacity-20" />
      </div>

      <div className="relative z-10">
        <HeroSection />
        
        {/* Sales Banner */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://fananteam.com/images/A4.png"
                alt="Sales Season"
                className="w-full max-w-4xl mx-auto rounded-xl"
              />
              <h2 className="text-3xl font-bold text-white mt-6">
                WE BELIEVE EVERY SEASON IS SALES SEASON
              </h2>
            </motion.div>
          </div>
        </section>

        <PacksShowcase />

        {/* GUI Me Banner */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link to={createPageUrl("GuiMe")}>
                <img 
                  src="https://fananteam.com/images/A2.png"
                  alt="GUI Me"
                  className="w-full rounded-xl hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}