'use client'
import { useReducer, createContext } from "react";

export const Store = createContext()

const initialState = {
    product: {
        productItems: []    
    }
}

function reducer (state, action){
    switch (action.type) {
        case 'ADD_PRODUCT': {
            const newItem = action.payload
            const existItem = state.product.productItems.find(item => item.id === newItem.id && item.size === newItem.size && item.color === newItem.color )   
            if (existItem) {
                // Si el elemento ya existe, solo actualizamos la cantidad
                const productItems = state.product.productItems.map(item =>
                    item.id === existItem.id && item.size === existItem.size && item.color === existItem.color
                        ? { ...item, quantity: item.quantity + newItem.quantity }
                        : item
                );
                return { ...state, product: { ...state.product, productItems } };
            } else {
                // Si no existe, agregamos el nuevo elemento
                const productItems = [...state.product.productItems, newItem];
                return { ...state, product: { ...state.product, productItems } };
            }
        }
    
        default:
            return state
    }
}

export function StoreProvider({children}){
    const [state, dispatch] = useReducer(reducer, initialState)
    const value = {state, dispatch}
    return <Store.Provider value={value}>{children}</Store.Provider>
}