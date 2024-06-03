import { Link } from "react-router-dom";

const UserListPage = () => {
  const users = [
    { id: 1, name: 'Mosh' },
    { id: 2, name: 'John' },
    { id: 3, name: 'Alice' },
  ];
  return (
    <ul className="list-group">
      {users.map((user) => (
        <li className="list-group-item" key={user.id}>
          <Link className="nav-link" to={`/userspage/${user.id}/${user.name}`}>{user.name}</Link>
        </li>
      ))
      }
    </ul >
  );
};

export default UserListPage;
