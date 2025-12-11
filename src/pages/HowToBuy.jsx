import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  CreditCard, 
  Mail, 
  Download, 
  CheckCircle, 
  ArrowRight,
  HelpCircle,
  MessageCircle
} from "lucide-react";
import { motion } from "framer-motion";

export default function HowToBuy() {
  const steps = [
    {
      number: 1,
      icon: CheckCircle,
      title: "Choose Your Product",
      description: "Browse our collection of Kontakt libraries and MIDI tools. Select individual products or save with our bundled packs."
    },
    {
      number: 2,
      icon: Mail,
      title: "Contact Us",
      description: "Send us a message through our contact form or email. Let us know which products you're interested in purchasing."
    },
    {
      number: 3,
      icon: CreditCard,
      title: "Make Payment",
      description: "We accept PayPal and various payment methods. You'll receive payment instructions via email."
    },
    {
      number: 4,
      icon: Download,
      title: "Download & Enjoy",
      description: "After payment confirmation, you'll receive download links for your products. Start creating amazing music!"
    }
  ];

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
              How to Buy
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Follow these simple steps to purchase our products and start creating amazing music.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="bg-gray-900/50 border-gray-800/50 h-full">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                        <span className="text-xl font-bold text-blue-400">{step.number}</span>
                      </div>
                      <CardTitle className="text-xl text-white">{step.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl p-8 sm:p-12 border border-blue-500/20"
        >
          <HelpCircle className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Browse our products or contact us directly if you have any questions about purchasing.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={createPageUrl("Products")}>
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500">
                Browse Products
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to={createPageUrl("Contact")}>
              <Button size="lg" variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                <MessageCircle className="w-4 h-4 mr-2" />
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "What payment methods do you accept?",
                a: "We accept PayPal, credit cards, and bank transfers. Contact us for specific payment options."
              },
              {
                q: "How long until I receive my products?",
                a: "Once payment is confirmed, you'll receive download links within 24 hours (usually much faster)."
              },
              {
                q: "Do you offer refunds?",
                a: "Due to the digital nature of our products, we don't offer refunds. Please try our free products first!"
              },
              {
                q: "Can I use the products commercially?",
                a: "Yes! All our products come with a license for commercial music production."
              }
            ].map((faq, i) => (
              <Card key={i} className="bg-gray-900/50 border-gray-800/50">
                <CardContent className="p-6">
                  <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
                  <p className="text-gray-400">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}