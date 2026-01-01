import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { Input } from "@/components/ui/input";
import { CreditCard } from "lucide-react";
import { motion } from "framer-motion";

export default function BuyNow() {
  const [madMidiId, setMadMidiId] = useState("");
  const [maxPackId, setMaxPackId] = useState("");

  const packs = [
    {
      id: "mad-midi",
      name: "MAD MIDI MACHINES",
      logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693af3db20c38c22bc69519e/c6850e68d_madmidimachines.png",
      price: "$22.00",
      state: madMidiId,
      setState: setMadMidiId
    },
    {
      id: "max-pack",
      name: "MAX! PACK",
      logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693af3db20c38c22bc69519e/7796dc67d_propack.png",
      price: "$12.00",
      state: maxPackId,
      setState: setMaxPackId
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Banner */}
      <div className="relative w-full">
        <img 
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693af3db20c38c22bc69519e/699583712_A5.jpg"
          alt="Welcome to fanan store"
          className="w-full h-auto"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4" style={{
            textShadow: '2px 2px 8px rgba(0,0,0,0.8)',
            letterSpacing: '0.1em',
            WebkitTextStroke: '3px black'
          }}>
            WELCOME TO
          </h1>
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693af3db20c38c22bc69519e/2e6d2b68e_A6.png"
            alt="fanan store"
            className="w-64 sm:w-80 md:w-96 h-auto"
          />
        </div>
      </div>

      {/* Packs Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {packs.map((pack, index) => (
            <motion.div
              key={pack.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#1a1a1a] border border-gray-800 rounded-lg overflow-hidden"
            >
              {/* Pack Header */}
              <div className="p-6 text-center">
                <img 
                  src={pack.logo} 
                  alt={pack.name}
                  className="w-full max-w-md mx-auto mb-2"
                />
                <p className="text-4xl font-bold text-yellow-500">{pack.price}</p>
              </div>

              {/* Machine ID Section */}
              <div className="px-6 pb-4">
                <div className="bg-[#2a2a2a] border border-gray-700 rounded p-4 mb-3">
                  <p className="text-center text-gray-400 text-sm mb-2 font-semibold">
                    ENTER YOUR ID HERE FIRST!
                  </p>
                  <Input 
                    placeholder="enter your id here"
                    value={pack.state}
                    onChange={(e) => pack.setState(e.target.value)}
                    className="bg-black border-gray-700 text-white text-center placeholder:text-gray-600"
                  />
                  <p className="text-center text-gray-500 text-xs mt-2">
                    Find this in the plugin's "REGISTER" window.
                  </p>
                </div>

                {/* PayPal Buy Now Button */}
                <button className="w-full bg-[#ffc439] hover:bg-[#ffb710] text-gray-900 font-bold py-3 rounded mb-2 flex items-center justify-center gap-2 transition-colors">
                  <span className="text-[#003087] font-bold">Pay</span>
                  <span className="text-[#009cde] font-bold">Pal</span>
                  <span className="ml-2">Buy Now</span>
                </button>

                {/* Debit/Credit Card Button */}
                <button className="w-full bg-[#2a2a2a] hover:bg-[#333333] text-gray-300 font-semibold py-3 rounded border border-gray-700 flex items-center justify-center gap-2 transition-colors mb-3">
                  <CreditCard className="w-5 h-5" />
                  Debit or Credit Card
                </button>

                <p className="text-center text-xs text-gray-600 mb-2">Powered by PayPal</p>

                {/* Serial Number Section */}
                <div className="bg-[#2a2a2a] border border-yellow-700/30 rounded p-4">
                  <p className="text-center text-yellow-500 text-sm font-semibold mb-2">
                    Serial Number
                  </p>
                  <p className="text-center text-gray-500 text-xs">
                    Your serial will be sent to your email and shown here
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Text */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            Don't know what to do? Read the{" "}
            <Link to={createPageUrl("HowToBuy")} className="text-yellow-500 hover:text-yellow-400 underline">
              purchasing instructions
            </Link>{" "}
            page.
          </p>
        </div>
      </div>
    </div>
  );
}