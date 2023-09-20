import React, { useEffect, useState } from 'react'
import { useMessage } from '../../hooks/useMessage'
import { Dropdown, ListGroup, Tooltip } from 'flowbite-react';
import { useParams } from 'react-router';

export const EditMessageMenu = () => {
    return (
        <ListGroup
            className='border-none'
        >
            <ListGroup.Item>
                Edit
            </ListGroup.Item>
            <ListGroup.Item>
                Delete
            </ListGroup.Item>
        </ListGroup>
    )
}

const ChatList = () => {

    const [author, setAuthor] = useState('');

    const params = useParams();

    // Custom hooks
    const { messages } = useMessage();

    useEffect(() => {
        const searchParams = Object.fromEntries(new URLSearchParams(params));
        setAuthor(searchParams.name)
    }, [])

    return (
        <div
            className='flex flex-col gap-y-4'
        >

            {messages.map(message => (
                <div className={`item md:max-w-[50%]	 px-2 ${message.author === author ? 'ml-auto' : null}`}>
                    <header>
                        <h3
                            className='w-max'
                        >
                            {
                                message.author === author ? 'It is You' : message.author
                            }
                        </h3>
                    </header>


                    {
                        message.author === author ?
                            <Tooltip
                                content={<EditMessageMenu />}
                                style="light"
                            >
                                <main
                                    className='bg-indigo-200 text-zinc-50 max-w-max p-2 md:p-4 rounded-tr-lg rounded-b-lg cursor-pointer'
                                >
                                    <p
                                        className='text-xl'
                                    >
                                        {message.message}
                                    </p>
                                </main>
                            </Tooltip> :
                            <main
                                className='border-2 border-indigo-200  max-w-max p-2 md:p-4 rounded-tr-lg rounded-b-lg cursor-pointer'
                            >
                                <p
                                    className='text-xl'
                                >
                                    {message.message}
                                </p>
                            </main>

                    }

                </div>
            ))}

            {/* <div className="item">
                <header>
                    <h3>Ksenia</h3>
                </header>
                <Tooltip
                    content={<EditMessageMenu />}
                    style="light"
                >
                    <main
                        className='border-2 border-indigo-200 p-2 md:p-4 rounded-tr-lg rounded-b-lg cursor-pointer'
                    >
                        <p
                            className='text-xl'
                        >Lorem ipsum dolor sit amet.</p>
                    </main>
                </Tooltip>
                <footer>
                    date
                </footer>
            </div>

            <div className="item w-max">
                <header>
                    <h3>Ksenia</h3>
                </header>
                <main
                    className='border-2 border-indigo-200 p-2 md:p-4 rounded-tr-lg rounded-b-lg cursor-pointer'
                >
                    Lorem ipsum dolor sit amet.
                </main>
                <footer>
                    date
                </footer>
            </div>

            <div className="item w-max ml-auto">
                <header>
                    <h3>It is You</h3>
                </header>
                <main
                    className='bg-indigo-200 text-zinc-50 p-2 md:p-4 rounded-t-lg rounded-bl-lg cursor-pointer'
                >
                    Lorem ipsum dolor sit amet.
                </main>
                <footer>
                    date
                </footer>
            </div> */}

        </div>
    )
}

export default ChatList