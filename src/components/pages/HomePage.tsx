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
    const take = 8; 

    const loadBooks = async () => {
        if (loading) return;
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

    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 && 
                !loading
            ) {
                loadBooks();
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading]);

    return (
      <>
        <NavbarDemo />
        <div className="flex flex-col items-center">
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {books.map((book, index) => (
                    <Card key={index} book={book} />
                ))}
            </div>
            {loading && (
                <p className="mt-4 mb-4 text-blue-600">Loading...</p>
            )}
        </div>
      </>
    );
}
