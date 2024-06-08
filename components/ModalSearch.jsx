'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useUIStore } from "./Store";
import clsx from "clsx";

export function ModalSearch({ categories}) {
  const { isModalSearchOpen, closeModalSearch } = useUIStore()
  useEffect(() => {
    if(isModalSearchOpen) {document.body.classList.add("modal-open")}
    else {document.body.classList.remove("modal-open")}
  }, [isModalSearchOpen])

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
    <div >
      {isModalSearchOpen && (<div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />)}
      {isModalSearchOpen && (<div onClick={ closeModalSearch } className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm" />)}
      <div className={
        clsx("fixed p-5 right-0 top-0 w-1/4 h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
        {
          "translate-x-full": !isModalSearchOpen,
        })}>  
        
        {isModalSearchOpen &&
        <div>
          <div className="flex items-center mb-[2rem]">
            <h1 className="text-xl flex-1 text-center">Buscar...</h1>
            <FontAwesomeIcon icon={faXmark} className="ml-auto w-3 cursor-pointer" onClick={closeModalSearch} />
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
        }
      </div>
    </div>
  );
}
