"use client"

import { useState } from "react"
import { login, logout, toggleModerator } from "@/redux/features/auth-slice";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";


export default function LogIn() {
    const [username, setUserName] = useState("")

    const buttonStyle: string = "border border-white p-1 rounded-md bg-gray-500"

    // Redux
    const dispatch = useDispatch<AppDispatch>()

    const usernameFromState = useAppSelector((state) => state.authReducer.value.username)

    const isAuth = useAppSelector((state) => state.authReducer.value.isAuth)

    const isModerator = useAppSelector((state) => state.authReducer.value.isModerator)

    // functions for buttons
    const onClickLogin = () => {
        dispatch(login(username))
    };

    const onClickLogout = () => {
        dispatch(logout())
    };

    const onClickToggle = () => {
        dispatch(toggleModerator())
    };

    return (

        <div className="flex flex-col justify-center items-center bg-black text-white p-4 gap-6 h-screen">

            <input type="text" onChange={(e) => setUserName(e.target.value)} placeholder="Input Username" className="w-max p-1 rounded-md text-black" />

            <button className={buttonStyle} onClick={onClickLogin}>Log In</button>

            <button className={buttonStyle} onClick={onClickLogout}>Log Out</button>

            <h1>Username : {usernameFromState}</h1>

            {isAuth && (
                <button className={buttonStyle} onClick={onClickToggle}>Toggle Moderator Status</button>
            )}

            {isModerator && <h1>This user is a moderator</h1>}

        </div >

    )
}
