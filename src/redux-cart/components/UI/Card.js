import React from "react";
import styles from './Card.module.css';

const Card = ({children, className}) => {
  return (
    <section
      className={`${styles.card} ${className ? className : ''}`}
    >
      {children}
    </section>
  );
};

export default Card;
