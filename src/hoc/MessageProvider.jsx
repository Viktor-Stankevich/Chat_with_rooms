import { FieldValue, arrayUnion, collection, doc, getDoc, onSnapshot, serverTimestamp, setDoc, updateDoc } from '@firebase/firestore';
import React, { createContext, useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router';
import { db } from '../firebase';

export const MessageContext = createContext();
const MessageProvider = () => {

    const [messages, setMessages] = useState([]);

    const params = useParams();

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


    // Get message in real time
    useEffect(() => {
        const searchParams = Object.fromEntries(new URLSearchParams(params));
        const unsub = onSnapshot(doc(roomsRef, searchParams.id), (doc) => {
            setMessages(doc.data().messages)
        })

    }, [])

    const value = { send, messages };

    return <MessageContext.Provider value={value}>
        <Outlet />
    </MessageContext.Provider>
}

export default MessageProvider