import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <a href="https://www.primevideo.com/" target="_blank">
          <img
            className="checkout__ad"
            src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_NotApproved._TTW_.jpg"
          />
        </a>

        <div>
          <h3>Hello, {!user ? "please Sign In" : user?.email}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>

          {basket.map((item) => (
            <CheckoutProduct
              className="checkout__product"
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
