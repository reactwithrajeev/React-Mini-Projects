import React, { useState } from 'react';
import styles from './App.module.css';
import AppName from "./Components/AppName";
import Input from './Components/Input';
import ListGroup from './Components/ListGroup';

function App() {
  const [todoItems, setTodoItems] = useState([
    { text: 'Buy Milk', bought: false, buttonText: 'Mark Done' },
    { text: 'Learn Python', bought: false, buttonText: 'Mark Done' },
    { text: 'Take Breakfast', bought: false, buttonText: 'Mark Done' },
  ]);

  function removeTodo(index) {
    const newTodoList = todoItems.filter((_, i) => i !== index);
    setTodoItems(newTodoList);
  }

  function handleButtonClick(index) {
    const updatedTodos = todoItems.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          bought: !item.bought,
          buttonText: item.bought ? 'Mark Done' : 'Remove', 
        };
      }
      return item;
    });
    setTodoItems(updatedTodos);
  }

  function onInputChange(event) {
    if (event.key === 'Enter') {
      const newTodoItem = event.target.value;
      if (newTodoItem.trim()) {
        setTodoItems([...todoItems, { text: newTodoItem, bought: false, buttonText: 'Mark Done' }]);
      }
      event.target.value = "";
    }
  }

  return (
    <div className={styles.todoContainer}>
      <AppName />
      <Input onInputChange={onInputChange} />
      <ListGroup todoItems={todoItems} handleButtonClick={handleButtonClick} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
