import { useState, useContext, createContext, type ReactNode } from "react";

const OrderContext = createContext<
  | {
      totalItemsOrdered: Map<string, number>;
      settotalItemsOrdered: Function;
      coupon: string;
      applyCoupon: Function;
    }
  | undefined
>(undefined);

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrder must be used only within OrderContext");
  }
  return context;
};

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [totalItemsOrdered, settotalItemsOrdered] = useState<
    Map<string, number>
  >(new Map<string, number>());

  const [coupon, applyCoupon] = useState<string>("");

  return (
    <OrderContext
      value={{
        totalItemsOrdered,
        settotalItemsOrdered,
        coupon,
        applyCoupon,
      }}
    >
      {children}
    </OrderContext>
  );
};
