import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

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

    return(
        <div>   
            {products.map(product => (
                <div key={product.id}>
                    <div className="p-[2rem]">
                        <h1 className="flex text-2xl ">{product.Categories[0]?.name}</h1>
                        <div className=" flex text-sm mt-[0.5rem] space-x-3 items-center">
                            <h1>Inicio</h1>
                            <FontAwesomeIcon icon={faAngleRight} />
                            <h1>{product.Categories[0]?.name} </h1>
                        </div>
                    </div>
                    <img src={product.image} alt={product.name} className=" w-96 h-96 object-cover" />
                    <h2 className="flex p-[1rem]">{product.name}</h2>
                </div>       
            ))}
        </div>
    )
}