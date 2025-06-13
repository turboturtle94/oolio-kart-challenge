import React, { useEffect, useState } from "react";
import api from "../../lib/axios";

import OrderItem from "./OrderItem";
import { OrderProvider } from "../../context/OrderContext";
import type { Item } from "../../types/item";

import {
  Container,
  ItemsDisplay,
  ItemsGrid,
  ItemsHeader,
} from "./styles/OrderPage.styles";
import OrderSummary from "./OrderSummary";

import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

const OrderPage: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await api.get<Item[]>("/product");
        setItems(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  if (loading) {
    // 👇 Full screen skeleton
    return (
      <Box
        sx={{
          padding: "2rem",
          height: "100vh",
          backgroundColor: "#f7f2ee", // or match your Container background
        }}
      >
        <Skeleton variant="text" width="30%" height={40} sx={{ mb: 2 }} />
        <Skeleton variant="rectangular" width="100%" height="70vh" />
      </Box>
    );
  }

  return (
    <OrderProvider>
      <Container>
        <ItemsDisplay>
          <ItemsHeader>Desserts</ItemsHeader>
          <ItemsGrid>
            {items.map((item: Item, index: number) => (
              <OrderItem item={item} key={`${item.name}${index}`} />
            ))}
          </ItemsGrid>
        </ItemsDisplay>
        <OrderSummary items={items} />
      </Container>
    </OrderProvider>
  );
};

export default OrderPage;
