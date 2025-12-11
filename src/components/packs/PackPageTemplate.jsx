import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import ProductGrid from "../products/ProductGrid";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Check, ShoppingCart, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function PackPageTemplate({ 
  packId,
  name, 
  description, 
  icon: Icon, 
  color, 
  price, 
  isFree = false,
  features = [],
  downloadUrl
}) {
  const { data: products, isLoading } = useQuery({
    queryKey: ["pack-products", packId],
    queryFn: () => base44.entities.Product.filter({ pack: packId, is_active: true }, "display_order"),
    initialData: [],
  });

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className={`bg-gradient-to-b ${color.replace('from-', 'from-').replace('to-', 'to-')}/10 to-gray-950 border-b border-gray-800/50`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link 
            to={createPageUrl("Packs")}
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            All Packs
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-6`}>
                <Icon className="w-10 h-10 text-white" />
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <h1 className="text-4xl sm:text-5xl font-bold text-white">
                  {name}
                </h1>
                {isFree && (
                  <Badge className="bg-green-500 text-white border-0 text-lg px-3 py-1">
                    FREE
                  </Badge>
                )}
              </div>
              
              {!isFree && (
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                  {price}
                </div>
              )}
              
              <p className="text-gray-300 text-lg mb-8">
                {description}
              </p>

              <div className="flex flex-wrap gap-4">
                {isFree && downloadUrl ? (
                  <a href={downloadUrl} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-green-600 hover:bg-green-700">
                      <Download className="w-5 h-5 mr-2" />
                      Download Free
                    </Button>
                  </a>
                ) : (
                  <Link to={createPageUrl("HowToBuy")}>
                    <Button size="lg" className={`bg-gradient-to-r ${color}`}>
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Buy Now
                    </Button>
                  </Link>
                )}
              </div>
            </div>

            {/* Features Card */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">What's Included</h3>
                <ul className="space-y-3">
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Products in Pack */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-white mb-8">
          Products in this Pack ({products.length})
        </h2>
        <ProductGrid products={products} isLoading={isLoading} />
      </div>
    </div>
  );
}