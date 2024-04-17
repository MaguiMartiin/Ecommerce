'use client'
import { useState } from 'react';
import Counter from './CounterQuantity';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"

const SizeColorList = ({ stock }) => {
    const [selectedSize, setSelectedSize] = useState(null)
    const [selectedColor, setSelectedColor] = useState(null)
    const [count, setCount] = useState(1)

    const handleSizeButtonClick = (size) => {
        setSelectedSize(size)
        setCount(1)
    }

    const handleColorButtonClick = (color) => {
        setSelectedColor(color)
        setCount(1)
    }

    const isAvailable = (size, color) => {
        const available = stock.find((item) => item.size === size && item.color === color && item.quantity > 0)
        return !!available
    }

    const handleAddToCart = () => {
        console.log(`Agregado al carrito: Talle ${selectedSize} - Color ${selectedColor} - ${count}`)
    }

    const handleCountChange = (newCount) => {
        setCount(newCount)
    }

    const getMaxCount = () => {
        if (selectedSize && selectedColor) {
            const item = stock.find((item) => item.size === selectedSize && item.color === selectedColor)
            return item ? item.quantity : 0
        }
        return 0
    }

    const uniqueSizes = [...new Set(stock.map(item => item.size))]
    const uniqueColors = [...new Set(stock.map(item => item.color))]

    return (
        <div>
            <h1 className="mb-[0.5rem]">Talle</h1>
            {uniqueSizes.map((size) => (
                <button key={size} className={`w-[3rem] text-base p-[0.2rem] rounded-full border border-grey hover:border-cherry_blossom_pink ml-[1rem] font-semibold ${selectedSize === size ? 'border-cherry_blossom_pink text-cherry_blossom_pink' : ''}`} onClick={() => handleSizeButtonClick(size)}>
                    {size}
                </button>
            ))}
            <h1 className="mt-[2rem] mb-[0.5rem]">Color</h1>
            {uniqueColors.map((color) => (
                <button key={color} className={`text-base p-[0.5rem] rounded-full border border-grey hover:border-cherry_blossom_pink ml-[1rem] mb-[1rem] font-semibold ${selectedColor === color ? 'border-cherry_blossom_pink text-cherry_blossom_pink' : ''}`} onClick={() => handleColorButtonClick(color)}>
                    {color}
                </button>
            ))}

            <div className='h-[6rem] '>
                {(selectedSize && selectedColor && !isAvailable(selectedSize, selectedColor)) && (
                <div className='flex items-center space-x-11'>
                    <div className='flex mt-[2.5rem]'>
                        <Counter  maxCount={getMaxCount()} count={count} onCountChange={handleCountChange} />
                    </div>
                    <div className='flex flex-col'>
                        <p className="text-red-500 mb-[1rem] ">Sin stock</p>
                        <button className="bg-mountbatten_pink text-champagne_pink p-[1rem] rounded-lg cursor-not-allowed flex font-semibold " disabled>
                        Agregar al carrito
                        <FontAwesomeIcon icon={faCartShopping} className='p-[0.2rem] ml-[0.5rem] w-6' />
                        </button>
                    </div>
                </div>
                )}
                {(!selectedSize || !selectedColor || isAvailable(selectedSize, selectedColor)) && (
                    <div className='flex mt-[1rem] items-center space-x-11'>
                        <div className='flex mt-[1.5rem]'>
                        <Counter  maxCount={getMaxCount()} count={count} onCountChange={handleCountChange} />
                        </div>
                        <button className="bg-champagne_pink text-mountbatten_pink p-[1rem] rounded-lg flex mt-[1.5rem] font-semibold " onClick={handleAddToCart} disabled={!selectedSize || !selectedColor || !isAvailable(selectedSize, selectedColor)}>
                            Agregar al carrito
                            <FontAwesomeIcon icon={faCartShopping} className='p-[0.2rem] ml-[0.5rem] w-6' />
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SizeColorList
