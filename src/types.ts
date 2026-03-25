export type View = 'home' | 'restaurant' | 'item' | 'cart';

export interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  rating?: number;
  reviews?: string;
  prepTime?: string;
  calories?: string;
  category?: string;
  tags?: string[];
}

export interface Restaurant {
  id: string;
  name: string;
  description: string;
  image: string;
  rating: number;
  reviews: string;
  deliveryTime: string;
  tags: string[];
  menu: FoodItem[];
}
