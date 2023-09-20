import React from 'react'

const SendMessageForm = () => {
    return (
        <form
            className='w-full flex gap-x-4'
        >

            <input
                type='text'
                name='message'
                placeholder='Your message'
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