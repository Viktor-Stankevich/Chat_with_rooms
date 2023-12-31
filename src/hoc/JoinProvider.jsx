import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, setDoc, where } from 'firebase/firestore';
import React, { createContext } from 'react'
import { db } from '../firebase';
import { Outlet, redirect, useNavigate } from 'react-router-dom';

export const JoinContext = createContext();
const JoinProvider = () => {

    const navigate = useNavigate();

    const roomsRef = collection(db, 'rooms');

    const roomAlreadyExists = async (room) => {
        const docRef = doc(roomsRef, room);
        const docSnap = await getDoc(docRef);
        return docSnap.exists() ? true : false;
    }

    const createRoom = async (room, name) => {

        await setDoc(doc(roomsRef, room), {
            roomName: room
        });

        joinRoom(room, name);

    }

    const joinRoom = async (name, room) => {

        const roomExists = await roomAlreadyExists(room);
        if (!roomExists) {
            return createRoom(room, name)
        }

        await setDoc(doc(collection(roomsRef, room, 'users'), name), {
            name
        })

        return navigate(`/${room}/${name}`)

    }

    const leaveRoom = async (room, name) => {
        await deleteDoc(doc(collection(roomsRef, room, 'users'), name));
        return navigate('/')
    }

    const value = { joinRoom, leaveRoom };

    return <JoinContext.Provider value={value}>
        <Outlet />
    </JoinContext.Provider>
}

export default JoinProvider