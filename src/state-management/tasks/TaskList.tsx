import useAuthStore from '../auth/authStore';
import useTaskStore from './taskStore';


const TaskList = () => {
  const { tasks, addTask, removeTask } = useTaskStore()
  const { user } = useAuthStore()


  return (
    <>
      <p className=' fw-bold'>Online Username: <br />{user}</p>
      <button
        onClick={() => addTask({ id: Date.now(), title: (user || 'No user') + ' : ' + Date.now() })}
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
              onClick={() => removeTask(task.id)}
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
