import React from "react";
import { Glasses } from "lucide-react";
import { motion } from "framer-motion";

export default function GuiMe() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-200 border-b-2 border-yellow-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-start gap-4"
          >
            <Glasses className="w-12 h-12 text-gray-900 flex-shrink-0" />
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                GUI Me: Our Design Philosophy
              </h1>
              <p className="text-gray-800 text-lg">
                Crafting intuitive and inspiring user interfaces for your creative flow.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Design as desired */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-2xl font-bold text-yellow-400 mb-3">
              Design as desired
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Have you ever wanted to design your favorite plugin with your own imagination or maybe add in it a special dedication for someone you love? or maybe add some unique graphical characters of your own? Now you can.
            </p>
          </motion.section>

          {/* So, how it works? */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-yellow-400 mb-3">
              So, how it works?
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Fill the form below and send us a description of your idea and we'll try to think together with you what's best way to fulfill it. You'll get a quotation and once you are happy with it, your GUI-ME project is underway and gonna sent to you as a download link.
            </p>
          </motion.section>

          {/* What are the prices? */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-yellow-400 mb-3">
              What are the prices?
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Our policy is generally to keep the prices low as possible, but it depends the time that needed for applying everything. Starting price will be 30$.
            </p>
          </motion.section>

          {/* Feedback & Questions */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-yellow-400 mb-3">
              Feedback & Questions
            </h2>
            <p className="text-gray-300 leading-relaxed mb-2">
              We'd love to hear from you! Feel free to write to us about anything—whether you have feedback, questions, or just want to say hello.
            </p>
            <p className="text-gray-300">
              You can reach us at: <a href="mailto:fananteam@gmail.com" className="text-yellow-400 hover:text-yellow-300 underline">fananteam@gmail.com</a>
            </p>
          </motion.section>
        </div>
      </div>
    </div>
  );
}