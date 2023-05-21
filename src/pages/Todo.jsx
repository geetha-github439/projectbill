import React from 'react'
import TodoList from './TodoList'
import { useState } from 'react';
import AddExpense from './AddExpense';

const Todo = () => {
    const [task,setTask] = useState("");
    const [todos,setTodos] = useState([]);
    
  
    const changeHandler = e =>{
      setTask(e.target.value)
    }
    const submitHandler = e =>{
      e.preventDefault();
      const newTodos = [...todos,task];
      setTodos(newTodos);
      setTask("");
    }
    const deleteHandler = (indexValue) =>{
      const newTodos = todos.filter((todo,index) => index!== indexValue);
      setTodos(newTodos);
    }
  
  return (
    <div>
         <center>
        <div className="card">
          <div className="card-body">
            <h5 className="todoname">Create new Groups</h5>
            <form onSubmit={submitHandler}>
              <input className='todoinput' type="text"  placeholder="enter group name" name="task" value={task} onChange={changeHandler} /> &nbsp;&nbsp;
              <button  className='todob' value="Add" name="Add"> Done</button>
            </form>
            <TodoList todolist={todos} deleteHandler={deleteHandler}/>
             <AddExpense todolist={todos}/>
          </div>
        </div>
      </center>
        
    </div>
  )
}

export default Todo