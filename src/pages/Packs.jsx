import React from "react";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import { Gift, Star, Cog, List } from "lucide-react";
import { motion } from "framer-motion";

const packConfigs = [
  {
    id: "free",
    name: "Free Pack",
    icon: Gift,
    iconColor: "text-yellow-400"
  },
  {
    id: "max",
    name: "Max! Pack",
    icon: Star,
    iconColor: "text-yellow-400"
  },
  {
    id: "mad-midi",
    name: "Mad MIDI Machines Pack",
    icon: Cog,
    iconColor: "text-yellow-400"
  }
];

export default function Packs() {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products-packs"],
    queryFn: () => base44.entities.Product.filter({ is_active: true }, "display_order"),
    initialData: [],
  });

  // Group products by pack
  const productsByPack = products.reduce((acc, product) => {
    const packId = product.pack || "free";
    if (!acc[packId]) acc[packId] = [];
    acc[packId].push(product);
    return acc;
  }, {});

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
            <div className="flex items-center justify-center gap-3 mb-4">
              <List className="w-8 h-8 text-yellow-400" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Plugin Packs List
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover what's inside each of our bundles.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6">
          {packConfigs.map((pack, index) => {
            const Icon = pack.icon;
            const packProducts = productsByPack[pack.id] || [];
            
            return (
              <motion.div
                key={pack.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-lg p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className={`w-6 h-6 ${pack.iconColor}`} />
                  <h2 className="text-xl font-bold text-yellow-400">
                    {pack.name}
                  </h2>
                </div>
                
                {packProducts.length > 0 ? (
                  <p className="text-gray-300 leading-relaxed">
                    {packProducts.map((product, i) => (
                      <span key={product.id}>
                        {product.name}
                        {i < packProducts.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </p>
                ) : (
                  <p className="text-gray-500 italic">No products in this pack yet</p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}