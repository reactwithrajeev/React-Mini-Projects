import React from 'react';
import styles from './TodoButton.module.css';

function TodoButton({ handleButtonClick, buttonText }) {
  return (
    <button onClick={handleButtonClick} className={styles.todoBtn}>
      {buttonText}
    </button>
  );
}

export default TodoButton;
