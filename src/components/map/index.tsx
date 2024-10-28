"use client";
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L, { LatLngExpression } from "leaflet";
import { Restaurant } from "@/app/model/restaurants";
import { fetchInitialRestaurants } from "@/lib/overpass";


const MapComponent: React.FC = () => {
  const position: LatLngExpression = [42.3601, -71.0589];
  const icon = L.icon({ iconUrl: "/leaflet-markers/marker-icon.png" });
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchInitialRestaurants();
      setRestaurants(data);
    };
    fetchData();
  }, []);

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "600px", width: "1000px" }}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://carto.com/">CartoDB</a> contributors'
      />
      {restaurants &&
        restaurants.map((restaurant) => (
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
