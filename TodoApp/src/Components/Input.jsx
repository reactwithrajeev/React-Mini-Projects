import React from 'react'
import styles from "./Input.module.css";

function Input({onInputChange}) {
  return (
    <input 
    type="text" 
    placeholder='Enter Your Todo Here ...'
    onKeyUp={onInputChange}  />
  )
}

export default Input