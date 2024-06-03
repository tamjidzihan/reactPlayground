import { useContext, useReducer, useState } from "react";
import loginReducers from "./reducers/loginReducers";
import AuthContext from "./contexts/loginContext";

const LoginStatus = () => {

  const { status, authDispatch } = useContext(AuthContext)

  if (status)
    return (
      <>
        <div>
          <span className="mx-2">{status}</span>
          <a className="user-select-auto" onClick={() => authDispatch({ type: 'LOGOUT' })}>
            Logout
          </a>
        </div >
      </>
    );
  return (
    <div>
      <a onClick={() => authDispatch({ type: 'LOGIN', username: 'mosh.hamedani' })} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
