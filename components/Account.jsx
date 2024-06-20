'use client'
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicket, faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

export default function Account ({setIsLoggedIn}) {
    const router = useRouter()

    const handleLogout = () => {
        localStorage.removeItem('token')
        setTimeout(() => {
            setIsLoggedIn();
            router.push('/shop')
        }, 1000);
    }

    return (
        <div className="pt-[5rem] flex">
            <div className="flex flex-col w-1/4 p-[3rem] justify-center items-center space-y-6">
                <Link href='my-account/profile' className="space-x-2">
                    <FontAwesomeIcon icon={faUser} />
                    <button>Perfil</button>
                </Link>
                <Link href='my-account/orders' className="space-x-2">
                    <FontAwesomeIcon icon={faTicket}/>
                    <button>Ordenes</button>
                </Link>
                <div className="space-x-2">
                    <FontAwesomeIcon icon={faRightFromBracket} />
                    <button onClick={handleLogout}>Cerrar sesión</button>
                </div>
            </div>
            <div className="flex flex-col p-[4.5rem] w-3/4 mt-[2rem]">
                <div className=" space-y-6">
                    <h1 className=" text-2xl">¡Hola!</h1>
                    <h1>Gracias por iniciar sesión.</h1>
                    <p>Acá podrás ver el detalle de tu cuenta, tus pedidos recientes y todos los artículos que agregaste en favoritos. </p>
                    <Link href='/shop'>  
                        <button className="p-[1rem] bg-cherry_blossom_pink text-white font-semibold mt-[1.5rem]">Ir a la tienda</button>
                    </Link>
                </div>
            </div>
        </div>
        // si es adm, productos, ordenes y usuarios.
    )
}