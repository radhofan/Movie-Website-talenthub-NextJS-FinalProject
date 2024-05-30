import Image from 'next/image';
import Link from 'next/link';

interface Movie {
  id: string;
  title: string;
  poster_path: string;
}

function MovieItem({ id, title, poster_path }: Movie) {
  return (
    <div className="item-card mt-14 bg-white rounded-lg shadow-lg p-4 transform transition-transform duration-200 hover:scale-105">
      <Link 
        href={{
          pathname: `/movie/[id]`,
          query: { id, title, poster_path },
        }} 
        as={`/movie/${id}`}
      >
          <Image
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
            width={800}
            height={800}
            className="h-40 object-cover"
          />
          <h2 className="text-center text-xl font-bold">{title}</h2>
      </Link>
    </div>
  );
}

export default MovieItem;
