"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef, useCallback } from "react";

const images = ["/fishes/im-1.png", "/fishes/img-2.png", "/fishes/img-3.png"];

export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden ">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute left-0 w-full h-full object-cover z-0"
      >
        <source src="/vidoe.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold px-8 py-5 rounded-full font-sans backdrop-blur-sm leading-loose shadow-2xl mt-40 bg-black/50 ">
          Where Aquariums Become Art
        </h1>
      </div>
    </div>
  );
}
