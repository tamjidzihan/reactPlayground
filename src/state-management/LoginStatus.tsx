import { useReducer, useState } from "react";
import loginReducers from "./reducers/loginReducers";

const LoginStatus = () => {
  const [user, dispatch] = useReducer(loginReducers, '')

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a className="user-select-auto" onClick={() => dispatch({ type: 'LOGOUT' })}>
            Logout
          </a>
        </div >
      </>
    );
  return (
    <div>
      <a onClick={() => dispatch({ type: 'LOGIN', username: 'mosh.hamedani' })} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
