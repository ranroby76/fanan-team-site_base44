import React from "react";
import PackPageTemplate from "../components/packs/PackPageTemplate";
import { Zap } from "lucide-react";

export default function MadMidiPack() {
  return (
    <PackPageTemplate
      packId="mad-midi"
      name="Mad MIDI Machine Pack"
      description="Creative MIDI generators, sequencers, and arpeggiators. Spark your creativity with unique pattern generators that will transform your music production workflow."
      icon={Zap}
      color="from-orange-500 to-red-600"
      price="$49"
      features={[
        "All MIDI generator tools",
        "Randomidi Pro - Advanced MIDI Generator",
        "Pattern sequencers & step sequencers",
        "Creative arpeggiators",
        "Chord progression generators",
        "Melody generators",
        "Rhythm pattern creators",
        "Lifetime license with free updates"
      ]}
    />
  );
}