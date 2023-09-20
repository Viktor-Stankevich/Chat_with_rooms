import { createBrowserRouter } from "react-router-dom";
import JoinPage from "./pages/JoinPage";
import RoomPage from "./pages/RoomPage";
import JoinProvider from "./hoc/JoinProvider";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <JoinProvider />,
        children: [
            {
                path: '/',
                element: <JoinPage />
            },
            {
                path: '/:id/:name',
                element: <RoomPage />
            }
        ]
    }

]);