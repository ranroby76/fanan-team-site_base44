import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function ProductCard({ product, index = 0 }) {
  const mainImage = product.images?.[0] || "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link to={createPageUrl(`ProductDetail?id=${product.id}`)}>
        <Card className="group bg-gray-900/50 border-gray-800/50 overflow-hidden hover:border-blue-500/50 transition-all duration-300 card-glow">
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={mainImage}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60" />
            
            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-wrap gap-2">
              {product.is_free && (
                <Badge className="bg-green-500/90 text-white border-0">
                  FREE
                </Badge>
              )}
              {product.category && (
                <Badge variant="secondary" className="bg-gray-800/90 text-gray-200 border-0 capitalize">
                  {product.category}
                </Badge>
              )}
            </div>

            {/* Price */}
            {!product.is_free && product.price > 0 && (
              <div className="absolute top-3 right-3">
                <Badge className="bg-blue-500/90 text-white border-0 text-sm font-semibold">
                  ${product.price}
                </Badge>
              </div>
            )}
          </div>

          <CardContent className="p-4">
            <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors line-clamp-1">
              {product.name}
            </h3>
            {product.short_description && (
              <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                {product.short_description}
              </p>
            )}
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}