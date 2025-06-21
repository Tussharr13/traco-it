"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function ReligiousDestinations() {

const categories = [
    { name: "Varanasi", destination:"Varanasi", src: "https://www.visitkashi.in/backend/admin/product_images/172448788939.jpg" },
    { name: "Vaishno Devi", destination:"Katra",  src: "https://www.indiantempletour.com/wp-content/uploads/2016/06/Vaishno-Devi-Yatra.webp" },
    { name: "Vrindavan", destination:"Vrindavan",  src: "https://experiencemyindia.com/wp-content/uploads/2024/10/iskcon.jpg.webp" },
    { name: "Haridwar", destination:"Haridwar",  src: "https://s7ap1.scene7.com/is/image/incredibleindia/ganga-ghat-haridwar1-attr-hero?qlt=82&ts=1726645870499" },
  ]

return(
    <section className="py-16 bg-ice-blue">
        <div className="container mx-auto">
          <h2 className="mb-12 text-neutral-900 text-4xl font-semibold font-glitten tracking-wider">Trending Religious Trips</h2>
          <div className="flex md:grid overflow-x-auto md:overflow-visible gap-8 scrollbar-hide md:grid-cols-2 lg:grid-cols-4 md:max-w-full mx-auto">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={`/explore?destination=${category.destination}`}
                className="min-w-[80%] relative flex flex-col itemscenter shadow-neutral-300 text-[#000A26] shadow-sm hover:scale-105 ease-in-out duration-300"
              >
                <Image
                  className="rounded-md w-full h-full"
                  src={category.src}
                  width={100}
                  height={100}
                  alt='idnex'
                />
                <div className="absolute inset-0" />
                <div className="absolute bottom-0 left-0 p-4 w-full">
                  <p className="overflow-y-hidden text-3xl tracking-wider font-extrabold font-calsans text-white flex gap-1 items-center">
                    {category.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
)}