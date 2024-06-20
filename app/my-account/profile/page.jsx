'use client'
import { notFound } from "next/navigation"
import { useEffect, useState } from "react"

export default function Profile () {
    const [isLoggedIn, setLoggedIn] = useState()

    useEffect(()=> {
        const token = localStorage.getItem('token')
        if(token){
            setLoggedIn(true)
        } else {
            setLoggedIn(false)
            notFound()
        }
    })

    if (!isLoggedIn ) {
        return <div className="pt-[5rem] h-[30rem]" />
    }

    return(
        <div className="pt-[5rem]">
            <h1>Perfil</h1>

        </div>
    )
}