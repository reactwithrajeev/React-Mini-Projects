import React from 'react'
import styles from '../Components/ButtonContainer.module.css';
import Buttons from './Buttons';

function ButtonContainer({buttonsName , onBtnClick}) {

  return (
<div className={styles.buttonContainer}>
    {buttonsName.map(btnName => <Buttons btnName = {btnName} onclickBtn = {()=>onBtnClick(btnName)}/>)}
      </div>
  )
}

export default ButtonContainer