"use client"

import { useState } from "react"


export default function LogIn() {
    const [username, setUserName] = useState("")

    const onClickLogIn = () => { };
    const onClickLogOut = () => { };
    const onClickToggle = () => { };

    const buttonStyle: string = "border border-white p-1 rounded-md bg-gray-500"

    return (

        <div className="flex flex-col justify-center items-center bg-black text-white p-4 gap-6 h-screen">

            <input type="text" onChange={(e) => setUserName(e.target.value)} placeholder="Input Username" className="w-max p-1 rounded-md" />

            <button className={buttonStyle}>Log In</button>

            <button className={buttonStyle}>Log Out</button>

            <button className={buttonStyle}>Toggle Moderator Status</button>
        </div >

    )
}
