import React from "react";
import { fish } from "@/utils/content";
export default function Products() {
  return (
    <>
      <div className="max-w-[992px] m-auto py-24">
        {fish.map((item) => (
          <>
            <p className="text-[38px] font-semibold">{item.title}</p>
            <div className="flex gap-6 mt-10">
              {item.content.map((img, index) => (
                <>
                  <div key={index} className="relative">
                    <img src={img.img} className="w-[100%] block rounded-2xl" />
                    <p className="absolute top-[50%] text-center py-2  z-50 text-[20px] fish_name text-white w-[100%] font-semibold">
                      {img.name}
                    </p>
                  </div>
                </>
              ))}
            </div>
          </>
        ))}
      </div>
    </>
  );
}
