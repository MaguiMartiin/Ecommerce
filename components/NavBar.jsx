'use client'
import Link from "next/link"
import React, { useState } from "react"
import { ModalCategories } from "./ModalCategories"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { ModalSearch } from "./ModalSearch"

const links = [{
    label: 'SHOP',
    route: '/shop'
}, {
    label: '¿CÓMO COMPRAR?',
    route: '/como-comprar'
}, {
    label: 'PREGUNTAS',
    route: '/preguntas'
}, {
    label: 'CONTACTO',
    route: '/contacto'
},  
]

export function NavBar ({categories}) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalSearchVisible, setModalSearchVisible] = useState(false)

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

    const handleOpenModalSearch = () => {
        setModalSearchVisible(true)
        document.body.style.overflow = 'hidden'
    }

    const handleCloseModal = () => {
        setModalSearchVisible(false);
        document.body.style.overflow = ''
    } 

    return (
        <div className="flex p-[2rem] border-b border-red-700 items-center justify-center">
            <div className="w-1/4 flex justify-center">
                <Link href="/">ModaVista Boutique</ Link>
            </div>
            <div className="w-3/4 flex justify-center">
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
            <div className="flex w-1/4 text-lg justify-center space-x-6">
                {modalSearchVisible && <ModalSearch categories={categories} handleCloseModal={handleCloseModal}/>}
                <FontAwesomeIcon icon={faSearch} className="w-4 cursor-pointer" onClick={handleOpenModalSearch} />
                <FontAwesomeIcon icon={faUser} className="w-4 cursor-pointer" />
                <FontAwesomeIcon icon={faCartShopping} className="w-4 cursor-pointer" />
            </div>
        </div>
    )
}