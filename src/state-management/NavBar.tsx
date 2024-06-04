import { useContext } from 'react';
import LoginStatus from './auth/LoginStatus';
import useTaskStore from './tasks/taskStore';

const NavBar = () => {
  const { tasks } = useTaskStore()

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{tasks.length}</span>


      <LoginStatus />


    </nav >
  );
};

export default NavBar;
