'use client'
import { useEffect, useState } from "react"
import { notFound } from "next/navigation"

export default function Orders () {
    const [isLoggedIn, setLoggedIn] = useState(null)

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
            <h1>Ordenes</h1>
        </div>
    )
}