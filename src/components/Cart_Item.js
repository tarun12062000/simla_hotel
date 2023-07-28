
import React from 'react';
import styles from '../Nav.module.css';

const CartItems = ({ cartItems, onClose }) => {
  return (
    <div className={styles.cartItemsOverlay}>
      <div className={styles.cartItems}>
        <div className={styles.cartItemsHeader}>
          <h2>Cart Items</h2>
          <button onClick={onClose}>Close</button>
        </div>
        <ul className={styles.cartItemsList}>
          {cartItems.map((item, index) => (
            <li key={index}>
              <p>{item.text}</p>
              <p>Prize: {item.prize}</p>
            </li>
          ))}
        </ul>
      </div>
      <button></button>
    </div>
  );
};

export default CartItems;
