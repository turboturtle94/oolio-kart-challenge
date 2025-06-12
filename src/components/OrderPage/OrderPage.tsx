import React, { useEffect, useState } from "react";
import axios from "axios";

import OrderItem from "./OrderItem";
import { OrderProvider } from "../../context/OrderContext";

import type { Item } from "../../types/item";

import {
  Container,
  ItemsDisplay,
  ItemsGrid,
  ItemsHeader,
} from "./OrderPage.styles";
import OrderSummary from "./OrderSummary";

const OrderPage: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axios.get<Item[]>("/api/product");
        setItems(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchItems();
  }, []);

  return (
    <OrderProvider>
      <Container>
        <ItemsDisplay>
          <ItemsHeader>Desserts</ItemsHeader>
          <ItemsGrid>
            {items.map((item: Item, index: number) => (
              <OrderItem item={item} key={`${item.name}${index}`}></OrderItem>
            ))}
          </ItemsGrid>
        </ItemsDisplay>
        <OrderSummary items={items}></OrderSummary>
      </Container>
    </OrderProvider>
  );
};

export default OrderPage;
