import { NextRequest, NextResponse } from "next/server";

const handler = async (req: NextRequest) => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await data.json();

  return NextResponse.json(posts, { status: 200 });
};

export { handler as GET };
