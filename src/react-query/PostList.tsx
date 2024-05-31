import React, { useState } from 'react';
import usePost from './hooks/usePost';

const PostList = () => {
  const [userId, setUserId] = useState<number>()
  const pageSize = 10
  const [page, setPage] = useState(1)
  const { data: posts, isLoading, error } = usePost({ userId, page, pageSize })
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setUserId(parseInt(event.target.value))
  }

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p>Loading Posts...</p>

  return (
    <>



      <ul className="list-group">
        {posts?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.id}. {post.title}
          </li>
        ))}
      </ul>

      <button
        className="btn btn-primary my-3"
        disabled={page === 1}
        onClick={() =>
          setPage(page - 1)
        }
      >Previous</button>

      <button
        className="btn btn-primary my-3 ms-2"
        onClick={() =>
          setPage(page + 1)
        }
      >Next</button>

      {/* <select
        className="form-select mb-3"
        aria-label="Default select example"
        onChange={(event) => handleChange(event)}
        value={userId}
      >
        <option value="">Select User</option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select> */}
    </>
  );
};

export default PostList;
