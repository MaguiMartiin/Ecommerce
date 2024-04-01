'use client'
import { useState } from 'react';
import Counter from './CounterQuantity';

const SizeColorList = ({ stock }) => {
    const [selectedSize, setSelectedSize] = useState(null)
    const [selectedColor, setSelectedColor] = useState(null)
    const [count, setCount] = useState(1)

    const handleSizeButtonClick = (size) => {
        setSelectedSize(size)
        setSelectedColor(null)
    }

    const handleColorButtonClick = (color) => {
        setSelectedColor(color)
    }

    const isAvailable = (size, color) => {
        const available = stock.find((item) => item.size === size && item.color === color && item.quantity > 0)
        return !!available
    }

    const handleAddToCart = () => {
        console.log(`Agregado al carrito: Talle ${selectedSize} - Color ${selectedColor}`)
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

    return (
        <div>
            <h1 className="mb-[0.5rem]">Talle</h1>
            {stock.map((e) => (
                <button key={e.size} className={`w-[3rem] text-base p-[0.2rem] rounded-full border border-grey hover:border-black ${selectedSize === e.size ? 'border-black' : ''}`} onClick={() => handleSizeButtonClick(e.size)}>
                    {e.size}
                </button>
            ))}
            <h1 className="mt-[2rem] mb-[0.5rem]">Color</h1>
            {stock.map((e) => (
                <button key={e.color} className={`text-base p-[0.5rem] rounded-full border border-grey hover:border-black ${selectedColor === e.color ? 'border-black' : ''}`} onClick={() => handleColorButtonClick(e.color)}>
                    {e.color}
                </button>
            ))}

            <div className='mt-[2rem]'>
                {(selectedSize && selectedColor && !isAvailable(selectedSize, selectedColor)) && (
                <div>
                    <p className="text-red-500 mt-2">Sin stock</p>
                    <button className="bg-gray-300 text-gray-600 px-4 py-2 rounded-lg cursor-not-allowed" disabled>
                    Agregar al carrito
                    </button>
                </div>
                )}
                {(!selectedSize || !selectedColor || isAvailable(selectedSize, selectedColor)) && (
                    <div className='flex mt-[1rem] items-center space-x-11'>
                        <Counter  maxCount={getMaxCount()} count={count} onCountChange={handleCountChange} />
                        <button className="bg-black text-white px-4 py-2 rounded-lg flex " onClick={handleAddToCart} disabled={!selectedSize || !selectedColor || !isAvailable(selectedSize, selectedColor)}>
                            Agregar al carrito
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SizeColorList
