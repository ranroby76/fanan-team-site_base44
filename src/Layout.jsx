import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "./utils";
import { Menu, X, Music, Package, HelpCircle, Mail, Home, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Layout({ children, currentPageName }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", page: "Home", icon: Home },
    { name: "Products", page: "Products", icon: Music },
    { name: "GUI-Me", page: "GuiMe", icon: Settings },
    { name: "Pack List", page: "Packs", icon: Package },
    { name: "How to Buy", page: "HowToBuy", icon: HelpCircle },
    { name: "Buy Now", page: "BuyNow", icon: Package },
    { name: "Contact Us", page: "Contact", icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <style>{`
        :root {
          --primary: 45 93% 47%;
          --primary-foreground: 0 0% 0%;
          --accent: 38 92% 50%;
        }

        .gold-text {
          color: #FFD700;
          text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
        }

        .card-glow:hover {
          box-shadow: 0 0 30px rgba(255, 215, 0, 0.3);
        }
      `}</style>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center gap-3">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693af3db20c38c22bc69519e/12c39ef84_A3.png"
                alt="fanan"
                className="h-8 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.page}
                    to={createPageUrl(item.page)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                      currentPageName === item.page
                        ? "text-yellow-500"
                        : "text-gray-400 hover:text-yellow-500"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {item.name}
                  </Link>
                );
              })}
              <div className="ml-2 flex items-center gap-2 px-3 py-2 text-gray-400 hover:text-yellow-500 cursor-pointer">
                <Settings className="w-4 h-4" />
                <span className="text-sm">VIP Login</span>
              </div>
            </nav>

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="text-gray-400">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-gray-950 border-gray-800 w-72">
                <div className="flex flex-col gap-2 mt-8">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.page}
                        to={createPageUrl(item.page)}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                          currentPageName === item.page
                            ? "text-yellow-500"
                            : "text-gray-400 hover:text-yellow-500"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16 lg:pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800/50 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693af3db20c38c22bc69519e/12c39ef84_A3.png"
                  alt="fanan"
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-gray-400 text-sm">
                Premium PRO plugins for music production
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.page}
                    to={createPageUrl(item.page)}
                    className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
              <p className="text-gray-400 text-sm mb-2">
                Questions? Need support?
              </p>
              <Link
                to={createPageUrl("Contact")}
                className="text-yellow-500 hover:text-yellow-400 text-sm transition-colors"
              >
                Contact Us →
              </Link>
            </div>
          </div>

          <div className="border-t border-gray-800/50 mt-8 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Fanan Team. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}