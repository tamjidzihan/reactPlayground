import apiClint from '../services/api-clint';
import { useQuery } from '@tanstack/react-query';

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

interface PostQuery {
    userId: number | undefined;
    page: number;
    pageSize: number;
}

const usePost = (query: PostQuery) => {

    return useQuery<Post[], Error>({
        queryKey: ['posts', query],
        queryFn: () =>
            apiClint
                .get('/posts', {
                    params: {
                        _start: (query.page - 1) * query.pageSize,
                        _limit: query.pageSize
                    }
                })
                .then(res => res.data),
        staleTime: 10 * 1000,
        retry: 3,
        keepPreviousData: true
    })

}

export default usePost
