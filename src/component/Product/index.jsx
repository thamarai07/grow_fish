import React from "react";
import { fish } from "@/utils/content";
import Link from "next/link";

export default function Products() {
  return (
    <div className="max-w-[992px] m-auto py-24">
      {fish.map((item, i) => (
        <div key={i}>
          <p className="text-[38px] font-semibold">{item.title}</p>
          <div className="flex gap-6 mt-10">
            {item.content.map((img, index) => (
              <div key={index} className="relative">
                <Link href={`/product/${img.id}`}>
                  <img
                    src={img.img}
                    alt={img.name}
                    className="w-full block rounded-2xl"
                  />
                  <p className="text-center mt-4 bg-[#065c7d] py-2 text-white w-[80%] m-auto rounded-4xl font-semibold">View</p>
                  <p className="absolute top-[50%] text-center py-2 z-50 text-[20px] fish_name text-white w-full font-semibold">
                    {img.name}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
