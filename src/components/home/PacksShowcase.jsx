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
    logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693af3db20c38c22bc69519e/96ec786ab_freepack.png",
    page: "FreePack"
  },
  {
    id: "max",
    logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693af3db20c38c22bc69519e/7796dc67d_propack.png",
    page: "MaxPack"
  },
  {
    id: "mad-midi",
    logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693af3db20c38c22bc69519e/c6850e68d_madmidimachines.png",
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packs.map((pack, index) => (
            <motion.div
              key={pack.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link to={createPageUrl(pack.page)}>
                <Card className="group bg-gray-900/50 border-gray-800/50 overflow-hidden hover:border-gray-700 hover:scale-105 transition-all duration-300 h-full">
                  <CardContent className="p-8 flex items-center justify-center">
                    <img 
                      src={pack.logo} 
                      alt={pack.id}
                      className="w-full h-auto"
                    />
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}