import axios from "axios";

const fetchProductId = async (id) => {
    try { return (await axios.get(`http://localhost:3001/products/${id}`)).data;
    } catch (error) { throw new Error(error.message)}
}

export default async function ShopId ({params}) {
    const {id} = params
    const productId = await fetchProductId(id)
    
    return(
        <div>   
            <h1>{productId?.name}</h1>
        </div>
    )
}