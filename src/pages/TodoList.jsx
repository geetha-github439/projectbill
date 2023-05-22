import React from 'react'
import { Link } from 'react-router-dom';


const TodoList = ({todolist,deleteHandler}) => {
   

let count=1;


    return (
        <div>
            <h1>
            
            {todolist.map((todo,index) =>
            <div key={index}>
                <a href="./AddExpense"><h5 className='groupnames'>{count++}{'      '}{todo}{'     '}</h5></a>
                <button  className='deleteb' onClick={() => deleteHandler(index)}>Delete</button>
                


           
           
           {/* <Todo  todotask={e.target.value} e={value}/> */}
        </div>
    )
}
</h1>
<Link to='/addexpense' ><button className='addexb'>Add expenses</button></Link>
</div>
    )
}

export default TodoList

    
    