import axios from "axios";

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
            <h1>Esto es la categoria {categoryId} </h1>
            {products.map(product => (
                    <div key={product.id}>
                        <img src={product.image} alt={product.name} className=" w-96 h-96 object-cover" />
                        <h2 className="flex p-[1rem]">{product.name}</h2>
                    </div>       
            ))}
        </div>
    )
}