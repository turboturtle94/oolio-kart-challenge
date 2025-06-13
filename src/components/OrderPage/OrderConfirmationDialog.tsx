import OrderConfirmation from "./OrderConfirmation";
import type { ConfirmDialogProps } from "../../types/order";

import { Overlay, DialogBox, Body } from "./styles/OrderConfirmation.styles";

import React from "react";

const OrderConfirmationDialog = ({
  isOpen,
  onClose,
  items,
  orderSummary,
}: ConfirmDialogProps) => {
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
