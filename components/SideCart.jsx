'use client'
import clsx from 'clsx'
import React, { useEffect, useContext } from 'react';
import { Store, useUIStore } from "./Store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Counter from './CounterQuantity';
import Link from 'next/link';

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

    const calculateSubtotal = () => {
        return product.productItems.reduce((total, item) => {
            return total + (item.price * item.quantity)
        }, 0)
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
                    <div className='overflow-y-auto h-3/5 w-full scrollbar-thumb-rounded'>
                        {product.productItems.length === 0 ? (
                            <div className="flex flex-col items-center justify-center h-full ">
                                <h1 className='mb-[2rem]'>Tu carrito está vacío</h1>
                                <Link href='/shop' className='w-full flex justify-center mb-[2rem]'>
                                    <button className="bg-cherry_blossom_pink text-white p-[1rem] rounded w-3/4" onClick={closeSideCart}>Continua comprando</button>
                                </Link>
                            </div>
                        ) : (
                            product.productItems.map((item) => (
                            <div key={item.id} className='flex p-[1rem] border-b-2 '>
                                <img src={item.image} alt={item.name} className=' w-1/3 h-2/3' />
                                <div className='flex flex-col p-[1rem] w-full space-y-6 justify-center'>
                                    <div>
                                        <h1>{item.name} - {item.size}</h1>
                                        <h2>{item.color}</h2>
                                        <p>${item.price}</p>
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
                        ))
                    )}
                    </div>
                    {product.productItems.length > 0 && (
                        <div>
                            <div className='flex items-center justify-between p-[1rem] bg-slate-200 '>
                                <h1>Subtotal: </h1>
                                <h1>$ {calculateSubtotal().toFixed(2)}</h1>
                            </div>
                            <div className='flex flex-col p-[1rem] space-y-5'>
                                <Link href='/cart' className='bg-cherry_blossom_pink h-12 hover:shadow-xl transition-shadow duration-500 text-white justify-center flex' onClick={closeSideCart}>
                                    <button>Ver carrito</button>
                                </Link>
                                <button className='bg-white h-12 border border-black hover:shadow-xl transition-shadow duration-500'>Finalzar compra</button>
                            </div>
                        </div>
                    )}
                </div>
        </div>
    );
}