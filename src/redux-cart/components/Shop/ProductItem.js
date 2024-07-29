import React from "react";
import Card from '../UI/Card';
import styles from './ProductItem.module.css';
import { cartActions } from "../../store/cart-slice";
import { useDispatch } from "react-redux";

const ProductItem = ({description, id, price, title}) => {

  const dispatch = useDispatch();

  const addCartHandler = e => {
    dispatch(cartActions.addCartItem({
      id,
      title,
      quantity: 1,
      price,
      total: price 
    }));
  };

  return (
    <li className={styles.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={styles.price}>{price}</div>
        </header>
        <p>{description}</p>
        <div className={styles.actions}>
          <button onClick={addCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
