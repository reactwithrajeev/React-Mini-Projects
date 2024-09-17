import React, { useState } from 'react'
import styles from './App.module.css';
import Display from './Components/Display';
import ButtonContainer from './Components/ButtonContainer';

function App() {

  let buttonsName = ['C', "1", "2", "+", "3", "4", "-", "5", "6", "*", "7", "8", "/", "=", "9", "0", "."];
  let [displayval, setDisplayval] = useState("");

  let onBtnClick = (value)=>{
      if(value === 'C'){
        setDisplayval("");
      }else if(value === "="){
          try{
            setDisplayval(eval(displayval));
          }catch(e){
            setDisplayval("error");
          }
      }else{
        setDisplayval(displayval + value);
      }

  }


  return (
    <div className={styles.calculatorContainer}>
      <Display displayval = {displayval}/>
      <ButtonContainer buttonsName = {buttonsName} onBtnClick = {onBtnClick}/>  
    </div>
  )
}

export default App