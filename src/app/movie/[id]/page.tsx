"use client";
import React, { useEffect, useState } from "react";

interface Producer {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface Genre {
  id: number;
  name: string;
}

interface Movie {
  id: string;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  genres: Genre[];
  production_companies: Producer[];
}

export default function MoviePage({ params }: { params: { id: string } }) {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=9c9f1a125598ba38d782b021f2db674d`);
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    }

    fetchMovieDetails();
  }, [params.id]);

  if (!movie) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-bold">Loading...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-auto rounded-lg mb-6"
      />
      <p className="text-lg mb-2">
        <span className="font-semibold">Release date:</span> {movie.release_date}
      </p>
      <p className="text-lg mb-4">
        <span className="font-semibold">Overview:</span> {movie.overview}
      </p>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Genre:</h2>
        <ul className="list-disc list-inside">
          {movie.genres.map((genre: Genre) => (
            <li key={genre.id} className="text-lg">{genre.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Producer:</h2>
        <ul className="list-disc list-inside">
          {movie.production_companies.map((producer: Producer) => (
            <li key={producer.id} className="text-lg">{producer.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
