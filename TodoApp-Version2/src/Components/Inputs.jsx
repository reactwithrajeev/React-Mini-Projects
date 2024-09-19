// import React, { useState } from 'react';
import styles from './Inputs.module.css';

function Inputs({addBtnClick, nameRef , dateRef }) {
  return (
        <>
        <input 
        type="text" 
        ref={nameRef}
        className={styles.todoInput} />
        <input 
        type="date" 
        ref = {dateRef}
        className={styles.dateInput} />
        <button 

        onClick={addBtnClick}
        className={styles.addTodoBtn}>
        Add
        </button>
        </>
  )
}

export default Inputs