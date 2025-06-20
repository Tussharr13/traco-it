"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function FavDestinations() {

const categories = [
    { name: "Nainital", src: "https://images.wanderon.in/blogs/new/2024/06/places-to-visit-in-nainital.jpeg" },
    { name: "Manali", src: "https://images.unsplash.com/photo-1712388430474-ace0c16051e2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuYWxpfGVufDB8fDB8fHww" },
    { name: "Mussoorie", src: "https://s3.india.com/wp-content/uploads/2024/05/Feature-Image_-Mussoorie-5.jpg?impolicy=Medium_Widthonly&w=350&h=263" },
    { name: "Rishikesh", src: "https://captureatrip-cms-storage.s3.ap-south-1.amazonaws.com/Rishikesh_3c33f1475f.webp" },
  ]

return(
    <section className="py-16 bg-slate-200">
        <div className="container mx-auto">
          <h2 className="mb-12 text-neutral-900 text-4xl font-semibold font-glitten tracking-wider">Trending Grouptrips</h2>
          <div className="flex md:grid overflow-x-auto md:overflow-visible gap-8 scrollbar-hide md:grid-cols-2 lg:grid-cols-4 md:max-w-full mx-auto">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={`/explore`}
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