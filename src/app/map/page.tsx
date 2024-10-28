"use client";

import dynamic from "next/dynamic";
import React from "react";
const Map = dynamic(() => import("@/components/map"), { ssr: false });

export default function MapPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Map />
    </div>
  );
}
