import React from "react";
import { LiaFishSolid } from "react-icons/lia";
import { GiClownfish } from "react-icons/gi";
import { IoPricetagsOutline } from "react-icons/io5";
import { GiCirclingFish } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import "../../app/globals.css"
export default function Info() {
  const Card = [
    {
      id: 1,
      title: "Top-quality breeds",
      content:
        "We offer carefully selected and farm-raised fish strains with vibrant colors, strong genetics, and high demand in the retail market.",
      color: "#ffffff",
      text: "#000",
      icons: <LiaFishSolid size={60} width={60} height={60} className="topquality_breed" />,
    },
    {
      id: 2,
      title: "Healthy, active fish",
      content:
        "Our fish are raised in clean, well-maintained tanks and fed a nutritious diet to ensure they reach you in perfect condition — active, disease-free, and stress-free.",
      color: "#00171f",
      text: "#fff",
      icons: <GiClownfish size={60} width={60} height={60} className="healthy_activefish"/>,
    },
    {
      id: 3,
      title: "Affordable bulk pricing",
      content:
        "As a wholesale-focused supplier, we provide competitive rates on all fish varieties, helping you maintain good margins in your retail business.",
      color: "#003459",
      text: "#fff",
      icons: <IoPricetagsOutline size={50} width={50} height={50} className="affordable" />,
    },
    {
      id: 4,
      title: "Live arrival guarantee (for eligible regions)",
      content:
        "We guarantee live arrival for shipments that reach within 24 hours via reliable transport. Claims are supported with unboxing video — your satisfaction is our priority.",
      color: "#007ea7",
      text: "#fff",
      icons: <GiCirclingFish size={60} width={60} height={60} className="live_arrival" />,
    },
    {
      id: 5,
      title: "Farm-Direct Supply",
      content:
        "We supply fish directly from our own farm — no middlemen, no resellers. This means fresher stock, better quality control, and more affordable pricing for your business.",
      color: "#00a8e8",
      text: "#000",
      icons: <TbTruckDelivery size={60} width={60} height={60} className="farmdirect"/>,
    },
  ];

  return (
    <>
      <div
        className={`relative max-w-[992px] m-auto flex flex-wrap gap-[30px] justify-center mt-20 py-24`}
      >
        {Card.map((item) => (
          <div
            key={item.id}
            style={{ backgroundColor: item.color, color: item.text }}
            className={`w-[30%] p-4 flex flex-col justify-between shadow-[0px_0px_0px_1px_rgba(0,_0,_0,_0.1)] rounded-2xl transition duration-500 hover:scale-105`}
          >
            {item.icons}
            <h3 className="text-[22px] font-semibold">{item.title}</h3>
            <p style={{ color: item.text }} className="leading-6">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
