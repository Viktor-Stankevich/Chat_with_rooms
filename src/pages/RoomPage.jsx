import React from 'react'
import SendMessageForm from '../components/forms/SendMessageForm'

const RoomPage = () => {
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
                    Room name: <span className='text-blue-900'>Room1</span>
                </h2>

                <button
                    className='text-orange-600 hover:text-orange-800'
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