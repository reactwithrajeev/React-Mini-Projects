import React from 'react';
import styles from './ListGroup.module.css';
import ListItems from '../Components/ListItems';

function ListGroup({ todoItems, handleButtonClick, removeTodo }) {
  return (
    <ul className={`list-group ${styles.todolistContainer}`}>
      {todoItems.map((todoItem, index) => (
        <ListItems
          key={index} 
          todoItem={todoItem} 
          handleButtonClick={() => handleButtonClick(index)} 
          removeTodo={() => removeTodo(index)} 
        />
      ))}
    </ul>
  );
}

export default ListGroup;
