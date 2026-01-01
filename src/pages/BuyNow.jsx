import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { Input } from "@/components/ui/input";
import { CreditCard } from "lucide-react";
import { motion } from "framer-motion";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { base44 } from "@/api/base44Client";
import { toast } from "sonner";

export default function BuyNow() {
  const [madMidiId, setMadMidiId] = useState("");
  const [maxPackId, setMaxPackId] = useState("");
  const [madMidiSerial, setMadMidiSerial] = useState("");
  const [maxPackSerial, setMaxPackSerial] = useState("");
  const [madMidiEmail, setMadMidiEmail] = useState("");
  const [maxPackEmail, setMaxPackEmail] = useState("");

  const packs = [
    {
      id: "mad-midi",
      name: "MAD MIDI MACHINES",
      logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693af3db20c38c22bc69519e/c6850e68d_madmidimachines.png",
      price: "22.00",
      displayPrice: "$22.00",
      state: madMidiId,
      setState: setMadMidiId,
      email: madMidiEmail,
      setEmail: setMadMidiEmail,
      serial: madMidiSerial,
      setSerial: setMadMidiSerial
    },
    {
      id: "max-pack",
      name: "MAX! PACK",
      logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693af3db20c38c22bc69519e/7796dc67d_propack.png",
      price: "12.00",
      displayPrice: "$12.00",
      state: maxPackId,
      setState: setMaxPackId,
      email: maxPackEmail,
      setEmail: setMaxPackEmail,
      serial: maxPackSerial,
      setSerial: setMaxPackSerial
    }
  ];

  return (
    <PayPalScriptProvider options={{ 
      clientId: "YOUR_LIVE_PAYPAL_CLIENT_ID",
      currency: "USD",
      intent: "capture"
    }}>
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
                <p className="text-4xl font-bold text-yellow-500">{pack.displayPrice}</p>
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
                    className="bg-black border-gray-700 text-white text-center placeholder:text-gray-600 mb-3"
                  />
                  <Input 
                    type="email"
                    placeholder="your email address"
                    value={pack.email}
                    onChange={(e) => pack.setEmail(e.target.value)}
                    className="bg-black border-gray-700 text-white text-center placeholder:text-gray-600"
                  />
                  <p className="text-center text-gray-500 text-xs mt-2">
                    Find the ID in the plugin's "REGISTER" window.
                  </p>
                </div>

                {/* PayPal Buttons */}
                <div className="mb-3">
                  {!pack.state || !pack.email ? (
                    <div className="bg-yellow-900/30 border border-yellow-700 rounded p-3 text-center">
                      <p className="text-yellow-400 text-sm">Please enter your Machine ID and email first</p>
                    </div>
                  ) : (
                    <PayPalButtons
                      style={{ layout: "vertical" }}
                      createOrder={async () => {
                        const response = await base44.functions.invoke('createPayPalOrder', {
                          packId: pack.id,
                          price: pack.price,
                          packName: pack.name,
                          machineId: pack.state,
                          email: pack.email
                        });

                        if (response?.data?.orderId) {
                          return response.data.orderId;
                        }

                        throw new Error('No order ID received from server');
                      }}
                      onApprove={async (data) => {
                        try {
                          const { data: result } = await base44.functions.invoke('capturePayPalOrder', {
                            orderId: data.orderID
                          });

                          if (result.success) {
                            pack.setSerial(result.serialNumber);
                            toast.success("Payment successful! Check your email for the serial number.");
                          }
                        } catch (error) {
                          toast.error("Payment processing failed");
                        }
                      }}
                      onError={(err) => {
                        toast.error("Payment error occurred");
                        console.error(err);
                      }}
                    />
                  )}
                </div>

                {/* Serial Number Section */}
                <div className="bg-[#2a2a2a] border border-yellow-700/30 rounded p-4">
                  <p className="text-center text-yellow-500 text-sm font-semibold mb-2">
                    Serial Number
                  </p>
                  {pack.serial ? (
                    <div className="bg-black border border-yellow-700 rounded p-3">
                      <p className="text-center text-yellow-400 font-mono text-sm break-all">
                        {pack.serial}
                      </p>
                    </div>
                  ) : (
                    <p className="text-center text-gray-500 text-xs">
                      Your serial will be sent to your email and shown here
                    </p>
                  )}
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
      </PayPalScriptProvider>
      );
      }