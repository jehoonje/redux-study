import React from "react";
import Card from '../UI/Card';
import styles from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from "react-redux";

const Cart = () => {

  const cartItems = useSelector(state => state.cart.cartItems);
  // console.log('cartList: ', cartItems);

  return (
    <Card className={styles.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map(item => <CartItem key={item.id} item={item}/>)}
      </ul>
    </Card>
  );
};

export default Cart;
