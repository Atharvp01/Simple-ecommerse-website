import Navbar from "./Navbar";
import { ShopContext } from "./ShopContext";
import { useContext } from "react";
import CartItem from "./CartItem";
import styled from "styled-components";

const Cart = () => {
  const HEADING = "Your Cart Item's";
  const { quantity, cartAmount } = useContext(ShopContext);

  return (
    <>
      <Navbar />
      <h1 style={{ textAlign: "center", marginTop: "2rem" }}>{HEADING}</h1>
      <CartContainer>
        {Object.keys(quantity).map(
          (key) => quantity[key] > 0 && <CartItem ItemId={key} />
        )}
      </CartContainer>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Sub-Total: ${cartAmount}
      </h2>
    </>
  );
};

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;

export default Cart;
