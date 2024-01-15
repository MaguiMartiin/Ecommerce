import axios from "axios"
import Link from "next/link";

const fetchProducts = async () => {
    try { return (await axios.get('http://localhost:3001/products')).data;
    } catch (error) { throw new Error(error.message)}
};

export default async function Shop () {
    const products = await fetchProducts()
    return (
        <div className="flex items-center">
            <div className="grid grid-flow-row gap-1 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 ">
                {products.map(product => (
                    <Link key={product.id} href='/shop/[id]' as={`/shop/${product.id}`}>
                        <div>
                            <img src={product.image} alt={product.name} className=" w-96 h-96 object-cover" />
                            <h2 className="flex p-[1rem]">{product.name}</h2>
                        </div>                        
                    </Link>
                ))}
            </div>
        </div>
    )
}