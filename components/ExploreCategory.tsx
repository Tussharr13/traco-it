"use client";

import Link from "next/link"

export default function ExploreCategory() {

const categories = [
  {
    name: "Beach Getaways",
    blurColor: "from-transparent to-blue-500"
  },
  {
    name: "Mountain Escapes",
    blurColor: "from-transparent to-fuchsia-600"
  },
  {
    name: "Desert Adventures",
    blurColor: "from-transparent to-yellow-700"
  },
  {
    name: "Forest & Wildlife",
    blurColor: "from-transparent to-emerald-700"
  },
  {
    name: "Island Holidays",
    blurColor: "from-transparent to-cyan-500"
  },
  {
    name: "Hill Stations",
    blurColor: "from-transparent to-indigo-500"
  },
  {
    name: "Adventure & Trekking",
    blurColor: "from-transparent to-green-600"
  },
  {
    name: "Cultural Tours",
    blurColor: "from-transparent to-amber-500"
  },
  {
    name: "Pilgrimage & Spiritual",
    blurColor: "from-transparent to-purple-700"
  },
  {
    name: "Wellness & Yoga Retreats",
    blurColor: "from-transparent to-pink-500"
  },
  {
    name: "Luxury Escapes",
    blurColor: "from-transparent to-rose-900"
  },
  {
    name: "Budget Travel",
    blurColor: "from-transparent to-stone-600"
  },
  {
    name: "Family Friendly",
    blurColor: "from-transparent to-orange-400"
  },
  {
    name: "Solo Travel",
    blurColor: "from-transparent to-sky-600"
  },
  {
    name: "Weekend Getaways",
    blurColor: "from-transparent to-lime-500"
  }
]



  return (
    <section className="py-16 bg-slate-200">
      <div className="container mx-auto">
        <h2 className="mb-12 text-neutral-900 text-4xl font-semibold font-glitten tracking-wider">Explore by Category</h2>
        <div className="flex md:grid overflow-x-auto md:overflow-visible gap-8 scrollbar-hide md:grid-cols-3 lg:grid-cols-7">

          {categories.map((category, index) => (
            <Link
              key={index}
              href={`/explore?category=${encodeURIComponent(category.name)}`}
              className="min-w-[50%] md:min-w-[30%] relative flex flex-col h-48 itemscenter shadow-neutral-300 text-[#000A26] shadow-sm hover:scale-105 ease-in-out duration-300 overflow-hidden rounded-md"
            >
              {/* Blur effect overlay */}
              <div
                className={`
                absolute inset-0 z-20 backdrop-blur-sm 
                bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] 
                ${category.blurColor}
              `}
              />


              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-black/30 z-30" />

              <div className="absolute bottom-0 left-0 p-4 w-full z-40">
                <p className=" text-2xl tracking-wider font-extrabold font-calsans text-white flex gap-1 items-center">
                  {category.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}