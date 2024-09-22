import React from 'react'
import styles from './Inputs.module.css';
import { useContext } from 'react';
import TodoItemContext from '../store/TodoItemsContext';

function Inputs() {
  let {nameRef , dateRef,addBtnClickHandle} = useContext(TodoItemContext);
  return (
    <>
        <input ref={nameRef} type="text"  className={styles.todoName} placeholder='Enter Your Todo Here...'/>
        <input ref ={dateRef} type="date"  className={styles.todoDate} />
        <button 
        className={styles.addBtn}
        onClick={()=>{addBtnClickHandle()}}
        >Add</button>
    </>
  )
}

export default Inputs