export interface Restaurant {
  id: number;
  name: string;
  lat: number;
  lon: number;
  tags: RestaurantTags;
}

export interface RestaurantTags {
  "addr:housenumber"? : string
  amenity: string
  cuisine?: string;
  name: string;
}

export interface RestaurantProps {
  name: string;
  photos: string[];
  menu: string[];
  contact: {
    phone: string;
    address: string;
  };
}
