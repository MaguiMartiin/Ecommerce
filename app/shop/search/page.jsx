import axios from "axios"
import Link from "next/link"

const fetchProductSearch = async (name) => {
    try {
        return (await axios.get(`http://localhost:3001/products/?name=${name}`)).data
    } catch (error) { throw new Error(error.message)}
}

const fetchProductSearchCategory = async (id, name) => {
    try {
        return (await axios.get(`http://localhost:3001/categories/?categoryId=${id}&name=${name}`)).data
    } catch (error) { throw new Error(error.message)}
}

export default async function Search (query) {
    const {name} = query.searchParams
    const { id } = query.searchParams
    let products = []

    if (id) {
        products = await fetchProductSearchCategory(id, name)
      } else {
        products = await fetchProductSearch(name)
    }
    
    return(
        <div className=" items-center">
            {products.length === 0 ? (
                <p className="p-[2rem] text-xl ">No se encontraron productos para "{name}".</p>
            ) : (
            <div className="p-[2rem]">
                <h1 className="flex text-2xl ">Resultados de búsqueda: "{name}" </h1>
            </div>
            )}
            
            <div className="grid grid-flow-row gap-1 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 ">
                {products.map(product => (
                    <Link key={product.id} href='/shop/[id]' as={`/shop/${product.id}`}>
                        <div>
                            <img src={product.image} alt={product.name} className=" w-96 h-96 object-cover" />
                            <div className="p-[1rem] mb-[1rem]">   
                                <h2 className="mb-[0.2rem] text-lg">{product.name}</h2>
                                <h2 className="text-sm">{product.Categories?.name}</h2>
                            </div>
                        </div>                        
                    </Link>
                ))}
            </div>
        </div>
    )
}