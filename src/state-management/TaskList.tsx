import { useContext } from 'react';
import TaskContext from './contexts/tasksContext';
import AuthContext from './contexts/loginContext';


const TaskList = () => {
  const { tasks, taskDispatch } = useContext(TaskContext)
  const { status } = useContext(AuthContext)


  return (
    <>
      <p className=' fw-bold'>Username: <br />{status}</p>
      <button
        onClick={() => taskDispatch({
          type: 'ADD',
          task:
          {
            id: Date.now(),
            title: 'Task' + Date.now()
          }
        })}
        className="btn btn-primary my-3"
      >
        Add Task
      </button >
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span className="flex-grow-1">{task.title}</span>
            <button
              className="btn btn-outline-danger"
              onClick={() => taskDispatch({
                type: "DELETE",
                taskID: task.id
              })}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
