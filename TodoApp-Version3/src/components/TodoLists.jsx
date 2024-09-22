import React from 'react'
import styles from './TodoLists.module.css';
import { useContext } from 'react';
import TodoItemContext from '../store/TodoItemsContext';

function TodoLists() {
    const {todoItemsList ,handleDeleteBtn} = useContext(TodoItemContext)
  return (
        <>
        {todoItemsList.map((todoItem,index)=> 
        
        <li className={styles.todoList}>
          <span>{todoItem.todoName}</span>
          <span>{todoItem.dueDate}</span>
          <button 
          onClick={()=>{handleDeleteBtn(index)}}
          className={styles.deleteBtn}>Delete</button>
        </li>)}
        </>
  )
}

export default TodoLists