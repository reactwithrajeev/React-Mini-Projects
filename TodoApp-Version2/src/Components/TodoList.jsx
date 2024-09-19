import React from 'react';
import styles from './TodoList.module.css'

function TodoList({name, dueDate, handleDeleteBtn}) {
  return (
    <li className={styles.todoList}><span>{name}</span><span>{dueDate}</span><button onClick={handleDeleteBtn}className={styles.deleteBtn}>Delete</button></li>
  )
}

export default TodoList