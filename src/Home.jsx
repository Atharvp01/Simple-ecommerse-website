import Item from "./Item";
import itemImage1 from "./assets/1.png";
import itemImage2 from "./assets/2.png";
import itemImage3 from "./assets/3.png";
import itemImage4 from "./assets/4.png";
import itemImage5 from "./assets/5.png";
import itemImage6 from "./assets/6.webp";
import itemImage7 from "./assets/7.webp";
import itemImage8 from "./assets/8.webp";
import styled from "styled-components";
import { useState } from "react";

const Home = () => {
  const [cartAmount, setCartAmount] = useState(0);
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Simple Ecommerse</h1>
        <ItemContainer>
          <ItemRow>
            <Item
              itemImage={itemImage1}
              itemName="Iphone"
              itemPrice={500}
              setCartAmount={setCartAmount}
            />
            <Item itemImage={itemImage2} itemName="Macbook" itemPrice="$999" />
            <Item itemImage={itemImage3} itemName="Camera" itemPrice="$999" />
          </ItemRow>
          <ItemRow>
            <Item
              itemImage={itemImage4}
              itemName="Jacket"
              itemPrice={200}
              setCartAmount={setCartAmount}
            />
            <Item
              itemImage={itemImage5}
              itemName="LED Strip Lights"
              itemPrice="$999"
            />
            <Item
              itemImage={itemImage6}
              itemName="Sweat Shirt"
              itemPrice="$999"
            />
          </ItemRow>
          <ItemRow>
            <Item itemImage={itemImage7} itemName="T-shirt" itemPrice="$999" />
            <Item itemImage={itemImage8} itemName="Cool Cap" itemPrice="$999" />
          </ItemRow>
        </ItemContainer>
        <h1>Cart Value: {cartAmount}</h1>
      </div>
    </>
  );
};

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const ItemRow = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Home;
