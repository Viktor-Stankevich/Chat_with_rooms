import React, { useEffect, useState } from 'react'
import { useMessage } from '../../hooks/useMessage'
import { Dropdown, ListGroup, Tooltip } from 'flowbite-react';
import { useParams } from 'react-router';


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

            {messages === undefined ? ('Пока нет сообщений') :
                messages ?
                    messages.map(message => (
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

                                    <main
                                        className='bg-indigo-200 text-zinc-50 max-w-max p-2 md:p-4 rounded-tr-lg rounded-b-lg cursor-pointer'
                                    >
                                        <p
                                            className='text-xl'
                                        >
                                            {message.message}
                                        </p>
                                    </main> :
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
                    )) : null}

        </div>
    )
}

export default ChatList