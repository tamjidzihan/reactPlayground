import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Incidunt, mollitia!
      </p>
      <Link className=" btn btn-outline-primary" to={'/users'}>All Users</Link>
      <Link className=" btn btn-outline-primary ms-2" to={'/contact'}>Contact</Link>

    </>
  );
};

export default HomePage;
