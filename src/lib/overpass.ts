import { Restaurant } from "@/app/model/restaurants";

export const fetchInitialRestaurants = async (bounds?: L.LatLngBounds): Promise<Restaurant[]> => {
  const { southWest, northEast } = bounds ? { southWest: bounds.getSouthWest(), northEast: bounds.getNorthEast() } : { southWest: { lat: 42.3521, lng: -71.0677 }, northEast: { lat: 42.3824, lng: -71.0228 } };
  const query = `
    [out:json];
    node["amenity"="restaurant"](${southWest.lat}, ${southWest.lng}, ${northEast.lat}, ${northEast.lng});
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