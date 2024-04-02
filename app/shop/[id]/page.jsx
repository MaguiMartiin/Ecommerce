import axios from "axios";
import SizeColorList from "../../../components/SizeColorList";

const fetchProductId = async (id) => {
    try { return (await axios.get(`http://localhost:3001/products/${id}`)).data;
    } catch (error) { throw new Error(error.message)}
}

export default async function ShopId ({params}) {
    const {id} = params
    const productId = await fetchProductId(id)
    
    return(
        <div className="flex">   
            <div className="w-1/2 flex justify-end">
                <img src={productId.image} alt={productId.name} className="w-1/2" />
            </div>
            <div className="w-1/2 mt-[1.5rem] ml-[3rem]">
                <h2>{productId.Categories[0]?.name}</h2>
                <h1 className="text-3xl">{productId.name}</h1>
                <h2 className="text-2xl mt-[1rem]">${productId.price}</h2>
                <h3 className="mt-[2rem]">{productId.description}</h3>
                <div className="mt-[3rem]">    
                    <SizeColorList stock={productId.stock}/>
                </div>
            </div>
        </div>
    )
}