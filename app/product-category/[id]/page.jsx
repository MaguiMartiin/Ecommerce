import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default async function ProductCategoryId (query) {
    const categoryId = query.params.id
    const fetchProductCategory = async (id) => {
        try {
          return (await axios.get(`http://localhost:3001/categories/?categoryId=${id}`)).data;
        } catch (error) {
          console.error('Error en fetchProductCategory:', error);
          throw new Error(error.message);
        }
    }
    const products = await fetchProductCategory(categoryId)
    const categoryName = products.length > 0 ? products[0].Categories[0]?.name : '';

    return(
        <div>   
            <div className="p-[2rem]">
                <h1 className="flex text-2xl ">{categoryName}</h1>
                <div className=" flex text-sm mt-[0.5rem] space-x-3 items-center">
                    <h1>Inicio</h1>
                    <FontAwesomeIcon icon={faAngleRight} />
                    <h1>{categoryName}</h1>
                </div>
            </div>
            <div className="flex flex-wrap space-x-1">
                {products.map(product => (
                    <Link key={product.id} href='/shop/[id]' as={`/shop/${product.id}`}>
                    <div key={product.id}>
                        <img src={product.image} alt={product.name} className=" w-96 h-96 object-cover" />
                        <h2 className="flex p-[1rem]">{product.name}</h2>
                    </div>      
                    </Link> 
                ))}
            </div>
        </div>
    )
}