import Link from "next/link";
import { fetchProducts } from "../axios";

export default async function Shop () {
    const products = await fetchProducts()
    return (
        <div className="flex items-center">
            <div className="grid grid-flow-row gap-1 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 ">
                {products.map(product => (
                    <Link key={product.id} href='/shop/[id]' as={`/shop/${product.id}`}>
                        <div>
                            <img src={product.image} alt={product.name} className=" w-96 h-96 object-cover" />
                            <div className="p-[1rem] mb-[1rem]">   
                                <h2 className="mb-[0.2rem] text-lg font-semibold">{product.name}</h2>
                                <h2 className="text-sm font-light">{product.Categories[0]?.name}</h2>
                            </div>
                        </div>                        
                    </Link>
                ))}
            </div>
        </div>
    )
}