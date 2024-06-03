interface Task {
    id: number;
    title: string;
}

interface AddTask {
    type: "ADD";
    task: Task
}

interface Deletetask {
    type: "DELETE";
    taskID: number
}

type TaskAction = AddTask | Deletetask


const taskListReducer = (tasks: Task[], action: TaskAction): Task[] => {
    if (action.type === 'ADD') return [action.task, ...tasks]
    if (action.type === 'DELETE') return tasks.filter(t => t.id !== action.taskID)
    return tasks
}

export default taskListReducer
