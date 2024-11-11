import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    data.password = await bcrypt.hash(data.password, 10);

    await prisma.users.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
        role: data.role,
        picture: "person.png",
      },
    });

    return NextResponse.json({ message: "User registered successfully" });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error processing the request",
        error: error,
      },
      { status: 500 }
    );
  }
}
