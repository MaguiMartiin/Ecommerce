import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark, faSearch } from "@fortawesome/free-solid-svg-icons"

export function ModalSearch ({categories}) {
    return (
        <div className="w-1/2 p-[1rem]">
            <div className="flex items-center mb-[2rem]">
                <h1 className="text-xl flex-1 text-center">Buscar...</h1>
                <FontAwesomeIcon icon={faXmark} className="ml-auto w-3" />
            </div>
            <div className="border p-[1rem] mb-[1rem]">
                <select className="w-full focus:outline-none"> 
                    <option value="default">Todas las categorias</option>
                    {categories.map((e) => (
                        <option value={e.id} key={e.id}>{e.name}</option>
                    ))}       
                </select>
            </div>
            <div className="border p-[1rem] mb-[1rem]">
                <form className="flex items-center">
                    <input type="text" placeholder="Buscar artículos" className="focus:outline-none" />
                    <FontAwesomeIcon icon={faSearch} className="ml-auto w-4" />
                </form>
            </div>
        </div>
    )
}