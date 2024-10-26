"use client";

import dynamic from "next/dynamic";
import React from "react";

const Map = dynamic(() => import("@/components/map"), {
  ssr: false,
});

const MapPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Map />
    </div>
  );
};

export default MapPage;
