import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

export default function NotFoundPage (){
    return (
        <div className="pt-[5rem] h-[30rem] justify-center flex flex-col items-center space-y-4">
            <FontAwesomeIcon icon={faLock} size="3x" className="text-gray-700" />
            <h1>Acceso restringido</h1>
            <div className="flex items-center space-x-2">
                <h1>Para continuar,</h1>
                <Link href='/my-account'>
                    <button className="bg-cherry_blossom_pink text-white font-semibold p-[0.8rem] rounded">
                        Iniciar sesión
                    </button>
                </Link>
            </div>
        </div>
    ); 
}