import { useReducer, useState } from 'react';
import counterReducers from './reducers/counterReducers';

const Counter = () => {
  const [value, dispatch] = useReducer(counterReducers, 0)

  return (
    <div className=' container'>
      <p>Counter:  {value}</p>
      <div>
        <button
          onClick={() => dispatch({ type: 'INCREMENT' })}
          className="btn btn-primary mx-1"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch({ type: 'DECREMENT' })}
          className="btn btn-primary mx-1"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch({ type: 'RESET' })}
          className="btn btn-primary mx-1"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
