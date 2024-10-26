"use client";
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L, { LatLngExpression } from "leaflet";
import { Restaurant } from "@/app/models/restaurants";

const fetchRestaurants = async (): Promise<Restaurant[]> => {
  const query = `
    [out:json];
    node["amenity"="restaurant"](42.3521, -71.0677, 42.3824, -71.0228);
    out;
  `;

  const url = "https://overpass-api.de/api/interpreter";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `data=${encodeURIComponent(query)}`,
  });
  const data = await response.json();
  return data.elements as Restaurant[];
};

const MapComponent: React.FC = () => {
  const position: LatLngExpression = [42.3601, -71.0589];
  const icon = L.icon({ iconUrl: "/leaflet-markers/marker-icon.png" });
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    const loadRestaurants = async () => {
      const data = await fetchRestaurants();
      setRestaurants(data);
    };
    loadRestaurants();
  }, []);

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "400px", width: "800px" }}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://carto.com/">CartoDB</a> contributors'
      />
      {restaurants.map((restaurant) => (
        <Marker
          key={restaurant.id}
          position={[restaurant.lat, restaurant.lon]}
          icon={icon}
        >
          <Popup>
            <h2>{restaurant.tags.name}</h2>
          </Popup>
        </Marker>
      ))}

      {/* <Marker position={position} icon={icon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}
    </MapContainer>
  );
};

export default MapComponent;
