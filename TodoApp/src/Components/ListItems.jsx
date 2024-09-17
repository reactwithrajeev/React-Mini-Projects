import React from 'react';
import styles from './ListItems.module.css';
import TodoButton from "../Components/TodoButton";

function ListItems({ todoItem, handleButtonClick, removeTodo }) {
  return (
    <li className={`${styles.todoListItems} ${todoItem.bought ? styles.active : ''}`}>
      <span>{todoItem.text}</span>
      <TodoButton
        handleButtonClick={todoItem.bought ? removeTodo : handleButtonClick} 
        buttonText={todoItem.buttonText}
        key={"todoBtn"}
      />
    </li>
  );
}

export default ListItems;
