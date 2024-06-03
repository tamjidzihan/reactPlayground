import React from "react";
import { authAction } from "../reducers/loginReducers";


interface AuthContextType {
    status: string
    authDispatch: React.Dispatch<authAction>
}

const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);

export default AuthContext