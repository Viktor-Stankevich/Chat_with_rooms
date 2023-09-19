import { createBrowserRouter } from "react-router-dom";
import JoinPage from "./pages/JoinPage";
import RoomPage from "./pages/RoomPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <JoinPage />
    },
    {
        path: '/:id',
        element: <RoomPage />
    }
]);