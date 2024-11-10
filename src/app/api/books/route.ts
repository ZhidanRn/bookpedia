import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const skip = parseInt(searchParams.get('skip') || '0');
    const take = parseInt(searchParams.get('take') || '10'); // Default to 10 items per load

    try {
        const books = await prisma.books.findMany({
            select: {
                title: true,
                category: true,
                imageUrl: true,
                description: true,
                rating: true,
            },
            skip,
            take,
        });
        return NextResponse.json(books);
    } catch (error) {
        return NextResponse.error();
    }
}
