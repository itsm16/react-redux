import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/TodoSlice';

function TodoInput() {
  const dispatch = useDispatch()
  const [task, setTask] = useState("");
  return (
    <div className='flex justify-center p-6'>
        <div className="border border-white p-2 mb-2 rounded w-[500px]">
            <div className="flex items-center justify-between">
                <input 
                type="text" 
                className="flex-1 p-2 mr-2 rounded text-white bg-inherit" 
                placeholder="Add a new task" 
                onChange={(e)=> setTask(e.target.value)}
                value={task}
                />
                <button className="border-2 border-white text-white font-bold py-1 px-4 rounded"
                onClick={() => {
                  dispatch(addTodo(task))
                  setTask("")
                  }}
                >
                Add
                </button>
            </div>
        </div>
    </div>
    
  );
}

export default TodoInput;
