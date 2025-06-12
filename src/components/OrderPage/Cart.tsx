import {
  CartEntryContainer,
  CartEntryDetail,
  CartTotalContainer,
  ItemName,
  ItemPrice,
  ItemQty,
  InfoContainer,
  ConfirmOrderButton,
  CouponButton,
  CouponInput,
  CouponContainer,
} from "./OrderSummary.styles";

import { IconButton, ButtonIcon } from "./OrderItem.styles";

import tree from "../../assets/tree.png";
import close from "../../assets/close.png";
import coupon from "../../assets/coupon.png";
import type { Order } from "../../types/order";
import { useOrder } from "../../context/OrderContext";
import { useState } from "react";
import OrderConfirmationDialog from "./OrderConfirmationDialog";
import type { Item } from "../../types/item";

const Cart = ({
  orderSummary,
  items,
}: {
  orderSummary: Order;
  items: Item[];
}) => {
  const { totalItemsOrdered, settotalItemsOrdered, applyCoupon } = useOrder();
  const [couponCode, setCouponCode] = useState("");
  const [open, setOpen] = useState(false);

  const confirmOrder = () => {
    setOpen(true);
  };

  const closeConfirmDialog = () => {
    setOpen(false);
  };

  const getItemQuantity = (id: string): number => {
    return orderSummary?.items.find((i) => i.productId === id)?.quantity ?? 0;
  };

  const removeItemsFromCart = (id: string) => {
    const newItemsOrdered = new Map(totalItemsOrdered);
    newItemsOrdered.set(id, 0);
    settotalItemsOrdered(newItemsOrdered);
  };

  const handleCoupon = () => {
    applyCoupon(couponCode);
    setCouponCode("");
  };

  return (
    <>
      {orderSummary.products.map((product) => (
        <CartEntryContainer key={product.id}>
          <CartEntryDetail>
            <ItemName>{product.name}</ItemName>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "center",
              }}
            >
              <ItemQty>{getItemQuantity(product.id)}x</ItemQty>
              <ItemPrice>
                @{product.price} ${product.price * getItemQuantity(product.id)}
              </ItemPrice>
            </div>
          </CartEntryDetail>
          <IconButton
            $borderColor="#c73b0d"
            onClick={() => {
              removeItemsFromCart(product.id);
            }}
          >
            <ButtonIcon src={close} alt="Remove" />
          </IconButton>
        </CartEntryContainer>
      ))}
      <CartTotalContainer>
        <span
          style={{ fontSize: "0.75rem", color: "#b7adac", fontWeight: 400 }}
        >
          Order Total
        </span>
        <span style={{ fontSize: "2rem", fontWeight: 500 }}>
          ${orderSummary?.totalCost.toFixed(2) ?? "0.00"}
        </span>
      </CartTotalContainer>
      <InfoContainer>
        <img
          src={tree}
          alt="carbon-neutral"
          style={{ width: "1rem", height: "1rem" }}
        />
        This is carbon neutral delivery
      </InfoContainer>
      <CouponContainer>
        <CouponInput
          type="text"
          placeholder="Apply coupon"
          onChange={(e) => {
            setCouponCode(e.target.value);
          }}
          value={couponCode || ""}
        />
        <CouponButton
          onClick={() => {
            handleCoupon();
          }}
        >
          <img src={coupon}></img>
        </CouponButton>
      </CouponContainer>
      <ConfirmOrderButton
        onClick={() => {
          confirmOrder();
        }}
      >
        Confirm Order
      </ConfirmOrderButton>
      <OrderConfirmationDialog
        isOpen={open}
        onClose={closeConfirmDialog}
        orderSummary={orderSummary}
        items={items}
      ></OrderConfirmationDialog>
    </>
  );
};

export default Cart;
