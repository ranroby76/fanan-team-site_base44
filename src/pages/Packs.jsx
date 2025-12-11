import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Package, Gift, Crown, Zap, ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";

const packs = [
  {
    id: "free",
    name: "Free Pack",
    description: "Get started with our free collection of essential tools and instruments. Perfect for beginners and those wanting to try our products.",
    icon: Gift,
    color: "from-green-500 to-emerald-600",
    bgGlow: "bg-green-500/10",
    price: "Free",
    features: [
      "Randomidi Free - MIDI Generator",
      "Essential presets included",
      "Free updates",
      "Community support"
    ],
    page: "FreePack"
  },
  {
    id: "pro",
    name: "Pro Pack",
    description: "Professional grade instruments designed for serious music producers. Get access to our most popular Kontakt libraries.",
    icon: Package,
    color: "from-blue-500 to-cyan-600",
    bgGlow: "bg-blue-500/10",
    price: "$99",
    popular: true,
    features: [
      "10+ Premium Kontakt Libraries",
      "All synth instruments",
      "Lifetime license",
      "Priority support",
      "Free updates for life"
    ],
    page: "ProPack"
  },
  {
    id: "max",
    name: "Max Pack",
    description: "The complete Fanan Team collection. Everything we make, in one package. Best value for power users.",
    icon: Crown,
    color: "from-purple-500 to-pink-600",
    bgGlow: "bg-purple-500/10",
    price: "$199",
    features: [
      "All current products (40+)",
      "All future products included",
      "Exclusive bonus content",
      "VIP support channel",
      "Commercial license"
    ],
    page: "MaxPack"
  },
  {
    id: "mad-midi",
    name: "Mad MIDI Machine Pack",
    description: "Creative MIDI generators, sequencers, and arpeggiators. Spark your creativity with unique pattern generators.",
    icon: Zap,
    color: "from-orange-500 to-red-600",
    bgGlow: "bg-orange-500/10",
    price: "$49",
    features: [
      "All MIDI generator tools",
      "Randomidi Pro",
      "Pattern sequencers",
      "Arpeggiators",
      "Chord generators"
    ],
    page: "MadMidiPack"
  }
];

export default function Packs() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-b from-gray-900/80 to-gray-950 border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Product Packs
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Save more with our bundled collections. Get multiple products at a discounted price and unlock your creative potential.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {packs.map((pack, index) => {
            const Icon = pack.icon;
            return (
              <motion.div
                key={pack.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className={`relative bg-gray-900/50 border-gray-800/50 overflow-hidden h-full ${pack.popular ? 'ring-2 ring-blue-500/50' : ''}`}>
                  {pack.popular && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-blue-500 text-white border-0">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <div className={`absolute inset-0 ${pack.bgGlow} opacity-20`} />
                  
                  <CardHeader className="relative pb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pack.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-white">{pack.name}</CardTitle>
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {pack.price}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="relative space-y-6">
                    <p className="text-gray-400">{pack.description}</p>
                    
                    <ul className="space-y-3">
                      {pack.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-300">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Link to={createPageUrl(pack.page)}>
                      <Button 
                        className={`w-full bg-gradient-to-r ${pack.color} hover:opacity-90`}
                        size="lg"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}