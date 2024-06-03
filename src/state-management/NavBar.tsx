import { useContext, useReducer } from 'react';
import LoginStatus from './LoginStatus';
import TaskContext from './contexts/tasksContext';
import loginReducers from './reducers/loginReducers';
import AuthContext from './contexts/loginContext';

const NavBar = () => {


  const { tasks } = useContext(TaskContext)
  console.log(tasks)
  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{tasks.length}</span>


      <LoginStatus />


    </nav >
  );
};

export default NavBar;
