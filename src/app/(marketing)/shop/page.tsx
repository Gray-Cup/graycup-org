import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Shop | GrayCup",
  description:
    "Shop GrayCup products on your preferred platform. Find us on our official store, Amazon, Etsy, and eBay.",
};

const stores = [
  {
    name: "GrayCup Store",
    description: "Our official online store for consumers in India.",
    href: "https://graycup.in/",
    variant: "default" as const,
  },
  {
    name: "Amazon",
    description: "Shop our products on Amazon.",
    href: "https://amazon.in/graycup",
    variant: "gray" as const,
  },
  {
    name: "Etsy",
    description: "Handpicked selections available on Etsy.",
    href: "https://etsy.com/shop/graycup",
    variant: "gray" as const,
  },
  {
    name: "eBay",
    description: "Find our products on eBay.",
    href: "https://ebay.com/str/graycup",
    variant: "gray" as const,
  },
];

export default function ShopPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Shop</h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          Find GrayCup products on your preferred platform.
        </p>
      </header>

      <section className="grid gap-6 sm:grid-cols-2">
        {stores.map((store) => (
          <div
            key={store.name}
            className="flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                {store.name}
              </h2>
              <p className="mt-2 text-gray-600">{store.description}</p>
            </div>
            <div className="mt-6">
              <Link href={store.href} target="_blank" rel="noopener noreferrer">
                <Button variant={store.variant} size="sm">
                  Visit {store.name} →
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
