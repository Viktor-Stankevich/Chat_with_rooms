import { FieldValue, arrayUnion, collection, doc, serverTimestamp, setDoc, updateDoc } from '@firebase/firestore';
import React, { createContext } from 'react'
import { Outlet } from 'react-router';
import { db } from '../firebase';

export const MessageContext = createContext();
const MessageProvider = () => {

    const roomsRef = collection(db, 'rooms');

    const send = async (message, room, name) => {

        const roomDoc = doc(roomsRef, room);
        await updateDoc(roomDoc, {

            messages: arrayUnion(
                {
                    author: name,
                    message,
                    createdAt: new Date()
                }
            )
        })
    }

    const value = { send };

    return <MessageContext.Provider value={value}>
        <Outlet />
    </MessageContext.Provider>
}

export default MessageProvider