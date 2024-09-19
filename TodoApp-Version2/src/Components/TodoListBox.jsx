import React from 'react';
import styles from './TodoListBox.module.css';
import TodoList from './TodoList';

function TodoListBox({todoListItems, handleDeleteBtn}) {
  return (
    <ul className={styles.todolistBox}>
      {todoListItems.map((items,index)=>
      <TodoList 
      handleDeleteBtn = {()=>handleDeleteBtn(index)}
      name = {items.name}
      dueDate = {items.dueDate}
      />)}
    </ul>
  )
}

export default TodoListBox