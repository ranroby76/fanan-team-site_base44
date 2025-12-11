import React from "react";
import PackPageTemplate from "../components/packs/PackPageTemplate";
import { Gift } from "lucide-react";

export default function FreePack() {
  return (
    <PackPageTemplate
      packId="free"
      name="Free Pack"
      description="Get started with our free collection of essential tools and instruments. Perfect for beginners and those wanting to try our products before purchasing."
      icon={Gift}
      color="from-green-500 to-emerald-600"
      isFree={true}
      features={[
        "Randomidi Free - Creative MIDI Generator",
        "Essential presets and samples",
        "No strings attached - completely free",
        "Free updates for life",
        "Community forum support",
        "Perfect for trying our products"
      ]}
    />
  );
}