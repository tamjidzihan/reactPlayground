import { useReducer } from 'react';
import './App.css';
import PostList from './react-query/PostList';
import TodoForm from './react-query/TodoForm';
import TodoList from './react-query/TodoList';
import Counter from './state-management/Counter';
import LoginStatus from './state-management/LoginStatus';
import TaskList from './state-management/TaskList';
import taskListReducer from './state-management/reducers/taskListReducer';
import NavBar from './state-management/NavBar';
import HomePage from './state-management/HomePage';
import TaskContext from './state-management/contexts/tasksContext';
import AuthContext from './state-management/contexts/loginContext';
import loginReducers from './state-management/reducers/loginReducers';


function App() {
  const [status, authDispatch] = useReducer(loginReducers, '')
  const [tasks, taskDispatch] = useReducer(taskListReducer, [])


  return <>
    {/* <TodoForm />*/}
    {/*<TodoList /> */}
    {/* <PostList /> */}
    {/* <Counter /> */}
    {/* <TaskList /> */}
    {/* <LoginStatus /> */}

    <AuthContext.Provider value={{ status, authDispatch }}>
      <TaskContext.Provider value={{ tasks, taskDispatch }}>
        <NavBar />
        <HomePage />
      </TaskContext.Provider>
    </AuthContext.Provider>
  </>;
}

export default App;
