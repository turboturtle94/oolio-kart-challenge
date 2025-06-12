export interface Order {
  id: string;
  items: Item[];
  products: Product[];
  totalCost: number;
}

export interface Product {
  id: string;
  category: string;
  price: number;
  name: string;
}

export interface Item {
  productId: string;
  quantity: number;
}