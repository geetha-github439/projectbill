import React from 'react'


const AddExpense = ({todolist}) => {
    
    
let count=1;

  return (
    <div>
            {todolist.map((todo,index) =>
            <div key={index}>
                <h5 className='groupnames'>{count++}{'      '}{todo}{'     '}</h5>
                
            </div>)} 


    </div>
  )
}

export default AddExpense