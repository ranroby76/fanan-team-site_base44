import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function BuyNow() {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-b from-gray-900/80 to-gray-950 border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <ShoppingCart className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Buy Now
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Ready to purchase? Follow these simple steps
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Individual Products</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-4">
                Browse our collection and purchase individual Kontakt libraries and MIDI tools.
              </p>
              <Link to={createPageUrl("Products")}>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  View Products
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Product Packs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-4">
                Save money with our bundled packs. Get multiple products at a discounted price.
              </p>
              <Link to={createPageUrl("Packs")}>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  View Packs
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-blue-500/20">
          <CardContent className="p-8 text-center">
            <Mail className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              Need Help?
            </h3>
            <p className="text-gray-400 mb-6">
              Contact us if you have questions about purchasing or need assistance.
            </p>
            <Link to={createPageUrl("Contact")}>
              <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                Contact Us
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}