import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();
    // YOU MAY WANT TO ADD SOME VALIDATION HERE

    console.log({ username, password });
  } catch (e) {
    console.log({ e });
  }

  return NextResponse.json({ message: "success" });
}