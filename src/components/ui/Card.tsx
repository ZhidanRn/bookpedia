'use client';

import { useState } from 'react';

interface BookProps {
  book: {
    id: number;
    title: string;
    category: string;
    imageUrl: string;
    description: string;
    rating: number;
  };
}

export function Card({ book }: BookProps) {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked((prev) => !prev);
  };

  const limitedDescription = book.description.length > 200 
    ? book.description.substring(0, 200) + '...' 
    : book.description;

  return (
    <div className="relative max-w-xs p-4 border rounded-md shadow-lg group">
      <div className="relative w-full h-full overflow-hidden rounded-md">
        <img
          src={book.imageUrl}
          alt={book.title}
          className="w-full h-full object-cover transition-all duration-300 ease-in-out"
        />
        
        {/* Deskripsi yang muncul saat hover */}
        <div className="absolute inset-0 bg-black bg-opacity-60 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-sm">{limitedDescription}</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-2 text-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
          <h3 className="text-sm font-semibold">{book.title}</h3>
        </div>
      </div>

      {/* Rating dan Tombol Like */}
      {/* <div className="flex justify-between items-center">
        <span className="text-yellow-500">{book.rating} ★</span>
        <button
          onClick={toggleLike}
          className={`px-2 py-1 text-white rounded-md ${isLiked ? 'bg-red-500' : 'bg-gray-500'}`}
        >
          {isLiked ? 'Unlike' : 'Like'}
        </button>
      </div> */}
    </div>
  );
}
