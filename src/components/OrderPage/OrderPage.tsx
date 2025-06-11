import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import OrderItem from "./OrderItem";

import type { Item } from "../../types/item";

const Container = styled.div`
  display: flex;
  padding: 4rem;
  background: #fcf9f5;
  min-height: 100vh;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding: 0.25rem;
  }
`;

const ItemsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  padding: 1rem;
  row-gap: 1rem;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding: 0.25rem;
  }
`;

const ItemsDisplay = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: flex-start;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const ItemsHeader = styled.h2`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 2rem;
  font-weight: 400;
  @media (max-width: 1024px) {
    padding: 0 1rem;
  }
`;

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
    <Container>
      <ItemsDisplay>
        <ItemsHeader>Desserts</ItemsHeader>
        <ItemsGrid>
          {items.map((item: Item, index: number) => (
            <OrderItem item={item} key={`${item.name}${index}`}></OrderItem>
          ))}
        </ItemsGrid>
      </ItemsDisplay>
    </Container>
  );
};

export default OrderPage;
