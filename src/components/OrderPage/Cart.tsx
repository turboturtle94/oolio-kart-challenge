import {
  CartEntries,
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
  ItemNameGroup,
} from "./styles/OrderSummary.styles";

import { IconButton, ButtonIcon } from "./styles/OrderItem.styles";

import tree from "../../assets/tree.png";
import close from "../../assets/close.png";
import coupon from "../../assets/coupon.png";
import type { Order } from "../../types/order";
import { useOrder } from "../../context/OrderContext";
import { useState } from "react";
import OrderConfirmationDialog from "./OrderConfirmationDialog";
import type { Item } from "../../types/item";

import api from "../../lib/axios";

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
  const [confirmedOrder, setConfirmedOrder] = useState<Order>(orderSummary);
  const confirmOrder = async () => {
    try {
      await createOrder();
      setConfirmedOrder(orderSummary);
      setOpen(true);
    } catch (e) {
      alert("Order failed!");
    }
  };

  const createOrder = async () => {
    api.post("/order", orderSummary, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const closeConfirmDialog = () => {
    settotalItemsOrdered(new Map<string, number>());
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
      <CartEntries>
        {orderSummary.products.map((product) => (
          <CartEntryContainer key={product.id}>
            <CartEntryDetail>
              <ItemName>{product.name}</ItemName>
              <ItemNameGroup
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                }}
              >
                <ItemQty>{getItemQuantity(product.id)}x</ItemQty>
                <ItemPrice>
                  <pre style={{ tabSize: 3 }}>
                    @{product.price} $
                    {product.price * getItemQuantity(product.id)}
                  </pre>
                </ItemPrice>
              </ItemNameGroup>
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
      </CartEntries>
      <CartTotalContainer>
        <span
          style={{ fontSize: "0.75rem", color: "#b7adac", fontWeight: 400 }}
        >
          Order Total
        </span>
        <span style={{ fontSize: "1.5rem", fontWeight: 500 }}>
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
        onClick={async () => {
          await confirmOrder();
        }}
      >
        Confirm Order
      </ConfirmOrderButton>
      <OrderConfirmationDialog
        isOpen={open}
        onClose={closeConfirmDialog}
        orderSummary={confirmedOrder}
        items={items}
      ></OrderConfirmationDialog>
    </>
  );
};

export default Cart;
