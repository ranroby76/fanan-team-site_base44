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
    <div>
      <HeroSection />
      
      {/* Features Section */}
      <section className="py-16 border-y border-gray-800/50 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <FeaturedProducts products={products} isLoading={isLoading} />
      <PacksShowcase />

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl p-8 sm:p-12 border border-blue-500/20"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Create Amazing Music?
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Join thousands of producers who trust Fanan Team for their music production needs.
            </p>
            <a 
              href={createPageUrl("Products")}
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold transition-all shadow-lg shadow-blue-500/25"
            >
              Start Exploring
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}