import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Home, Package, HelpCircle, Mail, ShoppingCart, Wrench, Image as ImageIcon, DollarSign } from "lucide-react";
import ImageUploader from "../components/admin/ImageUploader";
import PriceManager from "../components/admin/PriceManager";

export default function SiteManage() {
  const sections = [
    { id: "images", label: "Images", icon: ImageIcon },
    { id: "prices", label: "Prices", icon: DollarSign },
    { id: "home", label: "Home", icon: Home },
    { id: "products", label: "Products", icon: Package },
    { id: "gui-me", label: "GUI-Me", icon: Wrench },
    { id: "packs", label: "Pack List", icon: Package },
    { id: "how-to-buy", label: "How to Buy", icon: HelpCircle },
    { id: "buy-now", label: "Buy Now", icon: ShoppingCart },
    { id: "contact", label: "Contact Us", icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
            <Settings className="w-8 h-8" />
            Site Management
          </h1>
          <p className="text-gray-400">
            Manage your website content, images, and pages
          </p>
        </div>

        <Tabs defaultValue="images" className="space-y-6">
          <TabsList className="bg-gray-900 border border-gray-800 p-1 flex-wrap h-auto">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <TabsTrigger
                  key={section.id}
                  value={section.id}
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-400 flex items-center gap-2"
                >
                  <Icon className="w-4 h-4" />
                  {section.label}
                </TabsTrigger>
              );
            })}
          </TabsList>

          <TabsContent value="images">
            <ImageUploader />
          </TabsContent>

          <TabsContent value="prices">
            <PriceManager />
          </TabsContent>

          <TabsContent value="home">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Home Page Content</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Home page editor coming soon. For now, manage products and site content through the database.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="products">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Products Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Manage your products through the Product entity in the database. You can add, edit, and delete products there.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gui-me">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">GUI-Me Page</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  GUI-Me page content editor coming soon.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="packs">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Pack List Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Pack content is currently managed through the pack pages. Updates coming soon for easier management.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="how-to-buy">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">How to Buy Page</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  How to Buy page editor coming soon.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="buy-now">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Buy Now Page</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Buy Now page content editor coming soon.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contact">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Contact Page</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Contact page editor coming soon.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}