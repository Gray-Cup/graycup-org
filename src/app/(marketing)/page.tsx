"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

import {
  CreateAgent,
  IDEAgent,
  Forms,
  Questions,
  ToDo,
  ProductPr,
  ProductIssue,
  CustomerCalls,
  ProductPrBottomLeft,
  CoffeeCup,
} from "@/components/svgs";
import { CustomerHero } from "@/components/svgs/customer-hero";
import Image from "next/image";
import { CoffeeSection } from "@/components/coffee-section";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [randomizedComponents, setRandomizedComponents] = useState<
    React.ComponentType<{ className?: string }>[]
  >([]);

  useEffect(() => {
    const components = [
      CreateAgent,
      IDEAgent,
      Forms,
      Questions,
      ToDo,
      ProductPr,
      ProductIssue,
      CustomerCalls,
    ];

    // Shuffle components
    const shuffled = [...components].sort(() => Math.random() - 0.5);
    setRandomizedComponents(shuffled);
    setMounted(true);
  }, []);

  return (
    <div>
      <div className="mx-auto px-4 lg:px-6 h-auto my-10">
        <div className="md:min-h-screen pt-10 pb-20 max-w-6xl mx-auto md:pb-0 flex flex-col justify-center">
          <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-6 items-center">
            {/* Left Column */}
            <div>
              <div>
                <span className="mb-4 sm:ml-0.5 text-sm font-medium uppercase text-neutral-500">
                  We Support Sustainability
                </span>
                <h1 className="relative text-black text-3xl sm:text-4xl lg:text-5xl font-medium sm:leading-[60px] ">
                  Tea, Coffee,
                  <br />
                  and <span>Liquid</span>.
                  <br />
                  Poured into Humans.
                </h1>
              </div>

              <div className="flex relative mt-10 flex-col max:smml-4 ">
                <div className="flex flex-row gap-4">
                  <a href="/contact" target="_blank">
                    <Button variant="lightgray" size="sm" className="">
                      Contact Us
                    </Button>
                  </a>
                  <a
                    href="/shop"
                  >
                    <Button variant="default" size="sm">
                      Shop Products{" "}
                      {/* <kbd className="max-sm:hidden font-medium text-[11px] px-1.5 py-0.5 rounded-sm border border-neutral-700 bg-neutral-800 cursor-pointer">
                        International
                      </kbd> */}
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="hidden lg:block">
              <Image
                src="/hero-side.png"
                alt="coffee beans"
                className="rotate-40 "
                draggable="false"
                width={220}
                height={220}
              />
            </div>
          </div>

          <div className="my-20 py-20 bg-neutral-100">
            <h2 className="text-5xl font-medium text-neutral-900 mb-6 flex justify-center flex-row items-center gap-4 font-instrument-sans"></h2>
          </div>

          {/* Sourcing & Retail Identity */}
          <div className="my-10 px-6 py-12 border border-neutral-200 rounded-xl bg-white">
            <span className="text-xs font-medium uppercase text-neutral-400 tracking-widest">
              What We Do
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-medium text-neutral-900 max-w-2xl leading-snug">
              Sourcing and retailing the finest tea and coffee beans — from origin to your cup.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-500 max-w-xl leading-relaxed">
              Gray Cup operates as both a <span className="font-medium text-neutral-700">sourcing company</span> and a <span className="font-medium text-neutral-700">retail company</span>. We work directly with growers to source premium tea and coffee beans, and we bring those products to consumers and businesses who care about quality and transparency.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-md bg-amber-100 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-neutral-900">Sourcing</h3>
                  <p className="text-xs text-neutral-500 mt-0.5 leading-relaxed max-w-xs">
                    Partnering directly with farms and estates to source traceable, high-quality tea and coffee beans.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-md bg-neutral-100 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-neutral-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-neutral-900">Retail</h3>
                  <p className="text-xs text-neutral-500 mt-0.5 leading-relaxed max-w-xs">
                    Bringing exceptional beans directly to consumers and businesses who value origin and craft.
                  </p>
                </div>
              </div>
            </div>
          </div>

                <div className="mx-auto px-4 lg:px-6 py-10 ">
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* Left: content */}
          <div className="flex-1 min-w-0">
            <div className="mb-6">
              <span className="text-xs font-medium uppercase text-neutral-500">
                For Growers & Estates
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-medium text-neutral-900">
                Tech Solutions for Coffee Farms
              </h2>
              <p className="mt-2 text-sm text-neutral-600 max-w-2xl leading-relaxed">
                From small family farms to large coffee estates, we offer technology
                tools built around the real challenges of growing, processing, and
                exporting coffee at scale.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 max-w-6xl gap-3">
              {/* Card 1 */}
              <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4 flex gap-3 items-start">
                <div className="w-8 h-8 rounded-md bg-green-100 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-neutral-900">Yield & Harvest Analytics</h3>
                  <p className="text-xs text-neutral-500 mt-0.5 leading-relaxed">
                    Track harvest volumes, predict yields by lot, and monitor per-hectare output across seasons.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4 flex gap-3 items-start">
                <div className="w-8 h-8 rounded-md bg-amber-100 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-neutral-900">Origin & Traceability</h3>
                  <p className="text-xs text-neutral-500 mt-0.5 leading-relaxed">
                    Lot-level records tied to farm location, processing method, and export documentation.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4 flex gap-3 items-start">
                <div className="w-8 h-8 rounded-md bg-blue-100 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-neutral-900">Quality Control & Grading</h3>
                  <p className="text-xs text-neutral-500 mt-0.5 leading-relaxed">
                    Log cupping scores, defect rates, and moisture readings per batch across stations.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4 flex gap-3 items-start">
                <div className="w-8 h-8 rounded-md bg-orange-100 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-orange-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-neutral-900">Inventory & Stock Management</h3>
                  <p className="text-xs text-neutral-500 mt-0.5 leading-relaxed">
                    Real-time visibility from cherry to export-ready bags across your warehouse.
                  </p>
                </div>
              </div>

              {/* Card 5 */}
              <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4 flex gap-3 items-start">
                <div className="w-8 h-8 rounded-md bg-purple-100 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-neutral-900">Export & Compliance Docs</h3>
                  <p className="text-xs text-neutral-500 mt-0.5 leading-relaxed">
                    Phytosanitary certs, ICO forms, and buyer contracts — organized and audit-ready.
                  </p>
                </div>
              </div>

              {/* Card 6 */}
              <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4 flex gap-3 items-start">
                <div className="w-8 h-8 rounded-md bg-teal-100 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-neutral-900">Worker & Labour Tracking</h3>
                  <p className="text-xs text-neutral-500 mt-0.5 leading-relaxed">
                    Picker counts, wages, and payroll simplified for seasonal labour across estates.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <a href="/contact">
                <button className="inline-flex cursor-pointer items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-700 transition-colors">
                  Talk to Us About Your Farm
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </a>
            </div>
          </div>

        </div>
      </div>

          <div className="my-20 flex flex-col md:items-center px-6 py-10 md:py-20 bg-neutral-50 md:grid md:grid-cols-[70%_30%]">
            <div>
              <div className="block md:hidden max-md:pb-5">
                <CoffeeCup />
              </div>

              <h2 className="text-2xl sm:text-4xl font-medium text-neutral-900 mb-6 font-instrument-sans">
                Gray Cup Narrative
              </h2>

              <p className="text-md sm:text-lg mb-10 text-neutral-700 my-4 max-w-2xl leading-relaxed">
                <span className="mb-4">
                  Gray Cup creates sustainable, high-quality essentials for
                  everything that belongs in your cup.
                </span>
                {" "}Built on the idea of a{" "}
                <span className="font-medium">neutral cup</span>, sustainable,
                balanced, and uncompromising in quality, Gray Cup focuses on
                what truly matters.
                <br />
                <br />
                From coffee and matcha to tea and future essentials, we do not
                chase categories or trends.
                <br />
                <br />
                <span className="font-medium text-neutral-900">
                  The best is what belongs in your cup.
                </span>
              </p>
            </div>

            <div className="hidden md:block">
              <CoffeeCup />
            </div>

            <a href="https://discord.gg/gpRxmW63JW" target="_blank">
              <Button variant="gray">Join Our Discord</Button>
            </a>
          </div>

          {/* <Image src="/beans-circle.webp" alt="coffee beans" className="pl-2" width={200} height={200} /> */}
        </div>
      </div>
      <div className="px-4 lg:px-6"></div>
      {/* <CoffeeSection /> */}

    </div>
  );
}
