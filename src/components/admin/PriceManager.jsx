import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DollarSign, Save, Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function PriceManager() {
  const queryClient = useQueryClient();
  const [prices, setPrices] = useState({});

  const { data: packPrices, isLoading } = useQuery({
    queryKey: ['packPrices'],
    queryFn: () => base44.entities.PackPrice.list(),
    initialData: [],
  });

  const updatePriceMutation = useMutation({
    mutationFn: ({ id, data }) => base44.entities.PackPrice.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['packPrices'] });
      toast.success("Price updated successfully");
    },
  });

  const createPriceMutation = useMutation({
    mutationFn: (data) => base44.entities.PackPrice.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['packPrices'] });
      toast.success("Price created successfully");
    },
  });

  const packs = [
    { id: "mad-midi", name: "MAD MIDI MACHINES", defaultPrice: "22.00" },
    { id: "max-pack", name: "MAX! PACK", defaultPrice: "12.00" }
  ];

  const getPackPrice = (packId) => {
    const existingPrice = packPrices?.find(p => p.pack_id === packId);
    return existingPrice || packs.find(p => p.id === packId);
  };

  const handleSave = (packId) => {
    const newPrice = prices[packId];
    if (!newPrice || isNaN(newPrice)) {
      toast.error("Please enter a valid price");
      return;
    }

    const existingPrice = packPrices?.find(p => p.pack_id === packId);
    const priceData = {
      pack_id: packId,
      price: parseFloat(newPrice),
      display_price: `$${parseFloat(newPrice).toFixed(2)}`
    };

    if (existingPrice) {
      updatePriceMutation.mutate({ id: existingPrice.id, data: priceData });
    } else {
      createPriceMutation.mutate(priceData);
    }
  };

  if (isLoading) {
    return (
      <Card className="bg-gray-900/50 border-gray-800">
        <CardContent className="flex items-center justify-center py-12">
          <Loader2 className="w-6 h-6 text-blue-500 animate-spin" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-gray-900/50 border-gray-800">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <DollarSign className="w-5 h-5" />
          Pack Prices
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {packs.map((pack) => {
          const currentPrice = getPackPrice(pack.id);
          const displayPrice = currentPrice?.price || currentPrice?.defaultPrice;
          
          return (
            <div key={pack.id} className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="text-white font-semibold">{pack.name}</h3>
                  <p className="text-gray-400 text-sm">Pack ID: {pack.id}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400 text-xs">Current Price</p>
                  <p className="text-2xl font-bold text-yellow-500">
                    ${displayPrice}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                  <Input
                    type="number"
                    step="0.01"
                    placeholder={displayPrice}
                    value={prices[pack.id] || ""}
                    onChange={(e) => setPrices({ ...prices, [pack.id]: e.target.value })}
                    className="bg-gray-900 border-gray-700 text-white pl-7"
                  />
                </div>
                <Button
                  onClick={() => handleSave(pack.id)}
                  disabled={updatePriceMutation.isPending || createPriceMutation.isPending}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save
                </Button>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}