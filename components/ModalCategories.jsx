// ModalCategories.jsx
import Link from "next/link";

export function ModalCategories({ categories, onMouseEnter, onMouseLeave }) {
  return (
    <div className="fixed w-1/4 h-1/2 text-black rounded-2xl bg-champagne_pink mt-[0.5rem] p-[1rem] shadow-xl z-10 overflow-y-auto "
      onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {categories && categories.map((e, index) => (
        <Link key={index} className="flex mb-[0.5rem] hover:text-black" href={`/product-category/${e.id}`}>
          {e.name}
        </Link>
      ))}
    </div>
  );
}
