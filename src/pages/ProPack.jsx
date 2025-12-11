import React from "react";
import PackPageTemplate from "../components/packs/PackPageTemplate";
import { Package } from "lucide-react";

export default function ProPack() {
  return (
    <PackPageTemplate
      packId="pro"
      name="Pro Pack"
      description="Professional grade instruments designed for serious music producers. Get access to our most popular Kontakt libraries at a discounted bundle price."
      icon={Package}
      color="from-blue-500 to-cyan-600"
      price="$99"
      features={[
        "10+ Premium Kontakt Libraries",
        "All synth and keyboard instruments",
        "Lifetime license - pay once, own forever",
        "Priority email support",
        "Free updates for life",
        "Commercial use license",
        "High-quality 24-bit samples"
      ]}
    />
  );
}