import useAuthStore from "./authStore";

const LoginStatus = () => {

  const { user, login, logout } = useAuthStore()


  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a className="user-select-auto" onClick={() => logout()}>
            Logout
          </a>
        </div >
      </>
    );
  return (
    <div>
      <a onClick={() => login('mosh.hamedani')} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
