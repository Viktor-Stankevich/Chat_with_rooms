import React from 'react'

const JoinForm = () => {
    return (
        <form
            className='grid md:grid-cols-2 gap-x-4 gap-y-2'
        >

            <input
                type='text'
                name='name'
                placeholder='Your name'
            />

            <input
                type='text'
                name='room'
                placeholder='Room name'
            />

            <button
                type='submit'
                className='md:col-span-2'
            >
                Join
            </button>

        </form>
    )
}

export default JoinForm