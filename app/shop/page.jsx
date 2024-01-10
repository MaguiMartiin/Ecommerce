import axios from "axios"

const fetchProducts = async () => {
    try { return (await axios.get('http://localhost:3001/products')).data;
    } catch (error) { throw new Error(error.message)}
};

export default async function Shop () {
    const products = await fetchProducts()
    return (
        <div className="flex min-h-screen flex-col items-center bg-slate-500">
            <div>
                {products.map(product => (
                    <article key={product.id}>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                    </article>
                ))}
            </div>
        </div>
    )
}