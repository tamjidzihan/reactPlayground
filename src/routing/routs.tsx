import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import UserListPage from "./UserListPage";
import ContactPage from "./ContactPage";
import UserDetailPage from "./UserDetailPage";
import Layout from "./Layout";
import UsersPage from "./UsersPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            // { path: '', element: <HomePage /> },
            { index: true, element: <HomePage /> },
            {
                path: 'userspage',
                element: <UsersPage />,
                children: [
                    { path: ':id/:name', element: <UserDetailPage /> }
                ]
            },
            { path: 'users', element: <UserListPage /> },
            { path: 'contact', element: <ContactPage /> },
        ]
    }

])

export default router