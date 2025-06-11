import React, { useEffect, useState } from "react";
import axios from "axios";

import OrderItem from "./OrderItem";

import type { Item } from "../../types/item";

import styled from "styled-components";

import close from "../../assets/close.png";
import tree from "../../assets/tree.png";

import {
  Container,
  ItemsDisplay,
  ItemsGrid,
  ItemsHeader,
} from "./OrderPage.styles";

const OrderSummaryContainer = styled.div`
  display: flex;
  padding: 1rem;
  width: 30%;
  @media (max-width: 1024px) {
    width: 100%;
    padding: 0.25rem;
  }
`;

const SummaryCard = styled.div`
  width: 100%;
  min-height: 50%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  background-color: white;

  @media (max-width: 1024px) {
    height: 30%;
  }

  @media (max-width: 768px) {
    height: auto;
  }
`;

const SummaryHeader = styled.h1`
  color: #bc7964;
  font-weight: 500;
  padding: 0.5rem;
`;

const CartEntryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px solid #f3f3f3;
  align-items: center;
  padding: 0.5rem;
`;

const CartEntryDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const CartTotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const CartInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: #fbf7f4;
  font-size: 0.75rem;
  font-weight: 600;
  gap: 0.5rem;
`;

const ConfirmOrderButton = styled.button`
  width: 100%;
  height: 3rem;
  background-color: #c73b0d;
  color: white;
  border-radius: 1.5rem;
  border: none;
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
      <OrderSummaryContainer>
        <SummaryCard>
          <SummaryHeader>Your Cart</SummaryHeader>
          <CartEntryContainer>
            <CartEntryDetail>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "#716A67",
                  fontWeight: 600,
                }}
              >
                Classic Tiramisu
              </div>
              <div
                style={{ display: "flex", gap: "1rem", alignItems: "center" }}
              >
                <span
                  style={{
                    fontSize: "1rem",
                    color: "#bc7964",
                    fontWeight: 500,
                  }}
                >
                  1x
                </span>
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "#b7adac",
                    fontWeight: 400,
                  }}
                >
                  @5.50 5.50
                </span>
              </div>
            </CartEntryDetail>
            <img src={close} style={{ width: "1rem", height: "1rem" }}></img>
          </CartEntryContainer>
          <CartEntryContainer>
            <CartEntryDetail>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "#716A67",
                  fontWeight: 600,
                }}
              >
                Classic Tiramisu
              </div>
              <div
                style={{ display: "flex", gap: "1rem", alignItems: "center" }}
              >
                <span
                  style={{
                    fontSize: "1rem",
                    color: "#bc7964",
                    fontWeight: 500,
                  }}
                >
                  1x
                </span>
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "#b7adac",
                    fontWeight: 400,
                  }}
                >
                  @5.50 5.50
                </span>
              </div>
            </CartEntryDetail>
            <img src={close} style={{ width: "1rem", height: "1rem" }}></img>
          </CartEntryContainer>
          <CartEntryContainer>
            <CartEntryDetail>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "#716A67",
                  fontWeight: 600,
                }}
              >
                Classic Tiramisu
              </div>
              <div
                style={{ display: "flex", gap: "1rem", alignItems: "center" }}
              >
                <span
                  style={{
                    fontSize: "1rem",
                    color: "#bc7964",
                    fontWeight: 500,
                  }}
                >
                  1x
                </span>
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "#b7adac",
                    fontWeight: 400,
                  }}
                >
                  @5.50 5.50
                </span>
              </div>
            </CartEntryDetail>
            <img src={close} style={{ width: "1rem", height: "1rem" }}></img>
          </CartEntryContainer>
          <CartTotalContainer>
            <span
              style={{
                fontSize: "0.75rem",
                color: "#b7adac",
                fontWeight: 400,
              }}
            >
              Order Total
            </span>
            <span
              style={{
                fontSize: "2rem",
                fontWeight: 500,
              }}
            >
              $46.50
            </span>
          </CartTotalContainer>
          <CartInfoContainer>
            <img src={tree} style={{ width: "1rem", height: "1rem" }}></img>
            This is carbon neutral delivery
          </CartInfoContainer>
          <ConfirmOrderButton>Confirm Order</ConfirmOrderButton>
        </SummaryCard>
      </OrderSummaryContainer>
    </Container>
  );
};

export default OrderPage;
