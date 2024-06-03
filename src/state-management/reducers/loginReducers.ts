interface LoginAction {
    type: 'LOGIN';
    username: string
}

interface LogoutAction {
    type: 'LOGOUT'
}

export type authAction = LoginAction | LogoutAction

const loginReducers = (status: string, action: authAction): string => {
    if (action.type === 'LOGIN') return action.username;
    if (action.type === 'LOGOUT') return '';
    return status

}

export default loginReducers
