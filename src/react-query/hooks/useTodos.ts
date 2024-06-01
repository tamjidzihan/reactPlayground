import { useQuery } from "@tanstack/react-query";
import apiClint from "../services/api-clint";

export interface Todo {
    id: number;
    title: string;
    userId: number;
    completed: boolean;
}

const useTodos = () => {
    // const fetchTodos = () =>
    //     apiClint
    //         .get<Todo[]>('/todos')
    //         .then(res => res.data)

    return useQuery<Todo[], Error>({
        queryKey: ['todos'],
        queryFn: () => apiClint.get<Todo[]>('/todos').then(res => res.data),
        staleTime: 10 * 1000
    })
}

export default useTodos
