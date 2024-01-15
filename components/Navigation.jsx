'use client'
import Link from "next/link"
import React, { useState } from "react"
import { ModalCategories } from "./ModalCategories"

const links = [{
    label: 'HOME', 
    route: '/'
}, {
    label: 'SHOP',
    route: '/shop'
},  
]

export function Navigation ({categories}) {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleShopMouseEnter = () => {
        setIsModalVisible(true);
        clearTimeout(window.modalTimeout);
    };

    const handleShopMouseLeave = () => {
        window.modalTimeout = setTimeout(() => {
        setIsModalVisible(false);
        }, 100);
    };

    const handleModalMouseEnter = () => {
        clearTimeout(window.modalTimeout);
    };

    const handleModalMouseLeave = () => {
        window.modalTimeout = setTimeout(() => {
        setIsModalVisible(false);
        }, 100); 
    }

    return (
        <div className="flex p-[1rem] border-b border-red-700">
            <div>
                <h1 className="p-[1rem]">ModaVista Boutique</h1>
            </div>
            <div className=" w-[40rem] mx-auto p-[1rem] flex">
                <nav >
                    <ul className="flex space-x-8">
                        {links.map(({label, route}) => (
                            <li key={route} className="border-b-2 border-transparent hover:border-red-700 hover:text-red-700 transition-all duration-500" 
                            onMouseEnter={label === 'SHOP' ? handleShopMouseEnter : undefined}
                            onMouseLeave={label === 'SHOP' ? handleShopMouseLeave : undefined}
                            >
                                <Link href={route}>{label}</Link>
                            </li>
                        ))}
                    </ul>

                    {isModalVisible && ( <ModalCategories categories={categories} onMouseEnter={handleModalMouseEnter} onMouseLeave={handleModalMouseLeave} />
                    )}
                    
                </nav>
            </div>
            <div>
                <h1 className="p-[1rem]">ModaVista Boutique</h1>
            </div>
        </div>
    )
}