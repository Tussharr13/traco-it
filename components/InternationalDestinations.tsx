"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function InternationalDestinations() {

    const categories = [
        { name: "Hong Kong", destination: "Hong Kong", src: "https://www.mydays.ch/images/https%3A%2F%2Fmain.static.jsmd-group.com%2Fassets%2Fnew_default_upload_bucket%2Fdisneyland-paris-mit-uebernachtung-60438-2_1.jpg?w=735&h=483&fit=max&auto=format%2Ccompress&cs=srgb&dpr=2&q=50&s=9129336a3e238f70b2d6372fd7879af5" },
        { name: "Thailand", destination: "Thailand", src: "https://www.travelandleisure.com/thmb/nDDNqO2EctQhiIfZrxeXTF47zhE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-koh-phi-phi-PLACESTHAILAND1023-09b9d347b3cd4844b4ae19e4e06a9a6d.jpg" },
        { name: "Dubai", destination: "Dubai", src: "https://wallpapers.com/images/featured/dubai-pictures-8h5etmigpwhcbg5s.jpg" },
        { name: "Maldives", destination: "Maldives", src: "https://media.cnn.com/api/v1/images/stellar/prod/230516112548-01-crossroads-maldives-aerial.jpg?c=original" },
    ]

    return (
        <section className="py-16 bg-slate-200">
            <div className="container mx-auto">
                <h2 className="mb-12 text-neutral-900 text-4xl font-semibold font-glitten tracking-wider">Popular International Trips</h2>
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
    )
}