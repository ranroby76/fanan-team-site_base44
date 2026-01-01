import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative">
      {/* Hero Banner */}
      <div className="relative w-full">
        <img 
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693af3db20c38c22bc69519e/465a40858_SITETOP.png" 
          alt="Welcome to fanan"
          className="w-full h-auto"
        />
      </div>

      {/* Notice Boxes */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <div className="bg-gradient-to-r from-yellow-900/40 to-orange-900/40 border border-yellow-700/50 rounded-lg p-4 text-center">
            <p className="text-yellow-200 font-medium">
              New to fanan team? Please, always read the "how to buy?" instructions before purchasing
            </p>
          </div>
          <div className="bg-gradient-to-r from-yellow-900/40 to-orange-900/40 border border-yellow-700/50 rounded-lg p-4 text-center">
            <p className="text-yellow-200">
              New folks, please, Always try the demo first before purchasing. Never buy before first testing a demo on your system
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}