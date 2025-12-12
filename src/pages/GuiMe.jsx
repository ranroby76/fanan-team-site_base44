import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench } from "lucide-react";
import { motion } from "framer-motion";

export default function GuiMe() {
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
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
              <Wrench className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              GUI-Me
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Custom GUI design service for your Kontakt instruments
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="bg-gray-900/50 border-gray-800">
          <CardContent className="p-8">
            <p className="text-gray-300 text-lg text-center">
              GUI-Me content coming soon. This page will feature our custom GUI design services.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}