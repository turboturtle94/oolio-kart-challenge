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

  return (
    <OrderProvider>
      <Container>
        <ItemsDisplay>
          <ItemsHeader>Desserts</ItemsHeader>
          <ItemsGrid>
            {loading
              ? Array.from({ length: 6 }).map((_, index) => (
                  <Box key={index}>
                    <Skeleton
                      variant="rectangular"
                      width="100%"
                      height={200}
                      sx={{ borderRadius: 2 }}
                    />
                    <Skeleton variant="text" width="80%" />
                    <Skeleton variant="text" width="60%" />
                  </Box>
                ))
              : items.map((item: Item, index: number) => (
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
