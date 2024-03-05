// ModalCategories.jsx
import Link from "next/link";

export function ModalCategories({ categories, onMouseEnter, onMouseLeave }) {
  return (
    <div className="fixed w-1/4 h-1/2 text-black rounded bg-white ml-[5rem] mt-[0.5rem] p-[1rem] shadow-xl"
      onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {categories && categories.map((e, index) => (
        <Link key={index} className="flex mb-[0.5rem] hover:text-red-700" href={`/product-category/${e.id}`}>
          {e.name}
        </Link>
      ))}
    </div>
  );
}
