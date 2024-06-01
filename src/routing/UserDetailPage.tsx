import { useParams } from "react-router-dom";

const UserDetailPage = () => {
  const prams = useParams()
  console.log(prams);

  return <p>User </p>;
};

export default UserDetailPage;
