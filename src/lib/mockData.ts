export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  featured?: boolean;
}

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    description: "Premium noise-cancelling wireless headphones with 30-hour battery life",
    price: 299.99,
    originalPrice: 399.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    category: "Electronics",
    rating: 4.8,
    reviews: 234,
    inStock: true,
    featured: true
  },
  {
    id: "2",
    name: "Smart Watch Pro",
    description: "Advanced fitness tracking with heart rate monitor and GPS",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    category: "Electronics",
    rating: 4.6,
    reviews: 189,
    inStock: true,
    featured: true
  },
  {
    id: "3",
    name: "Designer Backpack",
    description: "Stylish and functional backpack with laptop compartment",
    price: 89.99,
    originalPrice: 129.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    category: "Fashion",
    rating: 4.5,
    reviews: 156,
    inStock: true
  },
  {
    id: "4",
    name: "Running Shoes",
    description: "Lightweight running shoes with advanced cushioning technology",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    category: "Sports",
    rating: 4.7,
    reviews: 312,
    inStock: true,
    featured: true
  },
  {
    id: "5",
    name: "Coffee Maker",
    description: "Programmable coffee maker with thermal carafe",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6",
    category: "Home",
    rating: 4.4,
    reviews: 98,
    inStock: true
  },
  {
    id: "6",
    name: "Yoga Mat Premium",
    description: "Non-slip eco-friendly yoga mat with carrying strap",
    price: 49.99,
    originalPrice: 69.99,
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f",
    category: "Sports",
    rating: 4.6,
    reviews: 167,
    inStock: true
  },
  {
    id: "7",
    name: "Desk Lamp LED",
    description: "Adjustable LED desk lamp with touch controls",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c",
    category: "Home",
    rating: 4.5,
    reviews: 143,
    inStock: true
  },
  {
    id: "8",
    name: "Bluetooth Speaker",
    description: "Waterproof portable speaker with 360° sound",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
    category: "Electronics",
    rating: 4.7,
    reviews: 221,
    inStock: true,
    featured: true
  }
];

export interface Category {
  id: string;
  name: string;
  image: string;
  count: number;
}

export const mockCategories: Category[] = [
  { id: "1", name: "Electronics", image: "https://images.unsplash.com/photo-1498049794561-7780e7231661", count: 156 },
  { id: "2", name: "Fashion", image: "https://images.unsplash.com/photo-1445205170230-053b83016050", count: 234 },
  { id: "3", name: "Sports", image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211", count: 98 },
  { id: "4", name: "Home", image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a", count: 187 }
];
