import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Future of Coffee & Conservation | Gray Cup",
  description: "Climate change threatens 60% of coffee species. Learn how Gray Cup connects your coffee to wildlife conservation, funding green corridors to protect India's endangered species.",
  keywords: ["climate change", "coffee sustainability", "wildlife conservation", "endangered species", "green corridors", "IUCN Red List", "specialty coffee"],
  openGraph: {
    title: "Every Cup Has a Climate Story",
    description: "Climate change threatens 60% of coffee species. Gray Cup is building awareness and funding green corridors to protect India's threatened wildlife.",
    type: "website",
  },
};

export default function FutureOfCoffee() {
  return (
    <div className="max-w-3xl mx-auto min-h-screen py-3 sm:md-py-5 md:py-10 lg:py-20 "> 
        
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Every Cup Has a Climate Story
        </h2>

        <p className="text-lg text-neutral-300 leading-relaxed">
          Climate change is reshaping the future of coffee. Rising temperatures,
          unpredictable rainfall, droughts, pest outbreaks, and sea-level changes
          are putting one of the world's most loved beverages at risk. Today,
          nearly <span className="font-semibold text-white">60% of all coffee species</span>{" "}
          are threatened with extinction — one of the highest risk levels recorded
          for any plant group.
        </p>

        <p className="text-lg text-neutral-300 leading-relaxed">
          At <span className="font-semibold text-white">Gray Cup</span>, we believe
          every brew should tell a deeper story. Inspired by IUCN Red List data,
          our packaging highlights India's threatened wildlife to build awareness
          about their fragile status.
        </p>

        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 space-y-4">
          <h3 className="text-xl font-semibold">Stronger the Coffee, Stronger Their Status</h3>
          <ul className="space-y-2 text-neutral-300">
            <li>
              ☕ <span className="font-medium text-white">Very Strong / Strong</span> — Critically Endangered species
            </li>
            <li>
              ☕ <span className="font-medium text-white">Medium</span> — Endangered species
            </li>
            <li>
              ☕ <span className="font-medium text-white">Mild</span> — Vulnerable species
            </li>
          </ul>
        </div>

        <p className="text-lg text-neutral-300 leading-relaxed">
          Climate projections show that nearly{" "}
          <span className="font-semibold text-white">half of today's coffee-growing land</span>{" "}
          could become unsuitable by 2050, while almost{" "}
          <span className="font-semibold text-white">28% of coffee species</span>{" "}
          do not exist in protected areas at all.
        </p>

        <div className="bg-emerald-900/20 border border-emerald-700 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-emerald-400 mb-3">
            Our Commitment: Building Green Corridors
          </h3>
          <p className="text-neutral-300 leading-relaxed">
            Every purchase you make helps fund the creation and restoration of{" "}
            <span className="font-semibold text-white">green corridors</span> —
            connected natural habitats that allow wildlife to move safely,
            maintain genetic diversity, and survive in a changing climate.
          </p>
          <p className="mt-4 font-medium text-white">
            Your cup isn't just coffee. It's a step toward reconnecting forests
            and protecting species.
          </p>
        </div>

        <p className="text-sm text-neutral-500">
          Learn more:{" "}
          <a
            href="https://www.iucnredlist.org"
            target="_blank"
            className="underline hover:text-neutral-300"
          >
            www.iucnredlist.org
          </a>
        </p>
    </div>
  );
}
