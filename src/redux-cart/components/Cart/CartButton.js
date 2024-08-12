import React from "react";
import styles from './CartButton.module.css';
import { uiActions } from "../../store/ui-slice";
import { useDispatch, useSelector } from "react-redux";

const CartButton = () => {

  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  const dispatch = useDispatch();

  const toggleCartHandler = e => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className={styles.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={styles.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
