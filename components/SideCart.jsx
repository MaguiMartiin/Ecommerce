'use client'
import clsx from 'clsx'
import React, { useEffect, useContext } from 'react';
import { Store, useUIStore } from "./Store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Counter from './CounterQuantity';

export const SideCart = () => {
    const {state, dispatch} = useContext(Store)
    const {product} = state
    
    const { isSideCartOpen, closeSideCart } = useUIStore();
    useEffect(() => {
        if(isSideCartOpen) {document.body.classList.add("modal-open")}
        else {document.body.classList.remove("modal-open")}
    })
    
    const handleChangeQuantity = (id, size, color, newQuantity) => {
        dispatch({
        type: 'CHANGE_QUANTITY',
        payload: { id, size, color, newQuantity }
        })
    }

    const handleDeleteProduct = (id, size, color) => {
        dispatch({
            type: 'DELETE_PRODUCT', 
            payload: {id, size, color}
        })
    }

    return (
        <div>
            {isSideCartOpen && 
                (<div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />
                )}

            {isSideCartOpen && 
                (<div onClick={ closeSideCart } className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm" />)}

            <div className={
                    clsx(
                      "fixed right-0 top-0 w-1/4 h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
                      {
                        "translate-x-full": !isSideCartOpen,

                      }
                    )
                }>
                    <div className="flex items-center p-[1rem] border-b-2">
                        <h1 className="text-xl flex-1 text-center">Tu carrito</h1>
                        <FontAwesomeIcon icon={faXmark} className="ml-auto w-3 cursor-pointer" onClick={closeSideCart} />
                    </div>
                    <div className='overflow-y-auto h-2/3 w-full'>
                        {product.productItems.map((item) => (
                            <div key={item.id} className='flex p-[1rem] border-b-2'>
                                <img src={item.image} alt={item.name} className=' w-1/3 h-2/3' />
                                <div className='flex flex-col p-[1rem] w-full space-y-6 justify-center'>
                                    <div>
                                        <h1>{item.name} - {item.size}</h1>
                                        <h2>{item.color}</h2>
                                        <p>{item.price}</p>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <Counter  maxCount={item.maxQuantity} count={item.quantity} onCountChange={(newCount) => handleChangeQuantity(item.id, item.size, item.color, newCount)} w={'100px'} h={'50px'} />
                                        <div>
                                            <button className='flex items-center space-x-2' onClick={() => handleDeleteProduct(item.id, item.size, item.color)} >
                                                <FontAwesomeIcon icon={faXmark} className="ml-auto w-3 cursor-pointer" />
                                                <h1>Eliminar </h1>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
        </div>
    );
}