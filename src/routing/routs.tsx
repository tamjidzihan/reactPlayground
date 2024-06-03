import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import UserListPage from "./UserListPage";
import ContactPage from "./ContactPage";
import UserDetailPage from "./UserDetailPage";
import Layout from "./Layout";
import UsersPage from "./UsersPage";
import ErrorPage from "./ErrorPage";
import LoginPage from "./LoginPage";
import PrivateRouts from "./PrivateRouts";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            // { path: '', element: <HomePage /> },
            { index: true, element: <HomePage /> },
            { path: 'login', element: <LoginPage /> },
            { path: 'contact', element: <ContactPage /> },

            // <<<<<<Private Routes>>>>>>
            {
                element: <PrivateRouts />,
                children: [
                    {
                        path: 'userspage',
                        element: <UsersPage />,
                        children: [
                            { path: ':id/:name', element: <UserDetailPage /> }
                        ]
                    },
                    { path: 'users', element: <UserListPage /> },

                ]
            }
        ]
    }

])

export default router