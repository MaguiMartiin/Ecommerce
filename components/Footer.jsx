import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot,  faEnvelope, faPhone  } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
    return (
        <footer className="bg-cherry_blossom_pink-800 h-auto text-black p-[2rem] justify-center items-center mt-[5rem] ">
            <div className="flex justify-around">
                <div className="flex flex-col items-center w-1/3">
                    <h1 className="text-xl font-semibold mb-2">Contáctanos</h1>
                    <p className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faPhone} className="w-4 h-auto" />
                        <span>+123 456 789</span>
                    </p>
                    <p className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faEnvelope} className="w-4 h-auto" />
                        <span>info@ejemplo.com</span>
                    </p>
                </div>
                <div className="flex flex-col items-center w-1/3">
                    <h1 className="text-xl font-semibold mb-2">Síguenos</h1>
                    <div className="flex justify-center space-x-4 text-2xl text-black">
                        <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-auto"/>     
                        <FontAwesomeIcon icon={faInstagram} className="w-5 h-auto" />
                        <FontAwesomeIcon icon={faTiktok} className="w-5 h-auto" />
                    </div>
                </div>
                <div className="flex flex-col items-center  w-1/3">
                    <h2 className="text-xl font-semibold mb-2">Encuéntranos</h2>
                    <p className="flex items-center space-x-2 text-center">
                        <FontAwesomeIcon icon={faLocationDot} className="w-3 h-auto" />
                        <span>1234 Calle Ejemplo, Barrio Modelo, Ciudad Ideal.</span>
                    </p>
                </div>
            </div>
                <div className="mt-8 text-center">
                    <p>&copy; {new Date().getFullYear()} ModaGo. Todos los derechos reservados.</p>
                </div>
        </footer>
    );
}
