import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  ArrowLeft, 
  ShoppingCart, 
  Download, 
  Play, 
  ChevronLeft, 
  ChevronRight,
  Check,
  Monitor,
  ExternalLink
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { data: product, isLoading } = useQuery({
    queryKey: ["product", productId],
    queryFn: async () => {
      const products = await base44.entities.Product.filter({ id: productId });
      return products[0];
    },
    enabled: !!productId,
  });

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Skeleton className="h-8 w-32 mb-6 bg-gray-800" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Skeleton className="aspect-video rounded-xl bg-gray-800" />
          <div className="space-y-4">
            <Skeleton className="h-10 w-3/4 bg-gray-800" />
            <Skeleton className="h-6 w-1/4 bg-gray-800" />
            <Skeleton className="h-24 w-full bg-gray-800" />
            <Skeleton className="h-12 w-40 bg-gray-800" />
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-2xl font-bold text-white mb-4">Product Not Found</h1>
        <p className="text-gray-400 mb-8">The product you're looking for doesn't exist.</p>
        <Link to={createPageUrl("Products")}>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Button>
        </Link>
      </div>
    );
  }

  const images = product.images?.length > 0 
    ? product.images 
    : ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back button */}
        <Link 
          to={createPageUrl("Products")}
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <div>
            <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-900 border border-gray-800">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={images[currentImageIndex]}
                  alt={product.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>

                  {/* Dots */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentImageIndex(i)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          i === currentImageIndex ? "bg-white" : "bg-white/40"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImageIndex(i)}
                    className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-colors ${
                      i === currentImageIndex ? "border-blue-500" : "border-transparent"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {product.is_free && (
                <Badge className="bg-green-500 text-white border-0">FREE</Badge>
              )}
              {product.category && (
                <Badge variant="secondary" className="bg-gray-800 text-gray-200 border-0 capitalize">
                  {product.category}
                </Badge>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {product.name}
            </h1>

            {!product.is_free && product.price > 0 && (
              <div className="text-3xl font-bold text-blue-400 mb-6">
                ${product.price}
              </div>
            )}

            <p className="text-gray-300 text-lg mb-8">
              {product.description || product.short_description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              {product.is_free && product.download_url ? (
                <a href={product.download_url} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    <Download className="w-5 h-5 mr-2" />
                    Download Free
                  </Button>
                </a>
              ) : (
                <Link to={createPageUrl("HowToBuy")}>
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Buy Now
                  </Button>
                </Link>
              )}
              
              {product.video_url && (
                <a href={product.video_url} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </Button>
                </a>
              )}
            </div>

            {/* Tabs */}
            <Tabs defaultValue="features" className="w-full">
              <TabsList className="bg-gray-900 border-gray-800">
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="requirements">Requirements</TabsTrigger>
              </TabsList>
              
              <TabsContent value="features" className="mt-4">
                {product.features?.length > 0 ? (
                  <ul className="space-y-3">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400">No features listed.</p>
                )}
              </TabsContent>
              
              <TabsContent value="requirements" className="mt-4">
                <Card className="bg-gray-900/50 border-gray-800">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Monitor className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-300">
                        {product.requirements || "Kontakt 6.2+ (Full version) or compatible host software."}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}