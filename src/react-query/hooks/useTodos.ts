import { useQuery } from "@tanstack/react-query";
import apiClint from "../services/api-clint";

interface Todo {
    id: number;
    title: string;
    userId: number;
    completed: boolean;
}

const useTodos = () => {
    const fetchTodos = () =>
        apiClint
            .get<Todo[]>('/todos')
            .then(res => res.data)

    return useQuery<Todo[], Error>({
        queryKey: ['todos'],
        queryFn: fetchTodos
    })
}

export default useTodos
