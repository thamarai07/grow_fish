"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef, useCallback } from "react";

const images = ["/fishes/im-1.png", "/fishes/img-2.png", "/fishes/img-3.png"];

export default function Hero() {
  // const [offset, setOffset] = useState(0);
  // const sliderRef = useRef(null);
  // const animationRef = useRef(null);
  // const lastTimeRef = useRef(0);
  // const speed = 0.1; // Pixels per millisecond
  // const touchStartX = useRef(null);
  // const isPaused = useRef(false);

  // const animate = useCallback((time) => {
  //   if (isPaused.current) {
  //     animationRef.current = requestAnimationFrame(animate);
  //     return;
  //   }

  //   const deltaTime = time - lastTimeRef.current;
  //   lastTimeRef.current = time;

  //   setOffset((prev) => {
  //     const totalWidth = images.length * 100;
  //     const newOffset = prev + speed * deltaTime * 2 * 0.01;
  //     return newOffset >= totalWidth ? newOffset - totalWidth : newOffset;
  //   });

  //   animationRef.current = requestAnimationFrame(animate);
  // }, []);

  // useEffect(() => {
  //   lastTimeRef.current = performance.now();
  //   animationRef.current = requestAnimationFrame(animate);
  //   return () => cancelAnimationFrame(animationRef.current);
  // }, [animate]);

  // const handleTouchStart = useCallback((e) => {
  //   touchStartX.current = e.touches[0].clientX;
  //   isPaused.current = true;
  // }, []);

  // const handleTouchEnd = useCallback((e) => {
  //   const touchEndX = e.changedTouches[0].clientX;
  //   const diff = touchStartX.current - touchEndX;

  //   if (Math.abs(diff) > 50) {
  //     setOffset((prev) => {
  //       const totalWidth = images.length * 100;
  //       let newOffset = prev + (diff > 0 ? 100 : -100);
  //       if (newOffset < 0) newOffset += totalWidth;
  //       if (newOffset >= totalWidth) newOffset -= totalWidth;
  //       return newOffset;
  //     });
  //   }

  //   isPaused.current = false;
  // }, []);

  return (
    // <div className="w-full overflow-hidden relative">
    //   {/* <div
    //     ref={sliderRef}
    //     className="flex whitespace-nowrap" // Prevent gaps between images
    //     style={{
    //       transform: `translateX(-${offset}%)`,
    //       transition: "none",
    //       display: "inline-flex", // Ensure images stay in a single row
    //     }}
    //   >
    //     {[...images, ...images, ...images, ...images, ...images].map(
    //       (
    //         src,
    //         i // Triple the images for seamless looping
    //       ) => (
    //         <div
    //           key={i}
    //           className="flex-shrink-0"
    //           style={{ width: `${100 / images.length}%` }}
    //         >
    //           <Image
    //             src={src}
    //             width={1200}
    //             height={1200}
    //             alt={`fish-${i % images.length}`}
    //             className="w-full h-full object-cover"
    //             priority={i < images.length} // Preload first set of images
    //           />
    //         </div>
    //       )
    //     )}
    //   </div> */}
    //   <video
    //     autoPlay
    //     loop
    //     muted
    //     className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
    //   >
    //     <source src="/vidoe.mp4" type="video/mp4" />
    //     Your browser does not support the video tag.
    //   </video>
    // </div>

    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/vidoe.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold px-8 py-5 rounded-full font-sans backdrop-blur-sm bg-white/20 leading-loose shadow-2xl">
          Where Aquariums Become Art
        </h1>
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-0"></div>
    </div>
  );
}
