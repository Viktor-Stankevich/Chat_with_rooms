import React, { useState } from 'react'
import { useMessage } from '../../hooks/useMessage';

const SendMessageForm = (props) => {

    const { room, name } = props

    const [message, setMessage] = useState('');

    // Custom hooks
    const { send } = useMessage();

    const submit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        send(formData.get('message'), room, name);
        setMessage('');
    }

    return (
        <form
            className='w-full flex gap-x-4'
            onSubmit={submit}
        >

            <input
                type='text'
                name='message'
                placeholder='Your message'
                value={message}
                onChange={({ target: { value } }) => setMessage(value)}
                className='w-full'
                autoFocus
            />

            <button
                type='submit'
            >
                Send
            </button>


        </form>
    )
}

export default SendMessageForm