import React from 'react'
import styles from './Buttons.module.css';

function Buttons({btnName , onclickBtn}) {
  return (
        <button 
        onClick={onclickBtn}
        className={styles.btn}>{btnName}</button>
  )
}

export default Buttons