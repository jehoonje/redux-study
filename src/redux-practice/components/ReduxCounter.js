import React from 'react';
import styles from './ReduxCounter.module.css';

const ReduxCounter = () => {

  return (
    <main className={styles.counter}>
      <h1>Redux Counter</h1>
      <div className={styles.value}>-- COUNTER VALUE --</div>
      <button>Toggle Counter</button>
    </main>
  );
};

export default ReduxCounter;
