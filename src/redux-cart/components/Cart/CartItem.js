import React from "react";
import styles from './CartItem.module.css';
import { cartActions } from "../../store/cart-slice";
import { useDispatch } from "react-redux";

const CartItem = ({item}) => {

  const dispatch = useDispatch();

  const { title, quantity, total, price, id } = item;

  const addCartHandler = e => {
    dispatch(cartActions.addCartItem(item));
  };

  const minusCartHandler = e => {
    dispatch(cartActions.minusCartItem(item));
  };

  return (
    <li className={styles.item}>
      <header>
        <h3>{title}</h3>
        <div className={styles.price}>
          {total}{' '}
          <span className={styles.itemprice}>({price}/item)</span>
        </div>
      </header>
      <div className={styles.details}>
        <div className={styles.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={styles.actions}>
          <button onClick={minusCartHandler}>-</button>
          <button onClick={addCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
