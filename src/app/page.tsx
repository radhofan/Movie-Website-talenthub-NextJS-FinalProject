import Counter from "@/components/counter";
import FormLogin from "@/components/form-login";
import FormLogin2 from "@/components/form-login2";
import Hero from "@/components/hero";
import ItemCard from "@/components/item-card";
import Navbar from "@/components/navbar";
import Todo from "@/components/todo";
import { redirect } from "next/navigation";

export default function Home() {
  let linkImage = "https://cdn2.thecatapi.com/images";

  // redirect("/login")

  return (
    <main className="">

      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-5">
          <ItemCard id="1" name="Abyssinian" imgCat={`${linkImage}/0XYvRd7oD.jpg`} />
          <ItemCard id="2" name="Bombay" imgCat={`${linkImage}/5iYq9NmT1.jpg`} />
          <ItemCard id="3" name="Cheetoh" imgCat={`${linkImage}/IFXsxmXLm.jpg`} />
          <ItemCard id="4" name="Donskoy" imgCat={`${linkImage}/3KG57GfMW.jpg`} />
        </div>
      </div>

    </main>
  );
}
