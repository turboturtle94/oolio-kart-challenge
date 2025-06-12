import OrderConfirmation from "./OrderConfirmation";
import type { Order } from "../../types/order";
import type { Item } from "../../types/item";

import React from "react";
import styled from "styled-components";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  items: Item[];
  orderSummary: Order;
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const DialogBox = styled.div`
  background: white;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  padding: 1.5rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1001;

  @media (min-width: 768px) {
    width: 80%;
  }

  @media (min-width: 1024px) {
    width: 60%;
    max-width: 600px;
  }
`;

const Body = styled.div`
  font-size: 1rem;
  color: #555;
  margin-bottom: 1.5rem;
`;

const OrderConfirmationDialog = ({
  isOpen,
  onClose,
  items,
  orderSummary,
}: DialogProps) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <DialogBox>
        <Body>
          <OrderConfirmation
            orderSummary={orderSummary}
            items={items}
          ></OrderConfirmation>
        </Body>
      </DialogBox>
    </Overlay>
  );
};

export default OrderConfirmationDialog;
