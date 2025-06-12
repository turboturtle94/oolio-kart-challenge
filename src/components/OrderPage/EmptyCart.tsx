import {
  EmptyCartContainer,
  EmptyCartImage,
  EmptyCartText,
} from "./OrderSummary.styles";
import emptycart from "../../assets/emptycart.png";

const EmptyCart = () => {
  return (
    <EmptyCartContainer>
      <EmptyCartImage src={emptycart}></EmptyCartImage>
      <EmptyCartText>Your added items will appear here</EmptyCartText>
    </EmptyCartContainer>
  );
};

export default EmptyCart;
