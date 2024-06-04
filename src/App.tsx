import { useReducer } from 'react';
import './App.css';
import PostList from './react-query/PostList';
import TodoForm from './react-query/TodoForm';
import TodoList from './react-query/TodoList';
import Counter from './state-management/counter/Counter';
import LoginStatus from './state-management/auth/LoginStatus';
import NavBar from './state-management/NavBar';
import HomePage from './state-management/HomePage';


function App() {

  return <>
    {/* <TodoForm />*/}
    {/*<TodoList /> */}
    {/* <PostList /> */}
    {/* <Counter /> */}
    {/* <TaskList /> */}
    {/* <LoginStatus /> */}

    <NavBar />
    <HomePage />


  </>;
}

export default App;
