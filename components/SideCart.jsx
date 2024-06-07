'use client'
import clsx from 'clsx'
import React, { useEffect } from 'react';
import { useUIStore } from "./Store";

export const SideCart = () => {
    
    const { isSideCartOpen, closeSideCart } = useUIStore();
    useEffect(() => {
        if(isSideCartOpen) {document.body.classList.add("modal-open")}
        else {document.body.classList.remove("modal-open")}
    })

    return (
        <div>
            {isSideCartOpen && 
                (<div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />
                )}

            {isSideCartOpen && 
                (<div onClick={ closeSideCart } className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm" />)}

            <div className={
                    clsx(
                      "fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
                      {
                        "translate-x-full": !isSideCartOpen,

                      }
                    )
                }>
                    <button onClick={closeSideCart}>Close Side Cart</button>
                    {isSideCartOpen && <div>Side Cart Open</div>}
                </div>
        </div>
    );
}
