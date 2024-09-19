import React, { useState, useRef } from 'react';
import styles from './App.module.css'
import AppName from './Components/AppName';
import InputBox from './Components/InputBox';
import TodoListBox from './Components/TodoListBox';

function App() {

  

  let [todoListItem , setTodoListItem] = useState([]);

  let nameRef = useRef();
  let dateRef = useRef();

  const handleAddClickBtn = ()=>{
    // console.log("Clicked")
    let newName = nameRef.current.value;
    let newDate = dateRef.current.value;
    let newTodoListItem = {name:newName, dueDate:newDate};
    if(newName && newDate){
      setTodoListItem([...todoListItem , newTodoListItem]);
      nameRef.current.value = ""
      dateRef.current.value = "";
      nameRef.current.focus();

    }else{
      alert("Both inputs Are Required")
    }

  }

    function handleDeleteBtn (index){
     let removedItem =  todoListItem.filter((_,i) => i !== index);
     setTodoListItem(removedItem)
    //  console.log(removedItem)

    }

  return (
    <div className={styles.todoContainer}>
        <AppName />
        <InputBox 
        handleAddClickBtn = {handleAddClickBtn}
        nameRef = {nameRef}
        dateRef = {dateRef}

         />
        <TodoListBox 
        handleDeleteBtn = {handleDeleteBtn}
        todoListItems = {todoListItem}/>
    </div>
  )
}

export default App