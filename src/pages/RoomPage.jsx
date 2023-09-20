import React, { useEffect, useState } from 'react'
import SendMessageForm from '../components/forms/SendMessageForm'
import { useParams } from 'react-router'
import { useJoin } from '../hooks/useJoin'

const RoomPage = () => {

    const [chatInfo, setChatInfo] = useState({ room: null, name: null })

    const params = useParams();

    // Custom hooks
    const { leaveRoom } = useJoin();

    useEffect(() => {
        const searchParams = Object.fromEntries(new URLSearchParams(params));
        setChatInfo({ room: searchParams.id, name: searchParams.name })
    }, [params]);

    return (
        <div
            className='container w-full sm:w-9/12 md:w-6/12 flex flex-col h-screen gap-6 p-4'
        >
            <header
                className='flex justify-between items-start	'
            >
                <h2
                    className='w-min leading-8'
                >
                    Room name: <span className='text-blue-900'>{chatInfo.room}</span>
                </h2>

                <button
                    className='text-orange-600 hover:text-orange-800'
                    onClick={() => leaveRoom(chatInfo.room, chatInfo.name)}
                >
                    Leave
                </button>
            </header>

            <main
                className='grow'
            >
                Окно чата
            </main>

            <footer>
                <SendMessageForm />
            </footer>
        </div>
    )
}

export default RoomPage