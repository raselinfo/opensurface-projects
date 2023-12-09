import { NextRequest, NextResponse, NextFetchEvent } from "next/server";

type TContext = {
  params: {
    id: string;
  };
};
export const GET = (req: NextRequest, context: TContext) => {
    const {id}=context.params
    console.log(id)
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
};
