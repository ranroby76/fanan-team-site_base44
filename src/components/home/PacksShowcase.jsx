import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Package, Gift, Crown, Zap, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const packs = [
  {
    id: "free",
    name: "Free Pack",
    description: "Get started with our free collection of tools and instruments",
    icon: Gift,
    color: "from-green-500 to-emerald-600",
    badge: "Free",
    badgeColor: "bg-green-500",
    page: "FreePack"
  },
  {
    id: "pro",
    name: "Pro Pack",
    description: "Professional grade instruments for serious producers",
    icon: Package,
    color: "from-blue-500 to-cyan-600",
    badge: "Popular",
    badgeColor: "bg-blue-500",
    page: "ProPack"
  },
  {
    id: "max",
    name: "Max Pack",
    description: "The complete collection with all our premium products",
    icon: Crown,
    color: "from-purple-500 to-pink-600",
    badge: "Best Value",
    badgeColor: "bg-purple-500",
    page: "MaxPack"
  },
  {
    id: "mad-midi",
    name: "Mad MIDI Machine",
    description: "Creative MIDI generators and sequencing tools",
    icon: Zap,
    color: "from-orange-500 to-red-600",
    badge: "Creative",
    badgeColor: "bg-orange-500",
    page: "MadMidiPack"
  }
];

export default function PacksShowcase() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900/50 to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Product Packs
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Save more with our bundled collections - get multiple products at a discounted price
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {packs.map((pack, index) => {
            const Icon = pack.icon;
            return (
              <motion.div
                key={pack.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link to={createPageUrl(pack.page)}>
                  <Card className="group bg-gray-900/50 border-gray-800/50 overflow-hidden hover:border-gray-700 transition-all duration-300 h-full">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${pack.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                            {pack.name}
                          </h3>
                          <Badge className={`${pack.badgeColor} text-white border-0 text-xs`}>
                            {pack.badge}
                          </Badge>
                        </div>
                        <p className="text-gray-400 text-sm mb-4">
                          {pack.description}
                        </p>
                        <div className="flex items-center text-blue-400 text-sm font-medium">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}