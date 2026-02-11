"use client";

import { InfoCardData } from "../types/info-card-data";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function InfoCard({ card }: { card: InfoCardData }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      ref={ref}
      className={`flex flex-col items-center gap-4 rounded-lg bg-white p-6 shadow-md w-full md:w-100 ${isInView ? "slide-in-up" : "opacity-0"}`}
    >
      <h2 className="text-xl font-semibold">{card.title}</h2>
      <img src={card.icon} alt="Image" width={250} height={250} />
      <p className="text-gray-600 text-center">{card.description}</p>
    </div>
  );
}
