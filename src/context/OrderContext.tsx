import { useState, useContext, createContext, type ReactNode } from "react";

const OrderContext = createContext<
  | {
      totalItemsOrdered: Map<string, number>;
      settotalItemsOrdered: Function;
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

  return (
    <OrderContext
      value={{
        totalItemsOrdered,
        settotalItemsOrdered,
      }}
    >
      {children}
    </OrderContext>
  );
};
