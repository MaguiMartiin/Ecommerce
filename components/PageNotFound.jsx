import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"

export default function PageNotFound () {
    return(
        <div className="flex flex-col items-center font-bold p-[3rem] pt-[10rem]">
            <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faExclamationTriangle} color="black" size="2xl"/>
                <h1 className="text-7xl font-bold">404</h1>
            </div>
            <h1 className="mb-[2rem]">Página no encontrada</h1>
            <h1 className="w-1/4 font-normal text-center ">Lo sentimos, no pudimos encontrar la página que estabas buscando. Te sugerimos que vuelvas a la página de inicio.</h1>
            <Link href='/shop'>
                <button className="p-[1rem] bg-champagne_pink font-light mt-[2rem]  rounded-lg">Regresar a la tienda</button>
            </Link>
        </div>
    )
}