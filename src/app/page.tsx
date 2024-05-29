"use client";
import Counter from "@/components/counter";
import FormLogin from "@/components/form-login";
import FormLogin2 from "@/components/form-login2";
import Hero from "@/components/hero";
import ItemCard from "@/components/item-card";
import Navbar from "@/components/navbar";
import Todo from "@/components/todo";
import { redirect } from "next/navigation";
import { useState } from 'react';

export default function Home() {
  const [randomCatLink, setRandomCatLink] = useState("https://api.thecatapi.com/v1/images/search");

  function refreshRandomCat() {
    setRandomCatLink(`https://api.thecatapi.com/v1/images/search?${new Date().getTime()}`);
  }
  let linkImage = "https://cdn2.thecatapi.com/images";


  return (
    <main className="bg-gray-100 min-h-screen p-8">
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Cats */}
          <ItemCard id="1" name="Abyssinian" imgCat={`${linkImage}/0XYvRd7oD.jpg`} />
          <ItemCard id="2" name="Bombay" imgCat={`${linkImage}/5iYq9NmT1.jpg`} />
          <ItemCard id="3" name="Cheetoh" imgCat={`${linkImage}/IFXsxmXLm.jpg`} />
          <ItemCard id="4" name="Donskoy" imgCat={`${linkImage}/3KG57GfMW.jpg`} />
        </div>
        <div className="flex justify-center mt-4">
        <button onClick={refreshRandomCat} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Refresh Random Cat
        </button>
      </div>
      </div>
    </main>
  );
}
