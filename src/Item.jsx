/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useState } from "react";

export const Item = ({
  itemImage,
  itemName,
  itemPrice,
  cartAmount,
  setCartAmount,
}) => {
  const [quantity, setQuantity] = useState(0);
  const handleClick = () => {
    setQuantity(quantity + 1);
    setCartAmount(cartAmount + itemPrice);
  };

  return (
    <>
      <ItemComponent>
        <img src={itemImage} alt="product-image" />
        <ItemName>{itemName}</ItemName>
        <ItemPrice>${itemPrice}</ItemPrice>
        <Quantity>
          <button onClick={handleClick}>
            Add to Cart {quantity > 0 ? `(${quantity})` : null}
          </button>
        </Quantity>
      </ItemComponent>
    </>
  );
};

const ItemComponent = styled.div`
  margin-top: 2rem;
  img {
    height: 200px;
    width: 200px;
  }
`;

const ItemName = styled.div`
  font-weight: bold;
  font-size: 1.5em;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
`;

const ItemPrice = styled(ItemName)``;

const Quantity = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 1rem;
  button {
    padding: 5px;
    background-color: white;
    border: 1px solid black;
    border-radius: 15px;
    cursor: pointer;
  }
`;

export default Item;
