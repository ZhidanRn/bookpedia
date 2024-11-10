// // pages/api/books.ts
// import { NextApiRequest, NextApiResponse } from 'next';
// import { PrismaClient } from '@prisma/client';


// const prisma = new PrismaClient();
// export default async function GET( req: NextApiRequest, res: NextApiResponse) {
//   // Cek apakah metode request adalah GET
//     try {
//       // Ambil data dari tabel books
//     //   const books = await prisma.books.findMany({
//     //     select: {
//     //       title: true,
//     //       category: true,
//     //       imageUrl: true,
//     //       description: true,
//     //       rating: true,
//     //     },
//     //   });

//       res.status(200).json("OK");
//     } catch (error) {
//       res.status(500).json({ error: 'Failed to fetch books' });
//     }
// }

import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// API Route untuk fetch movies
export async function GET() {
    const books = await prisma.books.findMany({
        select: {
            title: true,
            category: true,
            imageUrl: true,
            description: true,
            rating: true,
        },
        take: 10
    });


    return NextResponse.json(books);;
}