import React from 'react';
import styles from './App.module.css';
import AppName from './components/AppName';
import InputBox from './components/InputBox';
import TodoListBox from './components/TodoListBox';
import TodoItemContext from './store/TodoItemsContext';
import { useState, useRef } from 'react';

function App() {
  let [todoItemsList , setTodoItemsList] = useState([])

  let nameRef = useRef();
  let dateRef = useRef();

  function addBtnClickHandle(){
    let newname = nameRef.current.value;
    let newDate = dateRef.current.value;
    let newTodoItemsList = {todoName:newname , dueDate:newDate};
    setTodoItemsList([...todoItemsList , newTodoItemsList]);

    nameRef.current.value = "";
    dateRef.current.value = "";

  }


  function handleDeleteBtn(index){
    let removedItems = todoItemsList.filter((_,i)=> i !== index);
    // console.log(removedItems)
    setTodoItemsList(removedItems);
  }

  let contextValue = {
    todoItemsList,
    setTodoItemsList,
    nameRef,
    dateRef,
    addBtnClickHandle,
    handleDeleteBtn,




  }
  return (
    <TodoItemContext.Provider value ={contextValue}>
    <div className={styles.todoContainer}>
      <AppName/>
      <InputBox/>
      <TodoListBox/>
    </div>
    </TodoItemContext.Provider>
  )
}

export default App