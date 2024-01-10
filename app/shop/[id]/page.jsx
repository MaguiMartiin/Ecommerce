export default function ShopId ({params}) {
    const {id} = params
    return(
        <div>   
            <h1>Esto es un producto {id}</h1>
        </div>
    )
}