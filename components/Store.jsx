'use client'
import { useReducer, createContext, useContext, useEffect } from "react";

export const Store = createContext()

const initialState = {
    product: {
        productItems: []    
    },
    ui: {
        isSideCartOpen: false,
        isModalSearchOpen: false,
    }
}

function reducer (state, action){
    switch (action.type) {
        case 'ADD_PRODUCT': {
            const newItem = action.payload
            const existItem = state.product.productItems.find(item => item.id === newItem.id && item.size === newItem.size && item.color === newItem.color )   
            if (existItem) {
                const productItems = state.product.productItems.map(item =>
                    item.id === existItem.id && item.size === existItem.size && item.color === existItem.color
                        ? { ...item, quantity: item.quantity + newItem.quantity }
                        : item
                );
                const updatedState = { ...state, product: { ...state.product, productItems } };
                localStorage.setItem('cart', JSON.stringify(updatedState.product.productItems));
                return updatedState;
            } else {
                const productItems = [...state.product.productItems, newItem];
                return { ...state, product: { ...state.product, productItems } };
            }
        }

        case 'CHANGE_QUANTITY': {
            const { id, size, color, newQuantity } = action.payload
            const updatedProductItems = state.product.productItems.map(item => {
                if (item.id === id && item.size === size && item.color === color) {
                    return { ...item, quantity: newQuantity }
                }
                return item
            })
            const updatedState = { ...state, product: { ...state.product, productItems: updatedProductItems } };
            localStorage.setItem('cart', JSON.stringify(updatedState.product.productItems));
            return updatedState;
        }

        case 'DELETE_PRODUCT': {
            const { id, size, color } = action.payload;
            const updatedProductItems = state.product.productItems.filter(
                item => !(item.id === id && item.size === size && item.color === color)
            );
            const updatedState = { ...state, product: { ...state.product, productItems: updatedProductItems } };
            localStorage.setItem('cart', JSON.stringify(updatedState.product.productItems));
            return updatedState;
        }
        
        case 'LOAD_CART': {
            const savedCart = action.payload || [];
            return { ...state, product: { ...state.product, productItems: savedCart } };
        }

        case 'SET_SIDE_CART_OPEN': {
            return { ...state, ui: { ...state.ui, isSideCartOpen: action.payload } };
        }

        case 'SET_MODAL_SEARCH_OPEN': {
            return { ...state, ui: { ...state.ui, isModalSearchOpen: action.payload } };
        }
        
        default:
            return state
    }
}

export function StoreProvider({children}){
    const [state, dispatch] = useReducer(reducer, initialState)
    const value = {state, dispatch}
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart'));
        dispatch({ type: 'LOAD_CART', payload: savedCart });
    }, []);
    return <Store.Provider value={value}>{children}</Store.Provider>
}

export function useUIStore() {
    const { state, dispatch } = useContext(Store);

    const setSideMenuOpen = (isOpen) => {
        dispatch({ type: 'SET_SIDE_CART_OPEN', payload: isOpen });
    };

    const setModalSearchOpen = (isOpen) => {
        dispatch({ type: 'SET_MODAL_SEARCH_OPEN', payload: isOpen });
    };

    return {
        isSideCartOpen: state.ui.isSideCartOpen,
        openSideCart: () => setSideMenuOpen(true),
        closeSideCart: () => setSideMenuOpen(false),
        isModalSearchOpen: state.ui.isModalSearchOpen, 
        openModalSearch: () => setModalSearchOpen(true), 
        closeModalSearch: () => setModalSearchOpen(false)
    };
}