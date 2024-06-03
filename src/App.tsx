import { useReducer } from 'react';
import './App.css';
import PostList from './react-query/PostList';
import TodoForm from './react-query/TodoForm';
import TodoList from './react-query/TodoList';
import Counter from './state-management/Counter';
import LoginStatus from './state-management/LoginStatus';
import TaskList from './state-management/TaskList';
import taskListReducer from './state-management/reducers/taskListReducer';


function App() {
  const [tasks, dispatch] = useReducer(taskListReducer, [])

  return <>
    {/* <TodoForm />*/}
    {/*<TodoList /> */}
    {/* <PostList /> */}
    {/* <Counter /> */}
    {/* <TaskList /> */}
    <LoginStatus />

  </>;
}

export default App;
