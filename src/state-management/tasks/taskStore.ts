import { create } from "zustand";

interface Task {
    id: number;
    title: string;
}

interface TaskStore {
    tasks: Task[];
    addTask: (task: Task) => void;
    removeTask: (taskID: number) => void;
}

const useTaskStore = create<TaskStore>(set => ({
    tasks: [],
    addTask: (task: Task) => set(state => ({ tasks: [task, ...state.tasks] })),
    removeTask: (taskID: number) => set(state => ({
        tasks: state.tasks.filter(t => t.id !== taskID)
    }))
}))

export default useTaskStore;