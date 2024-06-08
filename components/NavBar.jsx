'use client'
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { ModalCategories } from "./ModalCategories"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { ModalSearch } from "./ModalSearch"
import { useContext } from "react"
import { Store, useUIStore } from "./Store"

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
    const {openSideCart }= useUIStore();

    const {state, dispatch} = useContext(Store)
    const {product} = state
    const [productItemsCount, setProductItemsCount] = useState(0)

    useEffect(()=> {
        setProductItemsCount(product.productItems.reduce((a,c) => a + c.quantity, 0))
    }, [product.productItems])

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
        <div className="flex p-[2rem] items-center justify-center bg-cherry_blossom_pink text-black h-[5rem] fixed w-screen z-10">
            <div className="w-1/4 flex justify-center text-2xl font-extrabold">
                <Link href="/">ModaGo</ Link>
            </div>
            <div className="w-3/4 flex justify-center">
                <nav >
                    <ul className="flex space-x-8">
                        {links.map(({label, route}) => (
                            <li key={route} className="border-b-2 border-transparent hover:border-black hover:text-black transition-all duration-500" 
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
            <div className="flex w-1/4 text-lg justify-center space-x-4 items-center">
                {modalSearchVisible && <ModalSearch categories={categories} handleCloseModal={handleCloseModal}/>}
                <FontAwesomeIcon icon={faSearch} className="w-5 h-4 flex items-center cursor-pointer" onClick={handleOpenModalSearch} />
                <Link href='/login'>
                    <FontAwesomeIcon icon={faUser} className="w-5 h-4 cursor-pointer  flex items-center" />
                </Link>
                <div className="flex justify-center items-center text-center">
                    <FontAwesomeIcon icon={faCartShopping} className="w-5 h-4  flex items-center cursor-pointer" onClick={ openSideCart } />
                    <span className="flex justify-center items-center w-5 h-5 text-white text-[10px] bg-black rounded-full -ml-[0.5rem] mb-[1rem] ">{productItemsCount}</span>
                </div>
            </div>
        </div>
    )
}