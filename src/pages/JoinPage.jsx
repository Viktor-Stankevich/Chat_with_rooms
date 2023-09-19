import React from 'react'
import JoinForm from '../components/forms/JoinForm'
import { Tooltip } from 'flowbite-react'

const JoinPage = () => {
    return (
        <div
            className='container w-max flex flex-col justify-center h-screen gap-6'
        >

            <header>
                <h1
                    className='w-min leading-9'
                >
                    Chat with rooms
                </h1>
            </header>
            <main>
                <JoinForm />
            </main>
            <footer
                className='self-center'
            >
                <Tooltip
                    content="If the room you entered already exists then you will join it, otherwise a new room will be created"
                >
                    <span
                        className='cursor-pointer'
                    >
                        Join an existing one or create a new one
                    </span>
                </Tooltip>


            </footer>
        </div>
    )
}

export default JoinPage