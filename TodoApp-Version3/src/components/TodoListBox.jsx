import React from 'react'
import styles from './TodoListBox.module.css';
import TodoLists from './TodoLists';

function TodoListBox() {
  return (
    <ul className={styles.todoListBox}>
      <TodoLists/>
    </ul>
  )
}

export default TodoListBox