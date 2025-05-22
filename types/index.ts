export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  featured: boolean;
  ingredients?: string[];
  allergens?: string[];
  spicyLevel?: number;
  dietaryInfo?: string[];
}

export interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

export interface Staff {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Location {
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email: string;
  latitude: number;
  longitude: number;
  hours: {
    day: string;
    open: string;
    close: string;
  }[];
}

export interface Gallery {
  id: number;
  title: string;
  image: string;
  category: string;
}

export interface Reservation {
  name: string;
  email: string;
  phone: string;
  date: Date;
  time: string;
  guests: number;
  specialRequests?: string;
}