import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../features/TodoSlice';

function Task({ id, name = "Todo" }) {
  const dispatch = useDispatch();

  return (
    <div className="border border-white p-2 mb-2 rounded w-[500px] ">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <label htmlFor={id} className="text-white cursor-pointer">{name}</label>
        </div>
        <div>
          <button className="border-2 text-white font-bold py-1 px-2 rounded mx-1">Edit</button>
          <button className="border-2 text-white font-bold py-1 px-2 rounded mx-1"
          onClick={() => dispatch(deleteTodo(id))}
          >Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Task;
