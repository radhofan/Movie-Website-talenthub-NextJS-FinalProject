"use client";

import { useEffect, useState } from 'react';
import MovieItem from "@/components/movieItem";

interface Movie {
  id: string;
  title: string;
  poster_path: string;
}

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]); // Initialize with an empty array and type it as an array of Movie objects

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        // Fetch the JSON file containing movie IDs
        const response = await fetch('/movies.json');
        if (!response.ok) {
          throw new Error('Cant find movies json');
        }
        const movieData = await response.json();

        // Extract movie IDs from the JSON data
        const movieIDs = movieData.map((movie: Movie) => movie.id);

        // Fetch movie data for each ID
        const moviePromises = movieIDs.map(async (id: string) => {
          const movieResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9c9f1a125598ba38d782b021f2db674d`);
          if (!movieResponse.ok) {
            throw new Error(`Failed to fetch data for movie with ID ${id}`);
          }
          return movieResponse.json();
        });

        // Wait for all movie data to be fetched
        const movieDetails = await Promise.all(moviePromises);
        setMovies(movieDetails);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <main className="bg-gray-100 min-h-screen p-8 ml-12">
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {movies.map((movie: Movie) => (
            <MovieItem
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
