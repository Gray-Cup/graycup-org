import { Metadata } from "next";
import Image from "next/image";

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
    <div className="min-h-screen py-20 px-4 lg:px-6">
      <div className="max-w-5xl mx-auto px-4 lg:px-6">
        <div className="text-start mb-16">
          <h1 className="text-3xl md:text-4xl font-semibold text-black mb-3">
            Every Cup Has a Climate Story
          </h1>
          <div className="mt-6">
          <Image
          src="/nature/two-cats-by-rajneesh.jpg"
          width="600"
          height="200"
          draggable="false"
          alt="Image of two cats in Himachal, Taken by Rajneesh"
          />
          <span className="text-neutral-500 text-sm flex justify-center ">This Image was taken by<a href="https://rajneesh.blog" target="_blank" className="pl-1 underline">Rajneesh</a>.</span>
          </div>

        </div>


        <p className="text-lg mb-6">
          Climate change is reshaping the future of coffee. Rising temperatures,
          unpredictable rainfall, droughts, pest outbreaks, and sea-level changes
          are putting one of the world's most loved beverages at risk. Today,
          nearly <span className="font-semibold">60% of all coffee species</span>{" "}
          are threatened with extinction — one of the highest risk levels recorded
          for any plant group.
        </p>

        <p className="text-lg mb-6">
          At <span className="font-semibold">Gray Cup</span>, we believe
          every brew should tell a deeper story. Inspired by IUCN Red List data,
          our packaging highlights India's threatened wildlife to build awareness
          about their fragile status.
        </p>

        <div className="border border-gray-200 rounded-xl p-6 space-y-4 mb-6">
          <h3 className="text-xl font-semibold">Stronger the Coffee, Stronger Their Status</h3>
          <ul className="space-y-2">
            <li>
              ☕ <span className="font-medium">Very Strong / Strong</span> — Critically Endangered species
            </li>
            <li>
              ☕ <span className="font-medium">Medium</span> — Endangered species
            </li>
            <li>
              ☕ <span className="font-medium">Mild</span> — Vulnerable species
            </li>
          </ul>
        </div>

        <p className="text-lg mb-6">
          Climate projections show that nearly{" "}
          <span className="font-semibold">half of today's coffee-growing land</span>{" "}
          could become unsuitable by 2050, while almost{" "}
          <span className="font-semibold">28% of coffee species</span>{" "}
          do not exist in protected areas at all.
        </p>

        <div className="border border-gray-200 rounded-xl p-6 mb-6">
          <h3 className="text-xl font-semibold mb-3">
            Our Commitment: Building Green Corridors
          </h3>
          <p className="mb-4">
            Every purchase you make helps fund the creation of{" "}
            <span className="font-semibold">green corridors</span> —
            connected natural habitats that allow wildlife to move safely,
            maintain genetic diversity, and survive in a changing climate.
          </p>
          <p className="font-medium">
            Your cup isn't just coffee. It's a step toward reconnecting forests
            and protecting species.
          </p>
        </div>

        <p className="text-sm text-muted-foreground">
          Learn more:{" "}
          <a
            href="https://www.iucnredlist.org"
            target="_blank"
            className="underline hover:opacity-75"
          >
            www.iucnredlist.org
          </a>
        </p>
      </div>
    </div>
  );
}
