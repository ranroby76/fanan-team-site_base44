import React, { useState, useMemo } from "react";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import ProductGrid from "../components/products/ProductGrid";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, X } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  { id: "all", label: "All Products" },
  { id: "kontakt", label: "Kontakt" },
  { id: "midi", label: "MIDI Tools" },
  { id: "synth", label: "Synths" },
  { id: "utility", label: "Utilities" },
  { id: "effect", label: "Effects" },
];

export default function Products() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showFreeOnly, setShowFreeOnly] = useState(false);

  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => base44.entities.Product.filter({ is_active: true }, "display_order"),
    initialData: [],
  });

  const filteredProducts = useMemo(() => {
    let result = products;

    // Search filter
    if (search) {
      const searchLower = search.toLowerCase();
      result = result.filter(p => 
        p.name?.toLowerCase().includes(searchLower) ||
        p.description?.toLowerCase().includes(searchLower) ||
        p.short_description?.toLowerCase().includes(searchLower)
      );
    }

    // Category filter
    if (selectedCategory !== "all") {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Free filter
    if (showFreeOnly) {
      result = result.filter(p => p.is_free);
    }

    return result;
  }, [products, search, selectedCategory, showFreeOnly]);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-b from-gray-900/80 to-gray-950 border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              All Products
            </h1>
            <p className="text-gray-400 max-w-2xl">
              Browse our complete collection of Kontakt libraries, MIDI tools, and music production utilities.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="mb-8 space-y-4">
          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 bg-gray-900/50 border-gray-800 text-white placeholder:text-gray-500"
            />
            {search && (
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-1 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                onClick={() => setSearch("")}
              >
                <X className="w-4 h-4" />
              </Button>
            )}
          </div>

          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={selectedCategory === cat.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(cat.id)}
                className={selectedCategory === cat.id 
                  ? "bg-blue-600 hover:bg-blue-700 text-white" 
                  : "border-gray-700 text-gray-400 hover:text-white hover:bg-gray-800"
                }
              >
                {cat.label}
              </Button>
            ))}
            
            <div className="h-6 w-px bg-gray-700 mx-2" />
            
            <Button
              variant={showFreeOnly ? "default" : "outline"}
              size="sm"
              onClick={() => setShowFreeOnly(!showFreeOnly)}
              className={showFreeOnly 
                ? "bg-green-600 hover:bg-green-700 text-white" 
                : "border-gray-700 text-gray-400 hover:text-white hover:bg-gray-800"
              }
            >
              Free Only
            </Button>
          </div>

          {/* Results count */}
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>{filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found</span>
            {(search || selectedCategory !== "all" || showFreeOnly) && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSearch("");
                  setSelectedCategory("all");
                  setShowFreeOnly(false);
                }}
                className="text-blue-400 hover:text-blue-300 h-auto p-0"
              >
                Clear filters
              </Button>
            )}
          </div>
        </div>

        {/* Products Grid */}
        <ProductGrid products={filteredProducts} isLoading={isLoading} />
      </div>
    </div>
  );
}