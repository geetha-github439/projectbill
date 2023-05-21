import React from 'react'
import { Link } from 'react-router-dom';


const TodoList = ({todolist,deleteHandler}) => {

let count=1;


    return (
        <div>
            {todolist.map((todo,index) =>
            <div key={index}>
                <h5 className='groupnames'>{count++}{'      '}{todo}{'     '}
                <button  classNmae='deleteb' onClick={() => deleteHandler(index)}>Delete</button></h5>


            </div>)}
           <Link to='/AddExpense' ><button className='addexb'>Add expenses</button></Link>
           
           {/* <Todo  todotask={e.target.value} e={value}/> */}
        </div>
    )
}

export default TodoList