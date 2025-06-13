import { useState, useEffect } from "react";
import { useOrder } from "../../context/OrderContext";

import type { Order, Item as OrderedItem, Product } from "../../types/order";
import type { Item } from "../../types/item";

import {
  OrderSummaryContainer,
  SummaryCard,
  SummaryHeader,
} from "./styles/OrderSummary.styles";

import Cart from "./Cart";
import EmptyCart from "./EmptyCart";

const OrderSummary = ({ items }: { items: Item[] }) => {
  const { totalItemsOrdered, coupon } = useOrder();
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
      couponCode: "",
      id: crypto.randomUUID(),
      items: orderedItems,
      products: orderedProducts,
      totalCost: calculateTotalCost(orderedItems, orderedProducts),
    };

    setOrderSummary(summary);
  };

  const handleCouponCode = (code: string) => {
    switch (code.toUpperCase()) {
      case "HAPPYHOURS":
        applyHappyHours(code);
        break;
      case "BUYGETONE":
        applyBuyGetOne(code);
        break;
      default:
        code && alert("Invalid coupon code");
    }
  };

  const applyHappyHours = (code: string) => {
    const newSummary = { ...orderSummary } as Order;
    const currentTotal = orderSummary?.totalCost as number;
    const discountedTotal = currentTotal * (18 / 100);
    newSummary.totalCost = newSummary.totalCost - discountedTotal;
    newSummary.couponCode = code;
    setOrderSummary(newSummary);
  };

  const applyBuyGetOne = (code: string) => {
    const newSummary = { ...orderSummary } as Order;
    const lowestPricedItem = items.sort(
      (a, b) => a.price - b.price
    )[0] as Product;
    newSummary.items.push({ productId: lowestPricedItem.id, quantity: 1 });
    newSummary.products.push({
      ...lowestPricedItem,
      price: 0,
    });
    newSummary.couponCode = code;
    setOrderSummary(newSummary);
  };

  useEffect(() => {
    formOrderSummary();
  }, [totalItemsOrdered]);

  useEffect(() => {
    handleCouponCode(coupon);
  }, [coupon]);

  return (
    <OrderSummaryContainer>
      <SummaryCard>
        <SummaryHeader>
          Your Cart ({orderSummary?.products.length})
        </SummaryHeader>
        {orderSummary && orderSummary.products.length > 0 ? (
          <Cart orderSummary={orderSummary} items={items}></Cart>
        ) : (
          <EmptyCart></EmptyCart>
        )}
      </SummaryCard>
    </OrderSummaryContainer>
  );
};

export default OrderSummary;
