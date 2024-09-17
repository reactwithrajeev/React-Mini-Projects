import React from 'react'
import styles from '../Components/Display.module.css';

function Display({displayval}) {
  return (
    <input 
    type="text" 
    className={styles.display} 
    placeholder='00' 
    value={displayval}
    readOnly/>
  )
}

export default Display