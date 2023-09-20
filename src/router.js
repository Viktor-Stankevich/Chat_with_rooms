import { createBrowserRouter } from "react-router-dom";
import JoinPage from "./pages/JoinPage";
import RoomPage from "./pages/RoomPage";
import JoinProvider from "./hoc/JoinProvider";
import MessageProvider from "./hoc/MessageProvider";

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
                element: <MessageProvider />,
                children: [
                    {
                        path: '/:id/:name',
                        element: <RoomPage />
                    }
                ]
            }

        ]
    }

]);