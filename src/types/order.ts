export interface Order {
  id: string;
  items: [
    {
      productId: string;
      quantity: number;
    },
  ];
  products: [
    {
      id: string;
      name: string;
      price: number;
      category: string;
    },
  ];
}
