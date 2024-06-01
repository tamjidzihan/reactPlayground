import apiClint from '../services/api-clint';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

// interface PostQuery {
//     userId: number | undefined;
//     page: number;
//     pageSize: number;
// }

interface PostQuery {
    pageSize: number;
}

const usePost = (query: PostQuery) => {

    return useInfiniteQuery<Post[], Error>({
        queryKey: ['posts', query],
        queryFn: ({ pageParam = 1 }) =>
            apiClint
                .get('/posts', {
                    params: {
                        _start: (pageParam - 1) * query.pageSize,
                        _limit: query.pageSize
                    }
                })
                .then(res => res.data),
        staleTime: 10 * 1000,
        retry: 3,
        keepPreviousData: true,
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.length > 0 ? allPages.length + 1 : undefined;
        }
    })




    // return useQuery<Post[], Error>({
    //     queryKey: ['posts', query],
    //     queryFn: () =>
    //         apiClint
    //             .get('/posts', {
    //                 params: {
    //                     _start: (query.page - 1) * query.pageSize,
    //                     _limit: query.pageSize
    //                 }
    //             })
    //             .then(res => res.data),
    //     staleTime: 10 * 1000,
    //     retry: 3,
    //     keepPreviousData: true
    // })

}

export default usePost
