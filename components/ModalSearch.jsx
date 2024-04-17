import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export function ModalSearch({ categories, handleCloseModal }) {
  const [selectedCategory, setSelectedCategory] = useState("default")
  const [searchText, setSearchText] = useState("")
  
  const handleInputChange = (event) => {
    setSearchText(event.target.value.trim())
  }

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value)
  }

  const handleSearch = (event) => {
    event.preventDefault()
    if (selectedCategory === 'default' && searchText !== "") {
      window.location.href = `/shop/search?name=${searchText}`
    }
    else if (selectedCategory !== 'default' && searchText !== "") {
      window.location.href = `/shop/search?id=${selectedCategory}&name=${searchText}`
    }
  }

  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full bg-pink bg-opacity-50 flex justify-end overflow-hidden">
      <div className="w-1/4 p-[1rem] bg-white">
        <div className="flex items-center mb-[2rem]">
          <h1 className="text-xl flex-1 text-center">Buscar...</h1>
          <FontAwesomeIcon icon={faXmark} className="ml-auto w-3 cursor-pointer" onClick={handleCloseModal} />
        </div>
        <div className="border p-[1rem] mb-[1rem]">
          <select className="w-full focus:outline-none" value={selectedCategory} onChange={handleCategoryChange} >
            <option value="default">Todas las categorias</option>
            {categories.map((category) => (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="border p-[1rem] mb-[1rem]">
          <form className="flex items-center" onSubmit={handleSearch}>
            <input type="text" placeholder="Buscar artículos" className="focus:outline-none" value={searchText} onChange={handleInputChange} />
            <button type="submit" className="ml-auto w-4">
              <FontAwesomeIcon icon={faSearch}/>            
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
