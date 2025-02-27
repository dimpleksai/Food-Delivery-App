import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { food_list, cartItems, removeFromCart, getCartTotal, url } =
    useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <>
                <div className="cart-items-title cart-items-item">
                  <img src={url + "/images/" + item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p className="cross" onClick={() => removeFromCart(item._id)}>
                    x
                  </p>
                </div>
                <hr />
              </>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${getCartTotal()}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery fee</p>
            <p>${getCartTotal() === 0 ? 0 : 2}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>
              <b>Total</b>
            </p>
            <p>
              <b>${getCartTotal() === 0 ? 0 : getCartTotal() + 2}</b>
            </p>
          </div>
          <button onClick={() => navigate("/order")}>
            Proceed to Checkout
          </button>
        </div>
        <div className="cart-promo-code">
          <div>
            <p>If you have a promo code enter here</p>
            <div className="cart-promo-code-input">
              <input type="text" placeholder="PROMO CODE" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
