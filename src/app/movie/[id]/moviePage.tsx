import React from "react";

function MovieDetail({ params }: { params: { id: string, title: string, poster_path: string; } }) {
  // Destructure parameters
  const { id, title, poster_path } = params;

  return (
    <div className="movie-details">
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        className="w-64 h-auto mx-auto"
      />
      <h1 className="text-2xl font-bold text-center mt-4">{title}</h1>
      <p className="text-gray-700 mt-2">ID: {id}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default MovieDetail;
