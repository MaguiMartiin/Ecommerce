'use client'
import Link from "next/link";
import { fetchCategories } from "./axios";

export default async function Home() {
  const categories = await fetchCategories()

  return (
    <main className="flex flex-wrap items-center bg-slate-400">
      {categories.slice(0,6).map(category => (
        <div key={category.id} className="w-1/3" >
        <Link href={`/product-category/${category.id}`}>
          {category.Products.length > 0 ? (
            <div className="flex" key={category.id}>
              {category.Products.slice(0,1).map(product => (
                  <div className="flex flex-col" key={product.id}>
                    <img src={product.image} alt={product.name} className="w-full h-[50rem] object-cover"/>
                    <h1 className="flex p-[3rem] absolute text-white font-bold text-4xl">{category.name}</h1>
                  </div>
              ))}
            </div>
          ) : ( null )}
        </Link>
        </div>
      ))}
    </main>
  )
}
