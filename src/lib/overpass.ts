import { Restaurant } from "@/app/model/restaurants";

export const fetchInitialRestaurants = async (): Promise<Restaurant[]> => {
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