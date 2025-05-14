
export interface Car {
  id: number;
  name: string;
  transmission: 'Manual' | 'Automatic';
  quantity: number;
  image: string;
  dailyRate?: number;
}

export const cars: Car[] = [
  {
    id: 1,
    name: "Hyundai i10",
    transmission: "Manual",
    quantity: 6,
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800",
    dailyRate: 35
  },
  {
    id: 2,
    name: "Hyundai Accent",
    transmission: "Automatic",
    quantity: 3,
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800",
    dailyRate: 45
  },
  {
    id: 3,
    name: "Hyundai Tucson",
    transmission: "Automatic",
    quantity: 3,
    image: "https://images.unsplash.com/photo-1583267746897-2cf415887172?q=80&w=800",
    dailyRate: 65
  },
  {
    id: 4,
    name: "Dacia Logan",
    transmission: "Manual",
    quantity: 14,
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=800",
    dailyRate: 30
  },
  {
    id: 5,
    name: "Dacia Sandero",
    transmission: "Manual",
    quantity: 18,
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800",
    dailyRate: 32
  },
  {
    id: 6,
    name: "Dacia Duster",
    transmission: "Manual",
    quantity: 6,
    image: "https://images.unsplash.com/photo-1594611342073-4bb7683c27ad?q=80&w=800",
    dailyRate: 55
  },
  {
    id: 7,
    name: "Dacia Lodgy",
    transmission: "Manual",
    quantity: 3,
    image: "https://images.unsplash.com/photo-1543465077-db45d34b88a5?q=80&w=800",
    dailyRate: 50
  },
  {
    id: 8,
    name: "Renault Clio 5",
    transmission: "Manual",
    quantity: 4,
    image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=800",
    dailyRate: 40
  },
  {
    id: 9,
    name: "Renault Clio 5",
    transmission: "Automatic",
    quantity: 1,
    image: "https://images.unsplash.com/photo-1577494226260-6ff46684c363?q=80&w=800",
    dailyRate: 45
  }
];
