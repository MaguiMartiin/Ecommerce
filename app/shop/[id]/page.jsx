import { fetchProductId } from "../../axios";
import SizeColorList from "../../../components/SizeColorList";

export default async function ShopId ({params}) {
    const {id} = params
    const productId = await fetchProductId(id)
    
    return(
        <div className="flex">   
            <div className="w-1/2 flex justify-end">
                <img src={productId.image} alt={productId.name} className="w-1/2 h-[35rem] object-cover" />
            </div>
            <div className="w-1/2 mt-[1.5rem] ml-[3rem] font-light">
                <h2>{productId.Categories[0]?.name}</h2>
                <h1 className="text-3xl font-semibold">{productId.name}</h1>
                <h2 className="text-2xl mt-[0.5rem] text-cherry_blossom_pink font-extrabold">${productId.price}</h2>
                <h3 className="mt-[2rem]">{productId.description}</h3>
                <div className="mt-[3rem]">    
                    <SizeColorList product={productId}/>
                </div>
            </div>
        </div>
    )
}