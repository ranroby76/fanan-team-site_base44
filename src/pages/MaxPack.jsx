import React from "react";
import PackPageTemplate from "../components/packs/PackPageTemplate";
import { Crown } from "lucide-react";

export default function MaxPack() {
  return (
    <PackPageTemplate
      packId="max"
      name="Max Pack"
      description="The complete Fanan Team collection. Everything we make, in one package. Best value for power users who want it all."
      icon={Crown}
      color="from-purple-500 to-pink-600"
      price="$199"
      features={[
        "All current products (40+ instruments)",
        "All future products included forever",
        "Exclusive bonus content & presets",
        "VIP support channel access",
        "Full commercial license",
        "Early access to new releases",
        "Exclusive Max Pack only content",
        "Highest priority support"
      ]}
    />
  );
}