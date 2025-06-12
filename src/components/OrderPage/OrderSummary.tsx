import { useState, useEffect } from "react";
import tree from "../../assets/tree.png";
import { useOrder } from "../../context/OrderContext";

import type { Order, Item as OrderedItem, Product } from "../../types/order";
import type { Item } from "../../types/item";

import {
  OrderSummaryContainer,
  SummaryCard,
  SummaryHeader,
  InfoContainer,
  ConfirmOrderButton,
} from "./OrderSummary.styles";

import Cart from "./Cart";

const OrderSummary = ({ items }: { items: Item[] }) => {
  const { totalItemsOrdered } = useOrder();
  const [orderSummary, setOrderSummary] = useState<Order>();

  const mapToProduct = (item: Item): Product => ({
    id: item.id,
    name: item.name,
    price: item.price,
    category: item.category,
  });

  const mapToOrderedItem = (item: Item, quantity: number): OrderedItem => ({
    productId: item.id,
    quantity,
  });

  const calculateTotalCost = (
    orderedItems: OrderedItem[],
    products: Product[]
  ): number => {
    const quantityMap = new Map(
      orderedItems.map((item) => [item.productId, item.quantity])
    );
    return products.reduce((total, product) => {
      const qty = quantityMap.get(product.id) ?? 0;
      return total + product.price * qty;
    }, 0);
  };

  const formOrderSummary = () => {
    const orderedItems: OrderedItem[] = [];
    const orderedProducts: Product[] = [];

    totalItemsOrdered.forEach((quantity, id) => {
      if (quantity > 0) {
        const product = items.find((item) => item.id === id);
        if (product) {
          orderedItems.push(mapToOrderedItem(product, quantity));
          orderedProducts.push(mapToProduct(product));
        }
      }
    });

    const summary: Order = {
      id: crypto.randomUUID(),
      items: orderedItems,
      products: orderedProducts,
      totalCost: calculateTotalCost(orderedItems, orderedProducts),
    };

    setOrderSummary(summary);
  };

  useEffect(() => {
    formOrderSummary();
  }, [totalItemsOrdered]);

  return (
    <OrderSummaryContainer>
      <SummaryCard>
        <SummaryHeader>Your Cart</SummaryHeader>
        {orderSummary && orderSummary.products ? (
          <Cart orderSummary={orderSummary}></Cart>
        ) : (
          <></>
        )}
        <InfoContainer>
          <img
            src={tree}
            alt="carbon-neutral"
            style={{ width: "1rem", height: "1rem" }}
          />
          This is carbon neutral delivery
        </InfoContainer>
        <ConfirmOrderButton>Confirm Order</ConfirmOrderButton>
      </SummaryCard>
    </OrderSummaryContainer>
  );
};

export default OrderSummary;
