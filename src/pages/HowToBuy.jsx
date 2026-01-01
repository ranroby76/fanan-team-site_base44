import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { 
  HelpCircle, 
  Download, 
  Users, 
  ShoppingCart, 
  AlertTriangle, 
  Shield, 
  Smile 
} from "lucide-react";
import { motion } from "framer-motion";

export default function HowToBuy() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border-4 border-yellow-400 mb-6">
              <HelpCircle className="w-12 h-12 text-yellow-400" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-yellow-400 mb-4">
              Registration & Purchasing Guide
            </h1>
            <p className="text-gray-400 text-lg">
              Welcome! Here are some instructions that will help you use our new automatic system.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-0">
        {/* 1. Try the Demo First */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-gradient-to-br from-gray-900/70 to-gray-800/40 border-2 border-gray-700/50 rounded p-8"
        >
          <div className="flex items-start gap-6">
            <Download className="w-12 h-12 text-yellow-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-yellow-400 mb-1">
                1. Try the Demo First!
              </h2>
              <p className="text-gray-500 text-sm mb-4">Avoid the headache of regret.</p>
              <p className="text-gray-300 leading-relaxed">
                Don't buy anything before downloading and trying the demo or free edition first. Make sure you are pleased with the results. Our policy generally declines refunds after a serial has been provided, and that's why our demos are maximum-functional or include free editions.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 2. Select the Correct Bundle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-gradient-to-br from-gray-900/70 to-gray-800/40 border-2 border-gray-700/50 rounded p-8"
        >
          <div className="flex items-start gap-6">
            <Users className="w-12 h-12 text-yellow-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-yellow-400 mb-1">
                2. Select the Correct Bundle
              </h2>
              <p className="text-gray-500 text-sm mb-4">Ensure your desired plugin is in the chosen pack.</p>
              <div className="text-gray-300 leading-relaxed space-y-3">
                <p>
                  We've decreased the plugin bundles to 3. All the veteran plugins are now part of the same bundle called <strong className="text-yellow-400">"MAX!"</strong>.
                </p>
                <p>
                  If you're an existing customer and you've already bought at least one bundle from us before (at any price), you can use your old serial number, and it will unlock the "MAX!" bundle completely.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3. The Purchasing Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="bg-gradient-to-br from-gray-900/70 to-gray-800/40 border-2 border-gray-700/50 rounded p-8"
        >
          <div className="flex items-start gap-6">
            <ShoppingCart className="w-12 h-12 text-yellow-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-yellow-400 mb-1">
                3. The Purchasing Process
              </h2>
              <p className="text-gray-500 text-sm mb-4">From your DAW to your email.</p>
              <p className="text-gray-300 mb-3">If you've decided which bundle you want to buy:</p>
              <ol className="list-decimal list-inside space-y-2 text-gray-300 leading-relaxed ml-2">
                <li>Download any plugin from your desired bundle and open it in your favorite DAW.</li>
                <li>Press the <strong className="text-yellow-400">"REGISTER"</strong> button on the plugin interface to get your unique <strong className="text-yellow-400">Machine ID</strong> number.</li>
                <li>Go to the <Link to={createPageUrl("BuyNow")} className="text-yellow-400 hover:text-yellow-300 underline">"Buy Now"</Link> page on our site.</li>
                <li>Enter your Machine ID into the text box that matches your chosen bundle (e.g., for "Callisto VSTi", use the "MAX!" bundle's ID box).</li>
                <li>Press <strong className="text-yellow-400">"BUY NOW"</strong> and complete the purchase.</li>
                <li>Once complete, you'll receive your purchase details and a matching <strong className="text-yellow-400">serial number</strong> in your email.</li>
                <li>Copy the serial number, go back to the opened plugin in your DAW, paste it, and press <strong className="text-yellow-400">"Save"</strong>.</li>
              </ol>
              <p className="text-gray-300 mt-4">
                Once at least one plugin is registered, the entire bundle becomes registered as well.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Important: License File Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="bg-gradient-to-br from-gray-900/70 to-gray-800/40 border-2 border-gray-700/50 rounded p-8"
        >
          <div className="flex items-start gap-6">
            <AlertTriangle className="w-12 h-12 text-yellow-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-yellow-400 mb-1">
                Important: License File Location
              </h2>
              <p className="text-gray-500 text-sm mb-4">Do not move the license file!</p>
              <p className="text-gray-300 leading-relaxed">
                Normally, pressing "save" will save the license file to the <code className="bg-gray-700/50 px-2 py-1 rounded text-yellow-400">C:\Fananteam</code> folder. Do not change the folder's location or transport the file elsewhere, or the registration will not work!
              </p>
            </div>
          </div>
        </motion.div>

        {/* Your Privacy is Our Priority */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="bg-gradient-to-br from-gray-900/70 to-gray-800/40 border-2 border-gray-700/50 rounded p-8"
        >
          <div className="flex items-start gap-6">
            <Shield className="w-12 h-12 text-yellow-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-yellow-400 mb-1">
                Your Privacy is Our Priority
              </h2>
              <p className="text-gray-500 text-sm mb-4">We respect the modesty of the individual.</p>
              <p className="text-gray-300 leading-relaxed">
                Fanan team will always ensure your privacy as a user. Our plugins never use your internet connection, nor do they use any registry files, tricks, or digital spies. Our new registration system focuses on ease of use and comfort, but above all, on privacy.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Have Fun & Get In Touch */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="bg-gradient-to-br from-gray-900/70 to-gray-800/40 border-2 border-gray-700/50 rounded p-8"
        >
          <div className="flex items-start gap-6">
            <Smile className="w-12 h-12 text-yellow-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-yellow-400 mb-1">
                Have Fun & Get In Touch
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Contact us for any additional information. We hope you enjoy our plugins!
              </p>
              <Link to={createPageUrl("Contact")}>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-lg transition-colors">
                  Contact Support
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}