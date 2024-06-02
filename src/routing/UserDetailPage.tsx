import { useLocation, useParams, useSearchParams } from "react-router-dom";


const UserDetailPage = () => {
  type user = {
    id: string;
    name: string;
  }

  const prams = useParams<user>()
  const [searchParams, setSearchParams] = useSearchParams()
  console.log(searchParams.toString());
  const location = useLocation()
  console.log(location)


  return <>
    <p>User Name : {prams.name}</p>
    <p>User Id : {prams.id}</p>
  </>;
};

export default UserDetailPage;
