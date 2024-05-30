import MovieItem from "@/components/movieItem";

export default function Home() {
  let linkImage = "https://cdn2.thecatapi.com/images";


  return (
    <main className="bg-gray-100 min-h-screen p-8 ml-12">
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <MovieItem id="1" name="Abyssinian" imgCat={`${linkImage}/0XYvRd7oD.jpg`} />
          <MovieItem id="2" name="Bombay" imgCat={`${linkImage}/5iYq9NmT1.jpg`} />
          <MovieItem id="3" name="Cheetoh" imgCat={`${linkImage}/IFXsxmXLm.jpg`} />
          <MovieItem id="4" name="Donskoy" imgCat={`${linkImage}/3KG57GfMW.jpg`} />
        </div>
        <div className="flex justify-center mt-4">
      </div>
      </div>
    </main>
  );
}

