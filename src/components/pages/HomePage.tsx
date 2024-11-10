'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/Card';
import Link from 'next/link';
import { NavbarDemo } from '../ui/NavBar';

interface Book {
    id: number;
    title: string;
    category: string;
    imageUrl: string;
    description: string;
    rating: number;
}

export default function BookList() {
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState(false);
    const [skip, setSkip] = useState(0);
    const take = 10; 

    const loadBooks = async () => {
        setLoading(true);
        try {
            const response = await fetch(`/api/books?skip=${skip}&take=${take}`);
            const newBooks = await response.json();
            setBooks((prevBooks) => [...prevBooks, ...newBooks]);
            setSkip((prevSkip) => prevSkip + take);
        } catch (error) {
            console.error('Error loading books:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadBooks();
    }, []);

    return (
      <>
        <NavbarDemo />
        <div className="flex flex-col items-center">
              <Link href="#" className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {books.map((book, index) => (
                    <Card key={index} book={book} />
                ))}
              </Link>
            <button
                onClick={loadBooks}
                disabled={loading}
                className="mt-4 mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
            >
                {loading ? 'Loading...' : 'Load More'}
            </button>
        </div>
      </>
    );
}
