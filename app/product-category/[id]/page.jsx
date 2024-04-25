import { fetchProductCategory } from "@/app/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProductCategoryId (query) {
    const categoryId = query.params.id
    const products = await fetchProductCategory(categoryId)
    const categoryName = products.length > 0 ? products[0].Categories[0]?.name : '';

    if (products.length === 0) {notFound()}
    
    return(
        <div>   
            <div className="p-[2rem]">
                <h1 className="flex text-2xl font-medium ">{categoryName}</h1>
                <div className=" flex text-sm mt-[0.5rem] space-x-3 items-center">
                    <h1>Inicio</h1>
                    <FontAwesomeIcon icon={faAngleRight} className="w-2" />
                    <h1>{categoryName}</h1>
                </div>
            </div>
            <div className="flex flex-wrap space-x-1">
                {products.map(product => (
                    <Link key={product.id} href='/shop/[id]' as={`/shop/${product.id}`}>
                    <div key={product.id}>
                        <img src={product.image} alt={product.name} className=" w-96 h-96 object-cover" />
                        <h2 className="flex p-[1rem] font-semibold">{product.name}</h2>
                    </div>      
                    </Link> 
                ))}
            </div>
        </div>
    )
}