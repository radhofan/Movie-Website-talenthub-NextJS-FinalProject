"use client";

import Image from "next/image";
import Link from "next/link";

interface Cat {
  id: string
  name: string;
  imgCat: string;
}

function ItemCard({ id, name, imgCat }: Cat) {
  function handleClick() {
    console.log(name);
  }

  return (
    <div className="item-card bg-white rounded-lg shadow-lg p-4 transform transition-transform duration-200 hover:scale-105" onClick={handleClick}>
      <Link href={`/cat/${id}`}>
        <Image
          src={imgCat}
          alt={name}
          width={800}
          height={100}
          className="h-40 object-cover"
        />
        <h2 className="text-center text-xl font-bold">{name}</h2>
      </Link>
    </div>
  );
}

export default ItemCard;
