import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import ProductGrid from "../products/ProductGrid";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturedProducts({ products, isLoading }) {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured Products
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our most popular Kontakt libraries and MIDI tools
          </p>
        </motion.div>

        <ProductGrid products={products?.slice(0, 8)} isLoading={isLoading} />

        <div className="text-center mt-12">
          <Link to={createPageUrl("Products")}>
            <Button 
              variant="outline" 
              size="lg"
              className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              View All Products
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}