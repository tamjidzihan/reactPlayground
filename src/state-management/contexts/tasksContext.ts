import React from "react";
import { Task, TaskAction } from "../reducers/taskListReducer";

interface TaskContextType {
    tasks: Task[];
    taskDispatch: React.Dispatch<TaskAction>;
}


const TaskContext = React.createContext<TaskContextType>({} as TaskContextType);

export default TaskContext;