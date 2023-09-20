import React from 'react'
import { useJoin } from '../../hooks/useJoin'

const JoinForm = () => {

    // Custom hook
    const { joinRoom } = useJoin();

    const submit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        joinRoom(formData.get('name'), formData.get('room'));
    }

    return (
        <form
            className='grid md:grid-cols-2 gap-x-4 gap-y-2'
            onSubmit={submit}
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