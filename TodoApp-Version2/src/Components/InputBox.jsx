import React from 'react';
import styles from './InputBox.module.css';
import Inputs from './Inputs';

function InputBox({handleAddClickBtn, nameRef , dateRef , }) {
  return (
    <div className={styles.inputBox}>
        <Inputs 
          nameRef = {nameRef} 
          dateRef = {dateRef}
          addBtnClick ={handleAddClickBtn}/>
    </div>
  )
}

export default InputBox